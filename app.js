//var buzzBuzzers = require('buzz-buzzers');
//const buzzers = buzzBuzzers();

var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


app.use(express.static('public'));

// Chargement de la page index.html
app.get('/', function (req, res) {
  //  res.sendfile(__dirname + '/img/1.bmp');
  //  res.sendfile(__dirname + '/img/2.bmp');
  res.sendFile(__dirname + '/qpuc.html');

});

app.get('/master', function (req, res) {
  res.sendFile(__dirname + '/master.html');
});




io.sockets.on('connection', function (socket, pseudo) {
  socket.on('action', function (message) {
    console.log(message)
    socket.broadcast.emit('action', message);
  });
});

/*DECOMMENTE CA BLAIREAU  !  */
/*
swag();
setTimeout(clignoter, 5000)
function clignoter() {
  var i = 0;
  while (i < 10000) {
    setTimeout(allumer, i);
    setTimeout(eteindre, i + 100);
    i += 200;
  }
  setTimeout(allumer, 10200);
}
function swag() {
  buzzers.setLeds(true, false, false, false);
  setTimeout(function () {
    buzzers.setLeds(true, true, false, false);
    setTimeout(function () {
      buzzers.setLeds(true, true, true, false);
      setTimeout(function () {
        buzzers.setLeds(true, true, true, true);
        setTimeout(function () {
          buzzers.setLeds(false, true, true, true);
          setTimeout(function () {
            buzzers.setLeds(false, false, true, true);
            setTimeout(function () {
              buzzers.setLeds(false, false, false, true);
              setTimeout(function () {
                buzzers.setLeds(false, false, false, false);
                setTimeout(function () {
                  buzzers.setLeds(true, true, true, true);
                  setTimeout(function () {
                    buzzers.setLeds(false, false, false, false);
                    setTimeout(function () {
                      buzzers.setLeds(true, true, true, true);
                      setTimeout(function () {
                        buzzers.setLeds(false, false, false, false);
                        setTimeout(function () {
                          buzzers.setLeds(true, true, true, true);
                          setTimeout(function () {
                            buzzers.setLeds(false, false, false, false);
                            setTimeout(function () {
                              buzzers.setLeds(true, true, true, true);

                            }, 250);
                          }, 250);
                        }, 250);
                      }, 250);
                    }, 250);
                  }, 250);
                }, 250);
              }, 250);
            }, 250);
          }, 250);
        }, 250);
      }, 250);
    }, 250);
  }, 250);
}
function allumer() {
  buzzers.setLeds(true, false, false, false);
}
function eteindre() {
  buzzers.setLeds(false, false, false, false);
}

buzzers.onError(function (err) {

  console.log('Error:', err);

});



buzzers.onPress(function (ev) {
  if (ev.controllet == 1) {
    if (ev.button == 0) {
      //BANQUE
      console.log("Banque");
      io.sockets.emit("action", "banque");
    }
    if (ev.button == 1) {
      // PLUS
      console.log("Plus");
      io.sockets.emit("action", "plus");
    }
    if (ev.button == 4) {
      // MOINS
      console.log("Moins");
      io.sockets.emit("action", "moins");
    }
  }
*/
  /*if(ev.button==0){
    console.log("[BUZZER] le buzzer " +ev.controller+ " a buzzé");
    if(ev.controller == 1) {
      io.sockets.emit("qui", "gauche")
    }
    if(ev.controller == 4) {
     io.sockets.emit("qui", "droite")
   }
 }*/
  /*   if(ev.button==4){
         buzzers.setLeds(false,false,false,false);
         buzzerlock=false;
     }
     
});
*/
console.log("ok");
server.listen(8080);