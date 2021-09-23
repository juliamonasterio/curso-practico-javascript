//Codigo del cuadrado


function perimetroCuadrado  (lado){ 
    return lado*4;
};

function areaCuadrado(lado){ 
    return lado*lado};

//Codigo del triangulo

function perimetroTriangulo (lado1, lado2, base) {
    perimetro= (Number(lado1)+Number(lado2)+Number(base));
    return perimetro;
};


function areaTriangulo (base,altura) { 
    return (base*altura)/2};

  
function alturaTrianguloIsosceles(lado1,lado2,base){
    if(lado1===lado2 ){

     return Math.sqrt((lado1*lado1)-((lado2*lado2)/4))
    }
    else{
        console.error("No es un triangulo isosceles");
    }

}


console.log(alturaTrianguloIsosceles(2,2,4));

//Circulo

function diametroCirculo(radio){ 
    return radio*2;
};

function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};


function areaCirculo(radio){ 
    return (radio*radio)* Math.PI
};


//Interaccion HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    alert(perimetroCuadrado(value));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    alert(areaCuadrado(value));
}

function calcularPerimetroTriangulo(){

    const inputLado1 = document.getElementById("inputLado1");
    const valueLado1 = inputLado1.value;
  
    const inputLado2 = document.getElementById("inputLado2");
    const valueLado2 = inputLado2.value;
    
    const inputBase = document.getElementById("inputBase");
    const valueBase = inputBase.value;
    
    const inputAltura = document.getElementById("inputAltura");
    const valueAltura = inputAltura.value;

    alert(perimetroTriangulo(valueLado1,valueLado2,valueBase));
 
}

function calcularAreaTriangulo(){

    const inputBase = document.getElementById("inputBase");
    const valueBase = inputBase.value;
    
    const inputAltura = document.getElementById("inputAltura");
    const valueAltura = inputAltura.value;

    alert(areaTriangulo(valueBase, valueAltura));
}

function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("inputRadio");
    const valueRadio= inputRadio.value;

    alert(perimetroCirculo(valueRadio));
}

function calcularAreaCirculo(){

    const inputRadio = document.getElementById("inputRadio");
    const valueRadio= inputRadio.value;

    alert(areaCirculo(valueRadio));

}