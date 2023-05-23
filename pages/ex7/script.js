let bt = document.getElementById('bt')
let msg = document.getElementById('msg')

bt.addEventListener('click', (event) => {
    event.preventDefault()
    let C = Number(prompt('Digite uma temperatura em °C', ''))

    msg.innerHTML = `<h4>A temperatura ${C}°C corresponde a:</h4> <br>\
    ${C + 273.15}°K <br>\
    ${(C * 9 / 5) + 32}°F`

})