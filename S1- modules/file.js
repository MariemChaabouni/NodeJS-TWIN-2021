const fs=require("fs");

//synchrone , bloquante
try{
    var content=fs.appendFileSync('message.txt', 'Hello from NodeJS');
    console.log("Message ajouté");
}catch(err){
    console.log(err);
}

//asynchrone , non bloquant
fs.readFile('message.txt', 'utf-8', 
    function(err, content) {
        console.log(content);
    }
);

console.log("Traitement suivant");
