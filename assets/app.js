const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')
const resultBox = document.querySelector('.result')

const sum = () => {
    const result = parseInt(a.value) + parseInt(b.value)
    console.log(result)
    resultBox.innerHTML = result
}

const mul = () => {
    const result = parseInt(a.value) * parseInt(b.value)
    console.log(result)
    resultBox.innerHTML = result
}

add.addEventListener('click' , sum)
multiply.addEventListener('click' , mul)
