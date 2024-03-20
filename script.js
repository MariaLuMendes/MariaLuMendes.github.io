function exibirResultado(resultado) {
    let mensagem = document.querySelector('.mensagem');
    let subMensagem = document.querySelector('.subMensagem');
    let resultadoTextArea = document.getElementById('resultadoCriptografado');
    let imagemProcura = document.querySelector('.procura');

    mensagem.style.display = 'none';
    subMensagem.style.display = 'none';
    imagemProcura.style.display = 'none';

    resultadoTextArea.style.display = 'block';
    resultadoTextArea.textContent = resultado;
}

function criptografar(texto) {
    if (/[^a-z\s]/.test(texto)) {
        alert('Apenas letras minúsculas e sem acento são permitidas.');
        return '';
    }

    var textoCriptografado = "";
    for (var i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                textoCriptografado += 'ai';
                break;
            case 'e':
                textoCriptografado += 'enter';
                break;
            case 'i':
                textoCriptografado += 'imes';
                break;
            case 'o':
                textoCriptografado += 'ober';
                break;
            case 'u':
                textoCriptografado += 'ufat';
                break;
            case ' ':
                textoCriptografado += ' '; 
                break;
            default:
                textoCriptografado += texto[i];
        }
    }
    return textoCriptografado;
}

function cripto() {
    let texto = document.getElementById('text').value;
    let resultadoCriptografado = criptografar(texto);
    if (resultadoCriptografado !== '') {
        exibirResultado(resultadoCriptografado);
    }
}

function descripto() {
    let texto = document.getElementById('text').value;
    if (/[^a-z\s]/.test(texto)) {
        alert('Apenas letras minúsculas e sem acento são permitidas.');
        return;
    }
    exibirResultado(texto);
}

function exibirResultado(resultado) {
    let mensagem = document.querySelector('.mensagem');
    let subMensagem = document.querySelector('.subMensagem');
    let resultadoTextArea = document.getElementById('resultadoCriptografado');
    let imagemProcura = document.querySelector('.procura');

    mensagem.style.display = 'none';
    subMensagem.style.display = 'none';
    imagemProcura.style.display = 'none';

    resultadoTextArea.style.display = 'block'; 
    resultadoTextArea.textContent = resultado;
}