document.querySelector('#usuario').focus();

function limpiarTexto(){
    document.getElementById('usuario').value = '';
}

function quitarMuneco(){
    var elementosSinDatos = document.querySelector('#sinresultado');
    var elementoConDatos = document.querySelector('#textoNuevo');
    var botones = document.querySelector('#botones-resultado');
    botones.style.display = 'block';
    elementosSinDatos.style.display = 'none';
    elementoConDatos.style.display = 'block';
}

function encriptardor(texto){ //Cambia las vocales por otro elemento que las representa.
    let reemplazar = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    let convertido = texto.replace(/[aeiou]/ig, vocal => reemplazar[vocal.toLowerCase()]);
    return convertido;
}
function encrypt(){ //Acción al hacer clic en el botón encriptar
    let textoOriginal = document.getElementById('usuario').value;
    let textoConvertido = encriptardor(textoOriginal);
    encriptardor.textContent = textoConvertido;
    nuevoTexto('textoNuevo',textoConvertido);
    limpiarTexto();
    quitarMuneco();
    return;
}

function desencriptador(texto){ //Cambia el encriptado elemento por las vocales a las que representan.
    let reemplazar = {
        'ai':'a',
        'enter':'e',
        'imes':'i',
        'ober':'o',
        'ufat':'u'
    }
    let convertido = texto.replace(/ai|enter|imes|ober|ufat/ig, match => reemplazar[match.toLowerCase()]);
    return convertido;
}
function decrypt(){ //Acción al hacer clic en el botón desencriptar
    let textoOriginal = document.getElementById('usuario').value;
    let textoConvertido = desencriptador(textoOriginal);
    desencriptador.textContent = textoConvertido;
    nuevoTexto('textoNuevo',textoConvertido);
    limpiarTexto();
    quitarMuneco();
    return;
}

function nuevoTexto(elemento, texto){ //Muestra el texto encriptado/desencriptado
    let elementoHtml = document.getElementById(elemento);
    elementoHtml.innerHTML = texto;
}

function reset(){
    location.reload();
}

function copiar(){ //Boton de copiar texto.
    let texto = document.querySelector('#textoNuevo').value;
    navigator.clipboard.writeText(texto).then();
}

function pegar(){ //Botón de pegar texto.
    navigator.clipboard.readText().then(
        texto => {
            document.querySelector('#usuario').value = texto;
        }
    )   
}

function verInstrucciones(){
    let instrucciones = document.querySelector('#informacion-instrucciones')
    instrucciones.style.display = 'inline';
}

function ocultarInstrucciones(){
    let instrucciones = document.querySelector('#informacion-instrucciones')
    instrucciones.style.display = 'none'; 
}