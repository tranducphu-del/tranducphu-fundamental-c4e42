// const number = Math.random()
// console.log(number);

// const number2 = 1.4
// console.log(Math.floor(number2));

// const monAn = ["com","pho","chao","thit cho"]
// console.log(monAn);
// monAn.push("thit meo")
// monAn.push("mam tom")
// console.log(monAn);
// console.log(monAn[2];

//     for(let i = 0 ; i < monAn.length); i++){
//         console.log(monAn[i]);
//         monan[i] ="thit cho";
//     }

// console.log(monAn)
// if(monAn.includes(monAn[6]) == true){
//     monAn [6] = "bun dau";
// }

// monAn.splice (2,1);
//     console.log(monAn);

// const cauThu = ["Ronaldo" , "Messi" , "Mpape"]
// console.log(cauThu);
// const question = prompt("ban co muon them cau thu vao khong")
// if(question == "yes"){
//     cauThu.push(prompt("ten cau thu muon them vao"));
//     console.log(cauThu[i]);
// }
// else{
//     console.log("bye bye");
// }
// for(let i=0 ; i < cauThu.length ; i++){
//     console.log(cauThu[i]);
// }

// const tencauthu = prompt("ten cau thu ban muon doi")
// const index = cauThu.indexOf(tencauthu)
// cauThu[index] = prompt("nhap ten cau thu muon them vao")
// for(let i=0; i< cauThu.length ; i++){
//     console.log(`$(i+1) ${cauThu[i]}`);
// console.log("welcome")
// const item = ["quan ao","mu","giay dep"]
// for(let i=0 ; i< item.length ; i++){
//     console.log(item[i]);
// }
// const question  = prompt("ban muon lam gi? (C,R,U,D)")
// if (question == "C"){
//     item.push(prompt("item muon them la"))
//     for(let i=0; i< item.length ; i++){
//     console.log(`${(i+1)} ${item[i]}`);
//     }
// }
//  if(question == "R"){
//     for(let i=0; i< item.length ; i++){
//         console.log(`$(i+1) ${item[i]}`);
//         }
// }

//  if(question == "U"){
//     const tenitem = prompt("ten item ban muon doi")
//     const index = item.indexOf(tenitem)
//     item[index]= prompt("nhap ten item muon them vao ")
//     for(let i=0; i< item.length ; i++){
//         console.log(`${(i+1)} ${item[i]}`);
//         }
// }

// if(question == "D"){
//     const itemxoa = prompt("ten item ban muon xoa")
//     const index = item.indexOf(itemxoa)
//     item.splice(index,1);
//     for(let i=0; i< item.length ; i++){
//         console.log(`${(i+1)} ${item[i]}`);
//         }
// }

const nhap = (prompt("Nhap day so la"))
const tach = nhap.split(",");

let total = 0;
for(let i=0 ; i<= tach.length ; i++){
    total += Number(tach[i])
}
console.log(total);


