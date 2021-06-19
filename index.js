const http = require('http')
const fs = require('fs')
const server = http.createServer(((req, res) => {
    if (req.url === '/index' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
        const mainPage = fs.createReadStream(__dirname + '/index.html', 'utf8')
        return mainPage.pipe(res)
    }

    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'})
        const about = fs.createReadStream(__dirname + '/about.html', 'utf8')
        return about.pipe(res)
    }

    else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf8'})
        const err404 = fs.createReadStream(__dirname + '/404.html', 'utf8')
        return err404.pipe(res)
    }

}))
server.listen(3000, 'localhost')