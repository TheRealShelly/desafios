let bt = document.getElementById('bt')
let msg = document.getElementById('msg')
let final

bt.addEventListener('click', (event) => {
    event.preventDefault()
    ano = prompt('Insira um ano', '')

    if (ano % 4 == 0) {
        if (ano % 100 == 0) {
            if (ano % 400 == 0) {
                final = `é bissexto`
                msg.classList = 'yes'
            } else {
                final = `não é bissexto`
                msg.classList = 'no'
            }
        } else {
            final = `é bissexto`
            msg.classList = 'yes'
        }
    } else {
        final = `não é bissexto`
        msg.classList = 'no'
    }

    msg.innerHTML = `${ano} <b>${final}</b>`

})