
const {response} = require ('express');
const bcryptjs= require ('bcryptjs');


const Usuario = require('../models/usuario');



 const usuariosGET= async(req, res = response) => {

    
    //const {limite=5}= req.query;

    const usuarios= await  Usuario.find();


    res.json(
        {//msg: 'get API',
       // query
       usuarios
        });
}
const usuariosPUT= async(req, res = response) => {
const {id}=  req.params;
const {_id, password, correo, ...resto} = req.body;
//validar contra la base de datos

if (password){
//encriptar la contraseña
const salt= bcryptjs.genSaltSync();
resto.password= bcryptjs.hashSync(password, salt);

}
const usuario= await Usuario.findByIdAndUpdate(id, resto);

    res.json(
        {msg: 'put API',
        usuario
        });
}
const usuariosPOST= async(req, res = response) => {

  

    console.log('llega aqui al POST');
    const {nombre, correo, password, rol}= req.body;

     
    const usuario = new Usuario( {nombre, correo, password, rol});


//verificar si el correo existe
const existeEmail= await Usuario.findOne({correo});
if(existeEmail)
{return res.status(400).json({
msg: 'Ese correo ya está registrado'
})

}
//encriptar la contraseña
const salt= bcryptjs.genSaltSync();
usuario.password= bcryptjs.hashSync(password, salt);
//guardarla en base de datos

   await usuario.save();
    res.json(
        {msg: 'post API',
        usuario
        });
}
const usuariosDELETE= async (req, res = response) => {

    const {id}= req.params;

    //fisicamente lo borramos
const usuario= await Usuario.findByIdAndDelete(id);

    res.json(
        {msg: 'delete API',
       usuario
        });
}

module.exports = {usuariosGET, usuariosDELETE, usuariosPOST, usuariosPUT};