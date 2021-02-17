//ordre séquentiel
/*for (let i = 0; i < 1000; i++) {
    setImmediate(_ => console.log("----------------------------------"));
    setImmediate(_ => console.log("A"));
    setImmediate(_ => console.log("B"));
}*/
/*
//non déterministe
for (let i = 0; i < 100; i++) {
    setTimeout(_ => console.log("A"),0);
    setImmediate(_ => console.log("B"));
}*/

//Timeout est prioritaire : dans un contexte d'I/O
/*const fs = require('fs');
fs.readFile('message.txt', 
    () => {
        setTimeout(
            function () {
                console.log("settimeout log");
            }
            , 0);
        
            console.log("setimmediate log");

            setImmediate(
                function () { console.log("setimmediate log");
              
            });
    }
);
*/
/*
var t1 = setInterval(
    ()=>{
        console.log("log setInterval");
    }, 5000
);

console.log("traitement suivant"); //synch
clearInterval(t1);*/

/*
console.log("A");
setImmediate(_ => console.log("B"));
setImmediate(_ => console.log("C"));

console.log("E");*/

/*
setImmediate(_ => setTimeout(_ => console.log("A")),0);
setImmediate(_ => console.log("B"),0);
setImmediate(_ => setTimeout(_ => console.log("C")),10);
setTimeout(_ => console.log("D"),10);*/