//Codigo del cuadrado

console.group("CUADRADO");

const ladoCuadrado=5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado +" centimetros");

const perimetroCuadrado = ladoCuadrado*4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " centimetros");

const areaCuadrado =  ladoCuadrado*ladoCuadrado;

console.log("El area del cuadrado es: " + areaCuadrado +" centimetros cuadrados");

//Codigo del triangulo
console.groupEnd();

console.group("Triangulo");
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo=5.5;

console.log(
        "Los lados del triangulo miden: " 
        + ladoTriangulo1 +" , " 
        + ladoTriangulo2 + " y " 
        + baseTriangulo + "centimetros");

console.log("La altura del triangulo es: "+ alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo es: " + perimetroTriangulo + " centimetros");

const areaTriangulo =  (baseTriangulo*alturaTriangulo)/2;

console.log("El area del triangulo es: " + areaTriangulo +" centimetros cuadrados");

console.groupEnd();

//Circulo

console.group("Circulo");

const radioCirculo= 4
const diametroCirculo= radioCirculo*2;

console.log("El radio del circulo es: "+ radioCirculo);
console.log("El diametro del circulo es: " + diametroCirculo);

const perimetroCirculo = diametroCirculo * Math.PI;

console.log("El perimetro del circulo es "+ perimetroCirculo)

const areaCirculo = (radioCirculo*radioCirculo)* Math.PI;

console.log("El area del circulo es: "+ areaCirculo);
console.groupEnd();