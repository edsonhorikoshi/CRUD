const database = require('../database/usuarios.json')
const { v4: gerarID } = require('uuid');
const fs = require('fs');
const path = require('path');

const userController= {
    showUser:(req, res) => {
        const usuarios = database;
        res.send(database)
    },





    showUserOne:(req, res) => {


        const { admin } = req.query;


        const usuario = database.usuarios.find(usuario => usuario.id == req.params.id);

        if(!usuario) {
            return res.send("Usuario não existe")
        }


        res.send(usuario)
    },


    store: (req, res) => {
        const { nome , email , senha } = req.body;

        const novoUsuario = {
            id: gerarID(),
            nome,
            email,
            senha
        }
                /* 
                        let content = fs.readFileSync(path.resolve())

                        const db = JSON

                        let usuariosAtualizado = database.usuarios.push(novoUsuario);
                        let ususariosJson = JSON.stringify(usuariosAtualizado);

                        fs.writeFileSync(path.resolve());

                        return res.send(novoUsuario)
                */
        database.usuarios.push(novoUsuario);

        let bancoAtualizado = JSON.stringify(database, null, 4);

        fs.writeFileSync(path.resolve("src", "databse", "ususario.json"), bancoAtualizado);

        
        return res.send(novoUsuario);


    }





}

module.exports = userController;