let main = document.createElement('main')
main.classList.add('container')

document.body.prepend(main)

let projectName = document.createElement('h1')
projectName.innerHTML = "Accept the future"
main.append(projectName)

let ListBlock = document.createElement('div')
ListBlock.className = 'mainBlock'
main.append(ListBlock)

let firstdiv = document.createElement('div')
ListBlock.append(firstdiv)

let texIn = document.createElement('input')
texIn.className = "texIn"
texIn.setAttribute('placeholder', 'Write simply sentence or even text')
firstdiv.append(texIn)

let setDate = document.createElement('input')
setDate.setAttribute('type','date')
firstdiv.append(setDate)

let addBth = document.createElement('button')
addBth.innerHTML = 'ADD THIS'
addBth.id = "addBth"
firstdiv.append(addBth)

addBth.setAttribute('onclick', "addTodo()")

const addTodo =()=> {
    console.log('fresh stuff')
    alert('fresh stuff')
}