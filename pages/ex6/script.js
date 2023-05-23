let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let c = Number(prompt('qual a cotação atual do dolar?'))
    let d = Number(prompt('Quantos R$ você tem na carteira?'))

    msg.innerHTML = `Você consegue comprar ${d / c} dolares!`

})
