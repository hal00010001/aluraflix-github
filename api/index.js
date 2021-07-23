const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.listen(3470, () => console.log('A API está funcionando!'))