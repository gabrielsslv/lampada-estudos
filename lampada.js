const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');

const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.getAttribute('src') == './img/quebrada.jpg';
}

function lampOn(){
    if (!isLampBroken()){
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff(){
    if (!isLampBroken()){
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = './img/quebrada.jpg';
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

// lamp.addEventListener('mouseover', lampOn); Mouse passa por cima e liga a lampada
// lamp.addEventListener('mouseleave', lampOff); Mouse sai de cima e desliga a lampada

lamp.addEventListener('dblclick', lampBroken);
