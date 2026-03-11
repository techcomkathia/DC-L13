// dia -> bom dia
// tarde -> boa tarde
// noite -> boa noite

// turno == noite


// café coado : pó, água quente, filtro
// café de cafeteira: pó, agua quente, filtro e a cafeteira
// café capsula: cápsula e a máquina de café com água


let cor = 'preto'
// se a cor é preta ou a cor é branca ( só existem 2 cores no mundo)
// para situações onde só existem 2 possibilidades, nós vamos usar o if/else

if (cor == 'preto') {
    // se a condição for verdadeira ( retornar true), o código dentro do if será executado
    console.log("A cor é preta", cor);
} else {
    // se a condição for falsa ( retornar false), o código dentro do else será executado
    console.log("A cor é branca", cor);
}

// quando se tem mais de duas possibilidades, podemos usar o if/else if/else
let turno = 'tarde';
if(turno == 'dia'){ 
    console.log("Bom dia!");
}
else if(turno == 'tarde'){
    console.log("Boa tarde!");
}
else if(turno == 'noite'){
    console.log("Boa noite!");
}
else{ //true
    console.log("Tudo bom!?", turno);
}

//o else é a condição final, ou seja, se nenhuma das condições anteriores for verdadeira, o código dentro do else será executado. O else é opcional, ou seja, não é necessário ter um else para usar o if/else if.