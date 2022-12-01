const HomeController ={
    showHome: (req, res) => {
        res.send('Página Inicial')
    },

    showContato: (req, res) => {
        res.send('contato')
    },

    showLogin: (req, res) => {
        res.send('login')
    }, 

    showCadastro:(req, res) => {
        res.send('Cadastro')
    }

};




module.exports = HomeController;