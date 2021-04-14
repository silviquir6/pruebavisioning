const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.usuariosPath= '/api/usuarios';
        this.port = process.env.PORT;
        //conectar a base de datos
        this.conectarDB();
        //middleware
        this.middlewares();
        //rutas de mi aplicación
        this.routes();
    }

    async conectarDB(){

        await dbConnection();
    }


    middlewares(){

        //CORS
       this.app.use( cors({

        origin: '*',
      
        methods: ['POST','PUT','GET','DELETE','OPTIONS'],
      
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
      
      })) ;

       //Lectura y parseo del body
       this.app.use(express.json());

        //Directorio publico
this.app.use(express.static('public'));

    }
    routes(){
       
          this.app.use(this.usuariosPath , require ('../routes/usuarios'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto http://localhost:${this.port}`)
          })
    }


}
module.exports= Server;