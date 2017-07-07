let express = require('express');

let server = express();

server.configure(() => {
    server.use(express.static(__dirname + '/public'));
});

server.listen(8888)
