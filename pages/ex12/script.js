let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let nome = prompt('Qual o nome do aluno')
    let n1 = Number(prompt(`Qual a primeira nota de ${nome}`))
    let n2 = Number(prompt(`Qual a segunda nota de ${nome}`))
    let media = (n1 + n2) / 2

    msg.innerHTML = `<h1>Analisando a situação de ${nome}</h1> <br>\
    Com notas ${n1} e ${n2}, a media é de ${media} <br>`

    if (media < 3) {
        msg.innerHTML += "com media abaixo de 3.0, o aluno está REPROVADO"
    } else if (media >= 3 && media < 6) {
        msg.innerHTML += "com media entre 3.0 e 6.0, o aluno está de RECUPERAÇÃO"
    } else if (media >= 6) {
        msg.innerHTML += "com media acima de 6.0, o aluno está APROVADO"
    }

})