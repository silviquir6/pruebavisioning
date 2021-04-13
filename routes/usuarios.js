const Router = require ('express');
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const { usuariosGET, 
  usuariosPUT,
   usuariosPOST, 
   usuariosDELETE } = require('../controllers/usuarios');

router= Router();

  router.get('/', usuariosGET);
  
  router.put('/:id', [check('id', 'No es un id valido').isMongoId(), validarCampos],  usuariosPUT);

  router.post('/', [check('nombre', 'el nombre es obligatorio').not().isEmpty(),
   check('password', 'la contraseña debe tener más de 6 letras').isLength({min:6}), 
   check('correo', 'el correo no es valido').isEmail(),validarCampos]
  ,  usuariosPOST);

  router.delete('/:id',[check('id', 'No es un id valido').isMongoId(), validarCampos],  usuariosDELETE);

module.exports = router;