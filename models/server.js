const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.usuariosPath= '/api/usuarios';
        this.port = process.env.PORT;
        //middleware
        this.middlewares();
        //rutas de mi aplicación
        this.routes();
    }

    middlewares(){

        //CORS
       this.app.use( cors()) ;

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