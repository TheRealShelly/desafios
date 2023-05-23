let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let d = Number(prompt('Quantos R$ você tem na carteira?'))

    msg.innerHTML = `Você consegue comprar ${d / 5} dolares! <br> 1 dolar = 5 reais`

})