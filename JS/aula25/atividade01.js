const lousa = document.querySelector("#lousa");
const btn_vermelho = document.querySelector("#vermelho");
const btn_verde = document.querySelector("#verde");
const btn_azul = document.querySelector("#azul");


btn_vermelho.addEventListener("click", () => {
    lousa.style.backgroundColor = "red";
});

btn_verde.addEventListener("click", () => {
    lousa.style.backgroundColor = "green";

});
btn_azul.addEventListener("click", () => {
    lousa.style.backgroundColor = "blue";
});

lousa.addEventListener("mouseover", () => {
    lousa.style.backgroundColor = "white";
});