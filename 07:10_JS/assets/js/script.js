var btn = document.getElementById('inserisci');
var anagrafe = [];

function Compila(_nome, _cognome, _eta) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.eta = _eta;
    
}

window.addEventListener('DOMContentLoaded', init);

var init = () => {
    if (anagrafe.length > 0) {
        stampaAnagrafe();
    }
}

btn.addEventListener('click', () => {
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    let newEta = document.getElementById('eta').value;
    
let newCompila = new Compila (newNome, newCognome, newEta);
    
    anagrafe.push(newCompila);
    stampaAnagrafe();
});

function stampaAnagrafe() {
    let lista = document.getElementById('lista');
    let stringa = '';
    lista.innerHTML = '';
    anagrafe.forEach((elemento) => {
        stringa += `<tr><td class="w-auto text-white">${elemento.nome}</td><td class="w-auto text-white">${elemento.cognome}</td><td class="w-auto text-white">${elemento.eta}</td></tr>`;
    });
    lista.innerHTML = stringa;
}