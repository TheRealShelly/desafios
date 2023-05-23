let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Qual o nome do funcionario?')
    let sal = Number(prompt(`Qual o salario de ${nome}?`))
    let r = Number(prompt(`O salario de ${nome} será reajustado em quanto porcento?`))

    msg.innerHTML = `<h3>${nome} recebeu um aumento salarial! </h3> <br>\
    O salario atual era R$ ${sal} <br>\
    Com um aumento de ${r}%, o salario vai aumentar em R$ ${sal * (r / 100)} <br>\
    A partir do mês que vem, ${nome} receberá R$ ${sal * (1 + r / 100)}`
})