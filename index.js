const jserver = require('json-server')

const server = jserver.create()

const middleware = jserver.defaults()

const router = jserver.router('dbt.json')

server.use(middleware)

server.use(router)

const port =3000

server.listen(port,()=>{
   console.log("media server started ...... listening on"+port);
   
})
