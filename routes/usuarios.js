const Router = require ('express');
const { usuariosGET, 
  usuariosPUT,
   usuariosPOST, 
   usuariosDELETE } = require('../controllers/usuarios');

router= Router();

  router.get('/', usuariosGET);
  
  router.put('/', usuariosPUT);

  router.post('/', usuariosPOST);

  router.delete('/', usuariosDELETE);

module.exports = router;