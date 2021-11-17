// const root = document.getElementById('root')
// console.log(root)
// const div = document.createElement('div')
// div.innerText = '👋 hi there'
// // div.className = 'hello'
// div.style.color = 'green'
// div.style.fontSize = '10rem'
// div.style.marginTop = '20vh'
// root.appendChild(div)


const App  = (childNodes = null) => {
    const div = document.createElement('div')
    if(childNodes!= null && childNodes.length > 0){
        childNodes.forEach(node => div.appendChild(node))
    }
   
    return div
}


const WelcomeMessage = (name) => {
    const div = document.createElement('div')
    div.innerText = `👋 hi there, ${name}`
    div.style.color = 'green'
    div.style.fontSize = '10rem'
    div.style.marginTop = '20vh'
    return div
}

const render = (app, target) => {
    // do some magical comparing of what is currently in the actual dom
    // to what we have stored in the virtual DOM
    target.appendChild(app)
}

const username = 'sam'
const app = App([WelcomeMessage(username), WelcomeMessage('chris')])


render(app, document.getElementById('root'))
