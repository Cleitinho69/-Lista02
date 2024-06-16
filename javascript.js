function multiplos9() {
    for (let i = 100; i <= 10000; i++) {
        let total = i % 9;

        if (total === 0) {
            document.getElementById("mult9").innerHTML += `  ${i} <br/>`;
            console.log(i);
        }
    }
}

function multiplos5() {
    for (let i = 100; i <= 10000; i++) {
        let total = i % 5;

        if (total === 0) {
            document.getElementById("mult5").innerHTML += `  ${i} <br/>`;
            console.log(i);
        }
    }
}

function multiplos10() {
    for (let i = 1; i <= 100; i++) {
        let total = i % 10;

        if (total === 0) {
            document.getElementById("mult10").innerHTML += `  ${i} <br/>`;
            console.log(i);
        }
    }
}

function numeros() {
    let impar = 0, par = 0;
    for (let i = 1; i <= 10; i++) {
        let numero = Math.floor(Math.random() * (1000 - 1) + 1);
        console.log(numero);

        let total = numero % 2;

        document.getElementById("numeros").innerHTML += numero;
        if(i<10){
            document.querySelector("#numeros").innerHTML += ', ';
        }else{
            document.querySelector("#numeros").innerHTML += '.';
        }

        if (total === 1) {
            impar = impar + 1;
        } else {
            par = par + 1;
        }
    }

    document.getElementById("impar").innerHTML += impar;
    document.getElementById("par").innerHTML += par;
}

let par = 0;
let impar = 0;

function numerosDigitado() {
    let numero = document.getElementById('numeroDigitado').value;
    
    if (numero==='0'){
        document.querySelector('#numeroDigitado').disabled = true;
        window.alert('Você precisa apertar F5 para usar novamente');
    }else{
        if (numero % 2 === 0) {
            par = par + 1;
        } else {
            impar = impar + 1;
        }
    }

    document.getElementById("impares").innerHTML = 'Quantidade de numeros imapares: ' + impar;
    document.getElementById("pares").innerHTML = 'Quantidade de numeros pares: '+par;
}