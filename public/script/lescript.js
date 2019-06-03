var socket = io.connect("127.0.0.1:8080");
var sec = 0;
var sbanque = 0;
var gtoto = 0;
// On demande le pseudo, on l'envoie au serveur et on l'affiche dans le titre

/*INIT*/
document.getElementById('banque').innerHTML = "Banque : " + sbanque;
document.getElementById('total').innerHTML = "Gain total : " + gtoto;
banquing();


socket.on('action', function (data) {
    if (data == "moins") {
        if (sec > 0) {
            document.getElementById('value' + sec).style.backgroundColor = "white";
            sec--;
            document.getElementById('value' + sec).style.backgroundColor = "red";

        }
    }
    if (data == "plus") {
        if (sec == 8) {
            sec++;
            var add = parseInt(document.getElementById('value' + sec).innerHTML);
            
            sbanque += add;
            banquing();
        }
        else if (sec < 9) {
            document.getElementById('value' + sec).style.backgroundColor = "white";
            sec++;
            document.getElementById('value' + sec).style.backgroundColor = "red";

        }
    }
    if (data == "banque") {
        var add = parseInt(document.getElementById('value' + sec).innerHTML);
        sbanque += add;
        banquing();
    }
    if (data == "suivant") {
        gtoto += sbanque;
        sbanque = 0;
        banquing();
        document.getElementById('total').innerHTML = "Gain total : " + gtoto;
    }
    if (data == "echec") {
        document.getElementById('value' + sec).style.backgroundColor = "white";
        sec = 0;
        document.getElementById('value' + sec).style.backgroundColor = "red";

    }
    if (data == "start") {
        document.getElementById('etat').innerHTML="ON";
        a = new timer(fin, 3000);
        bob = setInterval(function(){
            console.log(a.getTimeLeft());
        }, 1);
    }
})
var bob;
var a;
function banquing() {
    document.getElementById('banque').innerHTML = "Banque : " + sbanque;
    for (i = 0; i < 10; i++) {
        document.getElementById('value' + i).style.backgroundColor = "white";
    }
    sec = 0;
    document.getElementById('value0').style.backgroundColor = "red";
}

function fin() {
    clearInterval(bob);
    document.getElementById('etat').innerHTML="OFF";
    var add = parseInt(document.getElementById('value' + sec).innerHTML);
    sbanque += add;
    alert("Fin du game\r\nGain : " + sbanque);
    gtoto += sbanque;
    sbanque = 0;
    banquing();
    document.getElementById('total').innerHTML = "Gain total : " + gtoto;
}

/*TIMER CUSTOM*/
function timer(callback, delay) {
    var id, started, remaining = delay, running

    this.start = function() {
        running = true
        started = new Date()
        id = setTimeout(callback, remaining)
    }

    this.pause = function() {
        running = false
        clearTimeout(id)
        remaining -= new Date() - started
    }

    this.getTimeLeft = function() {
        if (running) {
            this.pause()
            this.start()
        }

        return remaining
    }

    this.getStateRunning = function() {
        return running
    }

    this.start()
}
