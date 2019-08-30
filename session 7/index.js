const x = Math.floor(Math.random() * 10)
const y = Math.floor(Math.random() * 10 )
const z = x +y 
const saiSo = [-1,0,1]
const ops = ["+","-","*","/"]
const randOps = ops[Math.floor(Math.random() *4)]
const randNumber = Math.floor(Math.random() * 3)
const displayResult = z + saiSo[randNumber]
calculate();
console.log('S{x} +${y} = ${displayResult}');

const ans = prompt("T/F?")

if(z == displayResult){
    if (ans == "T") {
        console.log("correct!");
    }
    else if (ans == "F"){
        console.log("Wrong :(");
    }
}