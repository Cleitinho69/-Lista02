function multiplos9(){
    for(let i=100; i<=10000; i++){
        let total=i%9;

        if(total==0){
            document.getElementById("mult9").innerHTML+=`  ${i} <br/>`;
            console.log(i);
        }
    }
}

function multiplos5(){
    for(let i=100; i<=10000; i++){
        let total=i%5;

        if(total==0){
            document.getElementById("mult5").innerHTML+=`  ${i} <br/>`;
            console.log(i);
        }
    }
}

function multiplos10(){
    for(let i=1; i<=100; i++){
        let total=i%10;

        if(total==0){
            document.getElementById("mult10").innerHTML+=`  ${i} <br/>`;
            console.log(i);
        }
    }
}