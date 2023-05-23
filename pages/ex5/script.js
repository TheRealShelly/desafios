let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    n = Number(prompt('digite uma medida em metros', 0))

    if (typeof n == 'number') {
        msg.innerHTML = `<h1> a distancia de ${n} metros corresponde a:</h1> <br>\
        ${n / 1000} quilometros <br>\
        ${n / 100} hectometros <br>\
        ${n / 10} decametros <br>\
        ${n * 10} decimetros <br>\
        ${n * 100} centimetros <br>\
        ${n * 1000} milimetros <br>`
    } else {
        window.alert('Não é um numero')
    }
    
})