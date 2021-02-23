const http = require('http');
const url = require('url');
const querystring= require('querystring');

var server = http.createServer(
    function (req, res) {
       /* res.writeHead(200, {
            "Content-Type" : "text/html ; charset=utf-8"
        } );
        res.write(" Hello <p>Ceci est la réponse du serveur <strong> http</strong></p>")
       */

       var path= url.parse(req.url).pathname;
       console.log(path);

       var params = querystring.parse(url.parse(req.url).query) ;
       console.log(params['id']);
       
       switch (path) {
           case "/":
                res.writeHead(200, {
                    "Content-Type" : "text/html ; charset=utf-8"
                } );
                res.write(" <p>Page d'accueil </p>")
                break ;
            
            case "/participants":
                res.writeHead(200, {
                    "Content-Type" : "text/html ; charset=utf-8"
                } );
                if(!params['id'])
                    res.write(" <p>Liste des participants </p>");
                else 
                     res.write(" <p>Participant avec id=  </p>"+params['id'] );

            break;
           default:
                res.writeHead(404, {
                    "Content-Type" : "text/html ; charset=utf-8"
                } );
                res.write(" <p>Page introuvable </p>")
               break;
       }
       res.end();
    }
);

server.listen(8080);
