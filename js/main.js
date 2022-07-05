
let kmDaPercorrereDom = parseInt(document.getElementById('kmDaPercorrere'));
console.log(typeof kmDaPercorrereDom);
console.log(kmDaPercorrereDom);

const costoXKm = 0.21;
console.log(typeof costoXKm);
console.log(costoXKm);

let costoTotaleXKm = kmDaPercorrereDom * costoXKm;
console.log(typeof costoTotaleXKm);
console.log(costoTotaleXKm);

const generaDom = document.getElementById('genera');

generaDom.addEventListener('click', 
    function() {
        console.log(costoTotaleXKm)
    }
)