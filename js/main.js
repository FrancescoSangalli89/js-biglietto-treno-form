
const generaDom = document.getElementById('genera');

generaDom.addEventListener('click', 
    function() {
        const kmDaPercorrere = parseInt(document.getElementById('km').value);
        console.log(typeof kmDaPercorrere);

        const costoXKm = 0.21;

        let costoTotaleXKm = kmDaPercorrere * costoXKm;
        console.log(costoTotaleXKm)

        let fasciaPrezzo = parseInt(document.getElementById('eta').value);

        let nomePasseggeroDom = document.getElementById('nome').value;

        document.querySelector('.nomePasseggero').innerHTML = '<h3>' + nomePasseggeroDom + '</h3>';

        if (fasciaPrezzo == 1) {
            document.querySelector('.offer').innerHTML = '<div>Biglietto standard</div>';
            document.querySelector('.ticketPrice').innerHTML = '<div>' + Math.round((costoTotaleXKm) * 100) / 100 + '€</div>';
        } else if (fasciaPrezzo == 2) {
            document.querySelector('.offer').innerHTML = '<div>Sconto 20%</div>';
            document.querySelector('.ticketPrice').innerHTML = '<div>' + Math.round((costoTotaleXKm - costoTotaleXKm * 20 / 100) * 100) / 100 + '€</div>';
        } else if (fasciaPrezzo == 3) {
            document.querySelector('.offer').innerHTML = '<div>Sconto 40%</div>';
            document.querySelector('.ticketPrice').innerHTML = '<div>' + Math.round((costoTotaleXKm - costoTotaleXKm * 40 / 100) * 100) / 100 + '€</div>';
        }

        document.querySelector('.carrozza').innerHTML = '<div>' + (Math.floor(Math.random() * 21) + 1) + '</div>';

        document.querySelector('.codeCp').innerHTML = '<div>' + (Math.floor(Math.random() * 10000) + 90000) + '</div>';
        

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