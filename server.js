const express = require('express') 
const clientesRouter = require('./routes/clientes')
const peliculasRouter = require('./routes/peliculas')
const cors = require("cors")

class Server{
    constructor(){
      this.app = express()
      this.paths = {
         clientes:"/api/v1/clientes",
         peliculas:"/api/v1/peliculas"
        }
        this.middlewares() 
        this.routes()
      
    }

routes(){
    
  //this.app.get('/', (req, res) => {
    //res.send('Hello World')
    //  }
    this.app.use(this.paths.clientes, clientesRouter)
    this.app.use(this.paths.peliculas, peliculasRouter)
}

middlewares() {
  this.app.use(cors()) //Permite solicitudes de origen cruzado//
  this.app.use(express.json()) //Habilita la lectura de contenido en formato JSON//
}

listen(){
    this.app.listen(process.env.PORT,() => { //Poner un this aqui xd//
    console.log("Backend en ejecución en el puerto", process.env.PORT)
})
}
}

module.exports = Server

//jhosselyn Gonzalez
