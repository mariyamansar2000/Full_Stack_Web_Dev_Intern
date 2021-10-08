var heading = document.getElementById('heading')
var body = document.querySelector('body')
console.log(heading)

heading.innerHTML = "i was addeed by JS"
heading.style = "color:red;font-size:5rem"

heading.classList.add('five')
heading.classList.remove('five')

body.classList.remove('dark')

