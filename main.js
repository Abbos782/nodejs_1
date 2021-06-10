let http = require('http')

const express = require('express')

const app = express()



const server = http.createServer((req, res)=>{

    console.log(req.url, req.method, req.headers)
}
)

server.listen(2323)
