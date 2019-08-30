const tracnghiem =[{
    cauhoi:"how many legs an octopus has",
    dapan :["one leg" , "two legs" , "three legs", "four legs"],
    cautraloidung:3

},
{
    cauhoi:"nhen co may chan",
    dapan: ["1 chan","3 chan","4 chan","6 chan" ],
    cautraloidung:3

},

{
    cauhoi:"lon co may chan",
    dapan: ["1 chan","2 chan","3 chan","4 chan"],
    cautraloidung:3
}]

let total = 0
for(let i=0; i<tracnghiem.length; i++){
    console.log(tracnghiem[i].cauhoi,tracnghiem[i].dapan);
    const ans = prompt("cau tra loi cua ban:")
    if(ans == cautraloidung){
        console.log("Hura!!");
    }
    else{
        console.log("Not a correct answer");
    }
}






