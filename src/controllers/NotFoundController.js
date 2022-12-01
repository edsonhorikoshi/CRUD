const NotFoundController = {
    showNotFound: function(req, res, next) {
        res.status(404).send("Esta rota não existe");
    }
 }


module.exports = NotFoundController