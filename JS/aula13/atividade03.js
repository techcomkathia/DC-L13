// Leia três notas, calcule sua média e a exiba para o usuário
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

alert(`A média das notas é: ${media}`);

//Leia o lado de um quadrado e calcule sua área. (Lembrando que a área é lado ao quadrado)
let lado = Number(prompt("Digite o lado do quadrado:"));
let area = lado ** 2
alert(`A área do quadrado é: ${area}`);

// 100 elevado a  100 = 100 * 100 * 100 ... 100 vezes
// 100 elevado a 100 = 100 ** 100

//Leia base e altura de um triângulo e calcule sua área(Área do triângulo: b * h / 2)
let base = Number(prompt("Digite a base do triângulo:"));
let altura = Number(prompt("Digite a altura do triângulo:"));
let areaTriangulo = (base * altura) / 2;
alert(`A área do triângulo é: ${areaTriangulo} calculada usando template string`)
alert("a área do triângulo é: " + areaTriangulo + " calculada usando concatenação")