let bt = document.getElementById('bt')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let n = Number(prompt('digite um numero', 0))

    if (typeof n == 'number') {
        window.alert(`O sucessor de ${n} é ${n + 1} \nO antecessor de ${n} é ${n - 1}`)
    } else {
        window.alert('Não é um numero')
    }
    
})