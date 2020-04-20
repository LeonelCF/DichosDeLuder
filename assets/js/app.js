function p(t) {
    var d = document.getElementById('prosas');
    return d.innerHTML = t;
}


var cita = '<div class="cita"><i class="libro">"Dichos de Luder" </i><i class="autor"> Julio Ramón Ribeyro</i></div>';
var a = Math.random() * 98;
var b = Math.round(a);
var iid = t[b];
var id = t.indexOf(iid);
p('<i id="id">' + id + '</i>' + t[id] + cita);


function azar() {
    var a = Math.random() * 98;
    var b = Math.round(a);
    var iid = t[b];
    var id = t.indexOf(iid);
    p('<i id="id">' + id + '</i>' + t[id] + cita); //t = prosa
}

function next() {
    var idt = document.getElementById('id').innerText;
    if (idt == 95) {
        idt = -3;
    }
    var id = Number(idt) + 1;
    p('<i id="id">' + id + '</i>' + t[id] + cita); //t = prosa


}

function prev() {
    var idt = document.getElementById('id').innerText;
    if (idt == -2) {
        idt = 96;
    }
    var id = Number(idt) - 1;
    p('<i id="id">' + id + '</i>' + t[id] + cita); //t = prosa

}

var pop = document.getElementById('iniciando');
var ppp = document.getElementById('cont-ini');
setTimeout(function() { ppp.style = 'display: none;'; }, 2000);
setTimeout(function() { pop.style = 'display: none;'; }, 2500);