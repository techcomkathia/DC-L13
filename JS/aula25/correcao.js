const lousa = document.querySelector('#lousa')
const btnVermelho = document.querySelector('#vermelho')
const btnVerde = document.querySelector('#verde')
const btnAzul = document.querySelector('#azul')

btnVermelho.addEventListener("click",() => {
    lousa.style.backgroundcolor = 'red';
});

btnVerde.addEventListener("click",() => {
    lousa.style.backgroundcolor = 'green';
});

btnAzul.addEventListener("click",() => {
    lousa.style.backgroundcolor = 'blue';
});

lousa.addEventListener("mouseover", () => {
    lousa.style.backgroundcolor = 'white';
});

document.querySelector('body').addEventListener('mouseover', () => {
    lousa.style.backgroundcolor = 'red';
})

