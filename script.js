var soma, areaMuro, comprimento, altura, largura;
var areiaBloco, areiaConcreto, areiaTotal;
var cimentoB, cimentoBloco, cimentoC, cimentoConcreto, cimentoTotal;
var agregado;
var tdrelicaPilar, trelicaCinta, tralicaTotal;

function calcular() {
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var largura = parseFloat(document.getElementById('largura').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(comprimento) || isNaN(largura) || isNaN(altura)) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }

    soma = (comprimento + largura) * 2;
    areaMuro = soma * altura;

    areiaBloco = (areaMuro * 40.5) / 27;
    areiaConcreto = (soma * 0.0168 * 1000) / 18;
    areiaTotal = areiaBloco + areiaConcreto;

    cimentoB = (areaMuro * 27) / 8;
    cimentoBloco = cimentoB / 50;
    cimentoC = (areiaConcreto * 27) / 4;
    cimentoConcreto = cimentoC / 50;
    cimentoTotal = cimentoBloco + cimentoConcreto;

    agregado = areiaConcreto;

    trelicaPilar = soma / 2.5;
    trelicaCinta = soma / 3;
    trelicaTotal = (trelicaPilar + trelicaCinta) / 3;

    document.getElementById('tijolos').value = (areaMuro * 32).toFixed(0) + ' unidades';
    document.getElementById('cimento').value = (cimentoTotal).toFixed(0) + ' sacos';
    document.getElementById('areia').value = (areiaTotal).toFixed(0) + ' latas';
    document.getElementById('agregado').value = (agregado).toFixed(0) + ' latas';
    document.getElementById('trelica').value = (trelicaTotal).toFixed(0) + ' peças';
}

function limpar() {
    document.getElementById('comprimento').value = '';
    document.getElementById('largura').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('tijolos').value = '';
    document.getElementById('cimento').value = '';
    document.getElementById('areia').value = '';
    document.getElementById('agregado').value = '';
    document.getElementById('trelica').value = '';
}