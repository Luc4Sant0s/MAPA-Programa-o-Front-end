document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    var homens = parseInt(document.getElementById('homens').value, 10);
    var mulheres = parseInt(document.getElementById('mulheres').value, 10);
    var criancas = parseInt(document.getElementById('criancas').value, 10);

    var carneBovina = (homens * 500 + mulheres * 300 + criancas * 200) / 1000;
    var frango = (homens * 200 + mulheres * 200 + criancas * 100) / 1000;
    var linguica = (homens * 200 + mulheres * 200 + criancas * 200) / 1000;
    var refrigerante = (homens * 300 + mulheres * 400 + criancas * 200) / 1000;
    var cerveja = (homens * 800 + mulheres * 500) / 1000;

    var resultado = document.getElementById('result');
    resultado.innerHTML = '';

    var resultadoCarne = document.createElement('li');
    resultadoCarne.textContent = carneBovina.toFixed(1) + 'kg de carne bovina';
    resultado.appendChild(resultadoCarne);

    var resultadoFrango = document.createElement('li');
    resultadoFrango.textContent = frango.toFixed(1) + 'kg de frango';
    resultado.appendChild(resultadoFrango);

    var resultadoLinguica = document.createElement('li');
    resultadoLinguica.textContent = linguica.toFixed(1) + 'kg de linguiça';
    resultado.appendChild(resultadoLinguica);

    var resultadoRefrigerante = document.createElement('li');
    resultadoRefrigerante.textContent = refrigerante.toFixed(1) + ' litros de refrigerante';
    resultado.appendChild(resultadoRefrigerante);

    var resultadoCerveja = document.createElement('li');
    resultadoCerveja.textContent = cerveja.toFixed(1) + ' litros de cerveja';
    resultado.appendChild(resultadoCerveja);
});