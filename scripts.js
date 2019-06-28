let root = document.getElementById('root')

// creating title
let h1 = document.createElement('h1')
h1.innerHTML = `My favorite color is <span>hotpink</span>`
root.appendChild( h1 )
let span = document.querySelector('h1 span')
span.style.color = 'hotpink'

// creating box
let box = document.createElement('div')
box.style.border = '2px solid limegreen'
box.style.height = '200px'
box.style.width = '200px'
box.style.backgroundColor = 'hotpink'
root.appendChild( box )
// add event listeners
box.addEventListener('mouseenter', function() {
  this.style.cursor = 'pointer'
})

// select action
let select = document.querySelector( 'select' )
let currentAction = select.value
select.addEventListener( 'change', (ev) => {
  currentAction = ev.target.value
  console.log( currentAction )
})

// changing color
const changeColor = () => {
  let colors = ['blue', 'red', 'green', 'hotpink']
  let options = colors.filter(el => el !== box.style.backgroundColor)
  let newColor = options[Math.floor(Math.random() * options.length)]
  box.style.backgroundColor = newColor
  span.style.color = newColor
  span.innerText = newColor
}

// changing shape of container
const changeShape = () => {
  console.log( "shapeshifting! 🐒")
  let oldRadius = box.style.borderRadius
  box.style.borderRadius = oldRadius === '100px' ? '0' : '100px'
}

// choose which action to execute depending to the currentAction
const chooseAction = () => {
  currentAction === 'color' ? changeColor() : changeShape()
}

box.addEventListener('click', chooseAction )



