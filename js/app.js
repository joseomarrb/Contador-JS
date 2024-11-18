let contador = document.querySelector(".titulo span");
let incremento = document.querySelector("#incremento");
let decremento = document.querySelector("#decremento");
let resetar = document.querySelector("#resetear");

console.log()

incremento.addEventListener("click", function() {
    contador.textContent =  `${parseInt(contador.textContent) + 1}`

})

decremento.addEventListener("click", function() {
    contador.textContent =  `${parseInt(contador.textContent) - 1}`
})

resetar.addEventListener('click', () => {
    contador.textContent =  `0`
});