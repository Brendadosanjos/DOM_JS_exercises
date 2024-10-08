let elementos = document.querySelectorAll('*') //ou getElementsByTagName('*')
document.write(`quantidade de elementos ${elementos.length}`)

let todosElementos =""

for(e of elementos){
    todosElementos = todosElementos + "<br>" + e.tagName
}

document.write(todosElementos)

