btn = document.getElementById('btnCalcular')
btn.addEventListener('click', calcular)

function calcular() {
    let altura = parseFloat(document.getElementById('txtAltura').value)//value é apenas o valor que está no elemento

    let peso = parseFloat(document.getElementById('txtPeso').value)

    let imc = peso / (altura * altura) 

    let d = document.getElementById('divIMC')
    d.innerHTML = `O IMC é: ${imc.toFixed(2)}`
}