console.log(10 < 34)
 true

console.log(10 < 4)
false

console.log(43 > 47)
 false

console.log(5 > 30)
 false

console.log(7 == 7)
 true

console.log(8 == 9)
 false

console.log(5 != 5)
 false
 
console.log(90 != 76)
 true

const a = 8
console.log(a >= 10)
 false

const a = 7
const b = 10
console.log((a + 3) <= b)
VM64:1 Uncaught SyntaxError: Identifier 'a' has already been declared
    at <anonymous>:1:1

    const c = 9
    console.log(c % 2)
    
    const c = 8
    if (c % 2) == 0 {
      console.log(“E”)
    }
        
    else {
      console.log(“O”)
    }
    
 Uncaught SyntaxError: Unexpected token ==

 const d = 120
if d < 111 {
  console.log(“Hurricane level 1&2”)
}
    
elif d < 130 {
  console.log(“Hurricane level 3”)
}
    
else {
  console.log(“Hurricane level 4or5”)
}
    

 Uncaught SyntaxError: Unexpected identifier

 const m = 255
if m % 5 == 0:
    console.log(“Divisible by 5”)
If m == 255:
    console.log(“Maximum color intensity”)
 Uncaught SyntaxError: Unexpected identifier