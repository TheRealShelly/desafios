let bt = document.getElementById('bt')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Olá, Qual seu nome?', 'jubiscleiton')
    let idade = prompt(`Olá ${nome}, Qual sua idade?`, '24')
    window.alert(`Acabo de conhecer ${nome} de ${idade} anos`)
})