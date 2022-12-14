const { request, response } = require("express");
const pool = require("../db/connection");
const {modeloClientes} = require("../models/clientes");

const getClient = async (req = request, res = response) =>{
    
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const clientes = await conn.query(modeloClientes.queryGetClient, (error) => {throw new Error(error) })
        
        if (!clientes) {
            res.status(404).json({msg:"no se encontraron registros del Cliente"})
            return
        }
        res.json({clientes})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getClientByID = async (req = request, res = response) =>{
    
    const {id} = req.params
    let conn;
    
    try {
        conn = await pool.getConnection()
        
        const [clientes] = await conn.query(modeloClientes.querygetClientByID, [id], (error) => {throw new Error(error) })
        
        if (!clientes) {
            res.status(404).json({msg: `No se encontró registro del cliente con el ID ${id}`})
            return
        }
        res.json({clientes})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deleteClientByID = async (req = request, res = response) =>{
    
    const {id} = req.query
    let conn;
    
    try {
        conn = await pool.getConnection()
       
        const {affectedRows} = await conn.query(modeloClientes.querydeleteClientByID, [id], (error) => {throw new Error(error) })
       
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo eliminar el cliente con el ID ${id}`})
            return
        }
 
        res.json({msg: `El cliente con ID ${id} se elimino sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addClient = async (req = request, res = response) =>{
    
    const {
        Usuario,
        Correo,
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrasena,
        Fecha_Nacimiento,
        Activo
    } = req.body

    if (
        !Usuario ||
        !Correo ||
        !Nombre ||
        !Apellidos ||
        !Edad ||
        !Genero ||
        !Activo
    ){
        res.status(400).json({msg: "Falta información del Cliente"})
        return
    }

    let conn;
    
    try {
        conn = await pool.getConnection()
        

        const [user] = await conn.query(modeloClientes.queryClientExists, [Correo])

        if (user) {
            res.status(403).json({msg: `El CLiente ${Correo} ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloClientes.queryaddClient, 
        [ Usuario,
        Correo,
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrasena,
        Fecha_Nacimiento,
        Activo
    ], (error) => {throw new Error(error) })
        
        if (!affectedRows === 0) {
            res.status(404).json({msg: `No se pudo agregar el registro del Cliente ${Correo}`})
            return
        }
 
        res.json({msg: `El Cliente ${Correo} se agrego sastifactoriamente. `})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports = {getClient,getClientByID,deleteClientByID,addClient}
//jhosselyn gonzalez