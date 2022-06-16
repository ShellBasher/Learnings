const {
    connect
} = require ('mongoose')

function connect_to_db(){
    connect("mongodb://localhost:27817") //adress URI de notre DB?
    .then(() => console.log("Connexion à la DB"))
    .catch(error => console.log(error))
}

module.exports = connect_to_db