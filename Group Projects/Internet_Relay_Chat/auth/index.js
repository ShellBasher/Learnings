const express = require('express')

const databases = require('./databases/databases')
const routes = require('./routes/routes')
const app = express()

const port = 8080

databases()


app.use(routes)
app.listen(port, () => console.log("Lancement sur le port", port))