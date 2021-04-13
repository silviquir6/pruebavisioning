
const {response} = require ('express');

 const usuariosGET= (req, res = response) => {
    res.json(
        {msg: 'get API'
        });
}
const usuariosPUT= (req, res = response) => {
    res.json(
        {msg: 'put API'
        });
}
const usuariosPOST= (req, res = response) => {
    res.json(
        {msg: 'post API'
        });
}
const usuariosDELETE= (req, res = response) => {
    res.json(
        {msg: 'delete API'
        });
}

module.exports = {usuariosGET, usuariosDELETE, usuariosPOST, usuariosPUT};