function add(a=0, b=0)
{
    console.log('declaration')
    var sum = a+b
    return sum

}

console.log(add(10,20))

var add = function (a=0,b=1)
{
    console.log('expression')
    var sum = a+b
    return sum
}

console.log(add(10,20))


