// função com callback é uma função programada para receber uma outra interna a ela
function soma(valor){
    return valor + 2
}

function subtracao(valor){
    return valor - 2
}

function minhaFuncaoComCallback(umValor, Callback) {
    console.log(umValor);
    console.log(Callback(umValor));
}

function funcaoGenerica(umParametro) {
    console.log(umParametro);
    let resultado = soma(umParametro)
    console.log(resultado);
}

funcaoGenerica(10) //todas as vezes que for executada terá o mesmo processamento

minhaFuncaoComCallback(10, soma)
minhaFuncaoComCallback(10, subtracao)