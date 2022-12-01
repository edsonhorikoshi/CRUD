const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController')




router.get('/', HomeController.showHome);
router.get('/contato', HomeController.showContato);
router.get('/login', HomeController.showLogin);
router.get('/cadastro', HomeController.showCadastro);

/* router.use(function(req, res, next) {
    res.status(404).send("Esta rota não existe");
}); */

module.exports = router;