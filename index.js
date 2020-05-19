const { createServer } = require('http');
const { hostname } = require('os');

const server = createServer((req, res) => {
    res.end(`Hello world from ${hostname()}`)
});

server.listen(+process.env.PORT, () => console.log(`server listenning on port ${process.env.PORT}`))