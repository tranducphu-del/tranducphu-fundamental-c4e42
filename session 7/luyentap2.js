// function kiemtra(text) {
//     const res = text.includes("@")
//     return res


// }

// kiemtra("email")
// const c = kiemtra("email")
// console.log(c);

// const kiemtra = (number) => {
//     let newnumber =[]
//     for(let i=0 ; i<number.length; i++){
//         if(number[i]%2 == 0){
//             newnumber.push(number[i])
//         }
//     }
//     return newnumber
// }

// let c = kiemtra(prompt("nhap vao cac so"))
// console.log(c);

// const ringBell = () =>{
//     console.log("Ring Ring Ring");
// }


// const walk = (action) =>{
//     console.log("walking");
//     action()
// }

// walk(ringBell)

const hocBai = (callback)=> {
    console.log("dang hoc bai");
    console.log("...");
    console.log("hoc xong");
    callback()
}

const dingu = () =>{
    console.log("di ngu");
}

const diChoi = () =>{
    console.log("di choi");
}

const meGoi = () =>{
    hocBai(dingu)
}

setTimeout(meGoi, 4000)



