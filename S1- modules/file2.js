const readF = require('read-file');

var content = readF('message.txt', 'utf-8' ,
    function (err, content) {
        console.log(content);
    }
);

console.log("traitement suivant");

