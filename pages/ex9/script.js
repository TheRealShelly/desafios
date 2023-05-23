let bt1 = document.getElementById('bt1')
let bt2 = document.getElementById('bt2')
let bt3 = document.getElementById('bt3')

bt1.addEventListener('click', (event) => {
    event.preventDefault()
    window.alert('você apertou o 1º botão!')

})

bt2.addEventListener('click', (event) => {
    event.preventDefault()
    window.alert('você apertou o 2º botão!')

})

bt3.addEventListener('click', (event) => {
    event.preventDefault()
    window.alert('você apertou o 3º botão!')

})