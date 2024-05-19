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

document.addEventListener("DOMContentLoaded", function(){
    const {jsPDF} = window.jspdf;

    window.exportarPDF = function(){
        const tijolos = document.getElementById('tijolos').value || 0;
        const cimento = document.getElementById('cimento').value || 0;
        const areia = document.getElementById('areia').value || 0;
        const agregado = document.getElementById('agregado').value || 0;
        const trelica = document.getElementById('trelica').value || 0;

        const hoje = new Date();
        const dia = String(hoje.getDate()).padStart(2, '0');
        const mes = String(hoje.getMonth()+ 1).padStart(2, '0');
        const ano = hoje.getFullYear();

        const formatoData = `${dia}${mes}${ano}`;

        const nomeArquivo = `Orçamento ${formatoData}.pdf`;

        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text('Orçamento', 10, 10);

        doc.setFontSize(12);
        doc.text(`Tijolos: ${tijolos}`, 10, 30);
        doc.text(`Cimento: ${cimento}`, 10, 40);
        doc.text(`Areia: ${areia}`, 10, 50);
        doc.text(`Agregado: ${agregado}`, 10, 60);
        doc.text(`Treliça: ${trelica}`, 10, 70);

        doc.save(nomeArquivo);
    };
});
