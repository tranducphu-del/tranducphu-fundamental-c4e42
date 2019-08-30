// const person = ["Nam", 99, 170, 60, "Ha Noi", 0 , 1]
// // C R U D
// //Create
// const personObject = {
//     name: "Nam",
//     yob: 99,
//     city:"Ha Noi",
//     girlFriend: 0
// }
// console.log(personObject);

// const cinemaObject = {
//     name:"nga tu tu than",
//     daodien:"Valeri Milev",
//     dienvien:["Jeremy Sisto" , "Lindy Booth"," Wayne Robson"]

// }
// //READ
// // console.log(cinemaObject["name"]);
// // console.log(cinemaObject.name)
// // for(let key in cinemaObject){
// //     console.log(key);
// //     console.log(key, cinemaObject[key]);
// // }
// //UPDATE
// // cinemaObject.name = "Start Game" //key da ton tai
// // cinemaObject.year = 2019 // chua co key 'year' trong object
// // const dienvienArray = cinemaObject.dienvien
// // console.log(dienvienArray[0])

// //DELETE
// delete cinemaObject.dienvien
// console.log(cinemaObject);

// const nhap = prompt("nhap ky tu la")
// const teencode = {
//     cmnr :"chuan com me rang",
//     ko :"khong",
//     thik :"thich"
// }
// if(nhap in teencode){
//     console.log(teencode[nhap]);
// }
// else {
//     const answer = prompt("chung toi chua co tu ma ban tim , hay cho chung toi biet nghia cua tu do")
//     teencode[nhap] = answer
//     console.log(teencode);
// }

// const bangluong =[
//     {
//     name :"Nam" ,
//     Role :"boiban",
//     Hours : 10,
//     $hours :5
//     },
// {
//     name : "Duc",
//     Role : "trongxe",
//     Hours : 15,
//     $hours :3
// }
// ]
// const form ={
//     name: prompt("nhap ten nhan vien"),
//     Role: prompt("nhap chuc vu"),
//     Hours: prompt("nhap gio lam"),
//     $hours: prompt("nhap he so luong")

// }
// bangluong.push[form];
// let havetoPay = 0
// for(let i=0 ; i<bangluong.length; i++){
//     console.log(`${i+1} ${bangluong[i].name} ${bangluong[i].Role} ${bangluong[i].Hours} ${bangluong[i].$hours}`);
//     let total = (`${bangluong[i].hours} * ${bangluong[i].$hours}`) *30;
//     havetoPay += total
//     console.log(`luong 1 thang ${total}`);
//     console.log("~~~~~~~~~~~~~~");
// }
// console.log(`So tien nha hang phai tra ${havetoPay}`);
// console.log(bangluong);

const tracnghiem ={
    question:"Nhen co may chan",
    choose :["2 chan","3 chan","4 chan","6 chan"],
    corect : 3

}





