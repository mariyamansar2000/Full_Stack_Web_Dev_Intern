function add(a=0, b=0)
{
    var sum = a+b
    return sum
}

var add = function (a=0,b=1)
{
    var sum = a+b
    return sum
}

console.log(add(10,20))

function greet(name='John',age=99)
{
    console.log(name,age)
}

var greet = function(name,age)
{
    console.log(name,age)
}

greet('Mariyam',21)
