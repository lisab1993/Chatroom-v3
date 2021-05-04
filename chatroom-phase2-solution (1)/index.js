const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const router = express.Router();
const port = 8000
const fs = require('fs')


//GET
app.get('/', (req, res) => {
    // renders index.html
    res.sendFile(__dirname + '/messages.txt')
    fs.readFile('../messages', 'utf8', (err, text) => {
        // const messages = text
        //     .split('\n')
        //     .filter(txt => txt) // will filter out empty string
        //     .map(JSON.parse)
        console.log(text)
        // res.json(messages)
    })
})

//POST
app.use(express.json());

app.post('/messages', function (request, response) {
    console.log(request.body);      // your JSON
    response.json(request.body)
});

//Static files
app.use(express.static('static'))




//Server is listening
server.listen(port, () => {
    console.log('listening on the port')
})