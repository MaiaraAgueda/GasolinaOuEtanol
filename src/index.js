const gasolina = document.getElementById('gasolina');
const etanol = document.getElementById('etanol');
const mensagem = document.getElementById('mensagem');

gasolina.addEventListener('input', calcularPrecoMaxEtanol);
etanol.addEventListener('input', calcularPrecoMaxGasolina);

function calcularPrecoMaxEtanol() {
    if (!gasolina.value || !etanol.value) {
        document.getElementById('mensagem').innerHTML = ' '
        return;
    }

    const precoGasolina = parseFloat(gasolina.value);
    const precoEtanol = precoGasolina * 0.7;

    if (precoEtanol <= parseFloat(etanol.value)) {
        document.getElementById('mensagem').innerHTML = 'É mais vantajoso usar etanol.'
    } else {
        document.getElementById('mensagem').innerHTML = ' '
    }
}

function calcularPrecoMaxGasolina() {
    if (!etanol.value || !gasolina.value) {
        document.getElementById('mensagem').innerHTML = ' ';
        return;
    }

    const precoEtanol = parseFloat(etanol.value);
    let precoGasolinaMax = precoEtanol * 1.3;

    if (precoGasolinaMax > parseFloat(gasolina.value)) {
        precoGasolinaMax = parseFloat(gasolina.value);
    }

    if (precoGasolinaMax <= parseFloat(gasolina.value)) {
        document.getElementById('mensagem').innerHTML = 'É melhor escolher gasolina.';
    } else {
        document.getElementById('mensagem').innerHTML = ' ';
    }
}


function calcularCombustivelMaisVantajoso() {
    if (!etanol.value || !gasolina.value) {
        document.getElementById('mensagem').innerHTML = ' '
        return;
    }

    const precoGasolina = parseFloat(gasolina.value);
    const precoEtanol = parseFloat(etanol.value);

    if (precoEtanol <= precoGasolina * 0.7) {
        document.getElementById('mensagem').innerHTML = 'É melhor escolher etanol.';
    } else {
        document.getElementById('mensagem').innerHTML = 'É melhor escolher gasolina.';
    }
}

gasolina.addEventListener('input', calcularCombustivelMaisVantajoso);
etanol.addEventListener('input', calcularCombustivelMaisVantajoso);



