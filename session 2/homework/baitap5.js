// const n = prompt("nhap mot so bat ki la")
// let array = number.toString.split('');
// console.log(array.le

let number = Number( prompt() )

let flag = true
let count = 0 
for(let i=0; flag; i++){
   let res = Math.floor( number /= 10);
   number = res;
   if (res ==0){
       flag = false
   }
   count +=1
}
console.log(count);