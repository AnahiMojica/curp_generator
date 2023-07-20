let personas = [];
let nombre = '', apellido1 = '', apellido2 = '';
let fechaNac;
let estado, genero;
let curp = '';


function calcular() {
    obtenerDatos();
    curp = obtenerPrimeraLetraApellido1() + obtenerPrimeraVocalApellido1() + primeraLetraApellido2() +
            primeraLetraNombrePila() + obtenerFecha() + obtenerSexo() + obtenerEstado() + obtenerConsonanteApellido1() +
            obtenerConstanteApellido2() + obtenerConstantePrimerNombre() + asignarCaracterFecha() + asignarDigitoRandom();


    curp = curp.toUpperCase();

    curp = validarPalabraSoez(curp);

    curp = curp.replace(/Ñ/g, 'X');

    curp = filtrarAcentos(curp);

    document.getElementById('txtCurp').innerHTML = curp;

}

function obtenerGenero() {
    let genero1 = document.getElementById('txtHombre');
    let genero2 = document.getElementById('txtMujer');

    if (genero1.checked) {
        return 'Hombre';
    } else if (genero2.checked) {
        return 'Mujer';
    } else {
        return 'X';
    }
}

function obtenerDatos() {
    nombre = document.getElementById('txtNombre').value;
    apellido1 = document.getElementById('txtApellido1').value;
    apellido2 = document.getElementById('txtApellido2').value;
    fechaNac = document.getElementById('txtFecha').value;
    estado = document.getElementById('txtEstado').value;
    genero = obtenerGenero();

    let persona = {name: nombre, lname1: apellido1, lname2: apellido2, date: fechaNac, state: estado, gender: genero};

    personas.push(persona);
}

function obtenerPrimeraLetraApellido1() {
    let apellido1Array = apellido1.split('');
    for (let i = 0; i < apellido1Array.length; i++) {
        let inicial = apellido1Array[i];
        let palabra = inicial.substring(0, 1);
        return palabra.toLocaleLowerCase();
    }
}

function obtenerPrimeraVocalApellido1() {
    let apellido1Array = apellido1.split('');
    for (let i = 0; i < apellido1Array.length; i++) {
        let inicial = apellido1Array[i];
        inicial.toLocaleLowerCase();
        if (inicial === 'a' || inicial === 'e' || inicial === 'i' || inicial === 'o' || inicial === 'u') {
            return inicial;
        }
    }
}

function primeraLetraApellido2() {
    if (apellido2.length === 0) {
        return 'x';
    } else {
        let apellido2Array = apellido2.split('');
        for (let i = 0; i < apellido2Array.length; i++) {
            let inicial = apellido2Array[i];
            let palabra = inicial.substring(0, 1);
            return palabra.toLocaleLowerCase();
        }
    }
}

function primeraLetraNombrePila() {
    let nombreArray = nombre.split(' ');
    let primerNombre = nombreArray[0];
    primerNombre = primerNombre.toLowerCase();

    if (primerNombre === 'maría' || primerNombre === 'josé' ||
            primerNombre === 'jose' || primerNombre === 'maria') {
        if (nombreArray.length > 1) {
            let segundoNombre = nombreArray[1].toLowerCase();
            return segundoNombre.substring(0, 1);
        } else {
            return 'x';
        }
    } else {
        return primerNombre.substring(0, 1);
    }
}

function obtenerFecha() {
    let arrayFecha = fechaNac;
    arrayFecha = arrayFecha.split('-');

    let anio = arrayFecha[0];
    let mes = arrayFecha[1];
    let dia = arrayFecha[2];

    anio = anio.toString();
    mes = mes.toString();
    dia = dia.toString();

    anio = anio.slice(2);
    let fechaCompleta = anio + mes + dia;

    return fechaCompleta;
}

function obtenerSexo() {
    if (genero === 'Hombre') {
        return 'h';
    } else
    if (genero === 'Mujer') {
        return 'm';
    } else {
        return 'x';
    }
}

