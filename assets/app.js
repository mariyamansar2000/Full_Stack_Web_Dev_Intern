var arr = ['go to the GYM','Eat Food', 'Clean House']
var callbackFunction = (element) => {
    console.log(element)
}
arr.forEach((element,index)=>{
    console.log(element,index)
})
