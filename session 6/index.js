//part 1
const maytinh = {
    HP:20,
    DELL:50,
    MACBOOK:12,
    ASUS:30 
}
// console.log(maytinh.Macbook);
// console.log(prompt("hang may tinh ban muon hien thi"));

//part 2
// maytinh.TOSHIBA = 10
// console.log(maytinh);

// let key = prompt("them ten hang ban muon them vao")
// let value = prompt("so luong ban muon them vao")
// maytinh[key]=value;

// maytinh.DELL = 10;
// maytinh.Macbook = 2;

//part 3
// let total = 0

// for(let key in maytinh){
 
//     console.log(`${key} ${maytinh[key]}` );
//     total += maytinh[key];
//     console.log(total);
// }
// maytinh.FUJITSU = 15;
// maytinh.ALIENWARE = 5;

// part 4
const banggia = {
HP: 600,
DELL: 650,
MACBOOK: 12000,
ASUS: 400,
ACER: 350,
TOSHIBA: 600,
FUJITSU: 900,
ALIENWARE: 1000

}
// console.log(banggia.ASUS);

// const key1 = prompt ("hang may ban muon xem gia")
// console.log(banggia[key1]);

//part 5
// const giatridonhang = (banggia.ASUS) * 5 
// console.log(giatridonhang);

// const laptopName = prompt("hang may ban muon mua")
// const laptopNumber =Number( prompt("so luong ban muon mua"))

// // const giatridonhang1 = (banggia[laptopName]) * (laptopNumber)
// // console.log(giatridonhang1); 


// if(laptopNumber > maytinh[laptopName]){
//     console.log("khong du so luong hang " )
// }
// else{
//     maytinh[laptopName] -= laptopNumber;
// console.log(maytinh);
// }
// const laptop = prompt("nhap ten va so luong")
// console.log(laptop.split(":"));

// let giatri = 0
// for(let key in maytinh){
//     let total = (maytinh[key] * banggia[key])
//     giatri += total
    
//     console.log(total, key);
// }

//part 7
// const nhanvat = {
// Name: "Light",
// Age: 17,
// Strength: 8,
// Defense: 10,
// HP: 100,
// Backpack: ["Shield", "Bread Loaf"],
// Gold: 100,
// Level: 2

//  }
// nhanvat.Gold = nhanvat.Gold + 50;


// // nhanvat.Backpack.push("Flint Stone");
// // nhanvat.Pocket  = ["Monster Dex","Flashlight"];

// //part 8
const skill = [
    {
    Skill : 1,
    Name: "Tackle",
    Minimumlevel: 1,
    Damage: 5,
    Hitrate: 0.3

    },

    {
    Skill : 2,
    Name: "Quick attack",
    Minimumlevel: 2,
    Damage: 3,
    Hitrate: 0.5
    },

    {
    Skill: 3,
    Name: "Strong Kick",
    Minimumlevel: 4,
    Damage: 9,
    Hitrate: 0.2,

    }
]

//console.log(skill);

// for(let i=0; i<skill.length; i++){
//     console.log(`${i} ${skill[i].Name}`);
// }

// const level = prompt("level hien tai la" )
// for(let i=0; i<skill.length; i++){

// if(level >= skill[i].Minimumlevel ){
//     console.log(skill[i].Damage);
// }

// else{
//     console.log("khong du level");
// }
// }

const number = Math.random()
Math.floor(number * 1);
for(let i=0; i<skill.length; i++){
    if(number<skill[i].Hitrate){
        console.log(skill[i].Damage);

    }
    else{
        console.log("skill da ko trung muc tieu");
    }
}
