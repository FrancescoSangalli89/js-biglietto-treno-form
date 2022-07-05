
const generaDom = document.getElementById('genera');

generaDom.addEventListener('click', 
    function() {
        let nomePasseggeroDom = document.getElementById('nome').value;

        document.querySelector('.nomePasseggero').innerHTML = nomePasseggeroDom;

        const kmDaPercorrere = parseInt(document.getElementById('km').value);
        console.log(typeof kmDaPercorrere);

        const costoXKm = 0.21;

        let costoTotaleXKm = kmDaPercorrere * costoXKm;
        console.log(costoTotaleXKm)

        let fasciaPrezzo = parseInt(document.getElementById('eta').value);

        if (fasciaPrezzo == 1) {
            document.querySelector('.offer').innerHTML = 'Biglietto standard';
            document.querySelector('.ticketPrice').innerHTML = Math.round((costoTotaleXKm) * 100) / 100 + '€';
        } else if (fasciaPrezzo == 2) {
            document.querySelector('.offer').innerHTML = 'Sconto 20%';
            document.querySelector('.ticketPrice').innerHTML = Math.round((costoTotaleXKm - costoTotaleXKm * 20 / 100) * 100) / 100 + '€';
        } else if (fasciaPrezzo == 3) {
            document.querySelector('.offer').innerHTML = 'Sconto 40%';
            document.querySelector('.ticketPrice').innerHTML = Math.round((costoTotaleXKm - costoTotaleXKm * 40 / 100) * 100) / 100 + '€';
        }

        document.querySelector('.carrozza').innerHTML = Math.floor(Math.random() * 21) + 1;

        document.querySelector('.codeCp').innerHTML = Math.floor(Math.random() * 10000) + 90000;
        
        document.querySelector('.ticket-container').classList.add('show');
    }
)

const annullaDom = document.getElementById('annulla')

annullaDom.addEventListener('click', 
    function(){
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('eta').value = '';

        document.querySelector('.ticket-container').classList.remove('show');
    }
)