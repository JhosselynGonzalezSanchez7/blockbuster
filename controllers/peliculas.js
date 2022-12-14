const { request, response } = require("express");
const pool = require("../db/connection");
const {modeloPeliculas} = require("../models/peliculas");

const getPelis = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const peliculas = await conn.query(modeloPeliculas.queryGetPelis, (error) => {throw new Error(error) })
        
        if (!peliculas) {
            res.status(404).json({msg:"no se encontraron registros de la pelicula"})
            return
        }
        res.json({peliculas})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getPelisByID = async (req = request, res = response) =>{
    
    const {id} = req.params
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const [peliculas] = await conn.query(modeloPeliculas.querygetPelisByID, [id], (error) => {throw new Error(error) })
        
        if (!peliculas) {
            res.status(404).json({msg: `No se encontró registro de la pelicula con el ID ${id}`})
            return
        }
        res.json({peliculas})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deletePelisByID = async (req = request, res = response) =>{
    
    const {id} = req.query
    let conn;
    
    try {
        conn = await pool.getConnection()
       
        const {affectedRows} = await conn.query(modeloPeliculas.querydeletePelisByID, [id], (error) => {throw new Error(error) })
       
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo dar de baja la Pelicula con el ID ${id}`})
            return
        }
 
        res.json({msg: `La pelicula con ID ${id} se dio de baja sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addPelis = async (req = request, res = response) =>{
    
    const {
      
        Titulo,
        Genero,
        Reseña,
        Fecha_de_estreno,
        Activo
    } = req.body

    if (
      
        !Titulo ||
        !Genero ||
        !Reseña ||
        !Fecha_de_estreno ||
        !Activo
    ){
        res.status(400).json({msg: "Falta información de la pelicula"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloPeliculas.queryPelisExists, [Titulo])

        if (user) {
            res.status(403).json({msg: `La pelicula ${Titulo} ya se encuentra registrada.`})
            return
        }

        const {affectedRows} = await conn.query(modeloPeliculas.queryaddPelis, 
        [
        Titulo,
        Genero,
        Reseña,
        Fecha_de_estreno,
        Activo
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro de la pelicula ${Titulo}`})
            return
        }
 
        res.json({msg: `La pelicula ${Titulo} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


module.exports = {getPelis,getPelisByID, deletePelisByID,addPelis}

//jhosselyn gonzalez






