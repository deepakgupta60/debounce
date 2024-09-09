function printName()
{
    console.log("Deepak")
}

console.log("Start")
   
let timerId=setTimeout(()=>{
    printName()
},1000)

clearTimeout(timerId)

console.log(timerId)

console.log("End")
// printName()