function obtenerEstado() {
    switch (estado) {
        case 'AS':
        {
            return 'as';
            break;
        }
        case 'BC':
        {
            return 'bc';
            break;
        }
        case 'BS':
        {
            return 'bs';
            break;
        }
        case 'CC':
        {
            return 'cc';
            break;
        }
        case 'CL':
        {
            return 'cl';
            break;
        }
        case 'CM':
        {
            return 'cm';
            break;
        }
        case 'CS':
        {
            return 'cs';
            break;
        }
        case 'CH':
        {
            return 'ch';
            break;
        }
        case 'DF':
        {
            return 'df';
            break;
        }
        case 'DG':
        {
            return 'dg';
            break;
        }
        case 'GT':
        {
            return 'gt';
            break;
        }
        case 'GR':
        {
            return 'gr';
            break;
        }
        case 'HG':
        {
            return 'hg';
            break;
        }
        case 'JC':
        {
            return 'jc';
            break;
        }
        case 'EM':
        {
            return 'em';
            break;
        }
        case 'MN':
        {
            return 'mn';
            break;
        }
        case 'MS':
        {
            return 'ms';
            break;
        }
        case 'NT':
        {
            return 'nt';
            break;
        }
        case 'NL':
        {
            return 'nl';
            break;
        }
        case 'OC':
        {
            return 'oc';
            break;
        }
        case 'PL':
        {
            return 'pl';
            break;
        }
        case 'QT':
        {
            return 'qt';
            break;
        }
        case 'QR':
        {
            return 'qr';
            break;
        }
        case 'SP':
        {
            return 'sp';
            break;
        }
        case 'SL':
        {
            return 'sl';
            break;
        }
        case 'SR':
        {
            return 'sr';
            break;
        }
        case 'TC':
        {
            return 'tc';
            break;
        }
        case 'TS':
        {
            return 'ts';
            break;
        }
        case 'TL':
        {
            return 'tl';
            break;
        }
        case 'VZ':
        {
            return 'vz';
            break;
        }
        case 'YN':
        {
            return 'yn';
            break;
        }
        case 'ZS':
        {
            return 'zs';
            break;
        }
        case 'NE':
        {
            return 'ne';
            break;
        }
    }
}

function obtenerConsonanteApellido1() {
    let apellido1Array = apellido1.split('');
    apellido1Array = apellido1Array.slice(1);

    for (let i = 0; i < apellido1Array.length; i++) {
        let inicial = apellido1Array[i];
        if (inicial === 'a' || inicial === 'e' || inicial === 'i' || inicial === 'o' || inicial === 'u') {
        } else {
            return inicial;
        }
    }

    return 'X';
}

function obtenerConstanteApellido2() {
    let apellido2Array = apellido2.split('');
    apellido2Array = apellido2Array.slice(1);

    for (let i = 0; i < apellido2Array.length; i++) {
        let inicial = apellido2Array[i];
        if (inicial === 'a' || inicial === 'e' || inicial === 'i' || inicial === 'o' || inicial === 'u') {
        } else {
            return inicial;
        }
    }

    return 'X';
}


function obtenerConstantePrimerNombre() {
    let nombreArray = nombre.split('');
    nombreArray = nombre.slice(1);
    for (let i = 0; i < nombreArray.length; i++) {
        let inicial = nombreArray[i];
        if (inicial === 'a' || inicial === 'e' || inicial === 'i' || inicial === 'o' || inicial === 'u') {
        } else {
            return inicial;
        }
    }
    return 'X';
}

function asignarCaracterFecha() {
    let arrayFecha = fechaNac;
    arrayFecha = arrayFecha.split('-');

    let anio = arrayFecha[0];

    if (anio <= 1999) {
        let numeroRandom = (Math.random() * 10) | 0;
        numeroRandom.toString();
        return numeroRandom;
    } else {
        let letraAleatoria = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        letraAleatoria.toLocaleLowerCase();
        return letraAleatoria;
    }
}

function asignarDigitoRandom() {
    let numeroRandom = (Math.random() * 10) | 0;
    numeroRandom.toString();
    return numeroRandom;
}

function reemplazarLetraÑ(curp) {
    return curp.replace(/Ñ/g, 'X');  // Reemplazar "Ñ" por "X"
}

function validarPalabraSoez(curp) {
    let primerasCuatroLetras = curp.substring(0, 4).toLowerCase();
    let palabrasSoeces = ["culo", "puta", "pene", "puto", "cola", "caca", "naco", "naca"];

    if (palabrasSoeces.includes(primerasCuatroLetras)) {
        let primeraVocalIndex = curp.search(/[aeiou]/i);
        if (primeraVocalIndex !== -1) {
            curp = curp.substring(0, primeraVocalIndex) + "X" + curp.substring(primeraVocalIndex + 1);
        }
    }

    return curp;
}

function filtrarAcentos(curp) {
    const acentos = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'Á': 'A',
        'É': 'E',
        'Í': 'I',
        'Ó': 'O',
        'Ú': 'U'
    };

    let curpFiltrado = '';

    for (let i = 0; i < curp.length; i++) {
        const caracter = curp[i];
        const caracterFiltrado = acentos[caracter] || caracter;
        curpFiltrado += caracterFiltrado;
    }

    return curpFiltrado;
}