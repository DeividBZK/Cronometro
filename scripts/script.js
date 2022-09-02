var segundos=0
var minutos=0
var horas=0

function doisDigitos(digito){
    if(digito<10){
        return('0'+ digito)
    }else{
        return(digito)
    }
}
var intervalo
function Iniciar(){
    contador()

intervalo = setInterval(contador,1000)
}

function Pausar(){
clearInterval(intervalo)
}



function Zerar(){
    clearInterval(intervalo)
    segundos=0
    minutos =0
    horas=0
    document.getElementById('numero').innerText= "00:00:00";
}
function contador(){
segundos++
if(segundos==60){
    minutos++
    segundos=0   
    if(minutos==60){
        horas ++
        minutos=0
        }
        
}

document.getElementById('numero').innerText= doisDigitos(horas) +':'+doisDigitos(minutos)+':' +doisDigitos(segundos);
}