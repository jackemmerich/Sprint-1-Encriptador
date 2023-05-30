
function leerInput(){
    var val = document.querySelector('input').value;
    console.log(val);
    if(val == ""){
        document.getElementById("responder2").style.display = "none";
    }
    else{
        document.getElementById("responder2").style.display = "inline";
    }
}

function encriptar(){
    const val = document.querySelector('input').value;
    const a = val.replaceAll('e','enter');
    const e = a.replaceAll('i','imes');
    const i = e.replaceAll('a','ai');
    const o = i.replaceAll('o','ober');
    const u = o.replaceAll('u','ufat');
    document.getElementById('resultadoEncriptado').innerHTML = u
    console.log(encriptar)
}

function printEncriptar(){
        leerInput();
        encriptar();
}

function desencriptar(){
    const val = document.querySelector('input').value;
    const a = val.replaceAll('ai','a');
    const e = a.replaceAll('enter','e');
    const i = e.replaceAll('imes','i');
    const o = i.replaceAll('ober','o');
    const u = o.replaceAll('ufat','u');
    document.getElementById('resultadoEncriptado').innerHTML = u
    console.log(desencriptar)
}

function printDesencriptar(){
    leerInput();
    desencriptar();
}