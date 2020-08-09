//Servidor
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//Configurar Nunjucks - Template Engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Configurar arquivos estáticos (Imagens, CSS, SCRIPTS)
server.use(express.static("public"))
//Receber os dados do req.body
.use(express.urlencoded({ extended: true }))
//Rotas da aplicação
.get("/", pageLanding )
.get("/study", pageStudy )
.get("/give-classes", pageGiveClasses )
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500)