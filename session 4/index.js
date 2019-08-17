//part 1
//baitap1 
// const list = [1,5,8,32,96]
// const nhap = Number(prompt ("nhap vao 1 so bat ki" ))

// const index = list.indexOf(nhap)

// if(index != -1 ){
//     console.log("so nay co trong list");
//     console.log(index);
// }

// else{
//     console.log("so nay khong co trong list")
// }

//baitap 2
// const list = [1,5,8,32,96]

// let total = 0;
// for(let i=0; i< list.length ; i++){
//     total += (list[i]);
// }
// console.log(total);

//baitap3
// const list = prompt("nhap day so la")
// const tach = list.split(" ")

// let total = 0
// for(let i=0; i< tach.length; i++){
//     total +=Number (tach[i]);
// }
// console.log(total);

//baitap 4 
// const list = [1,5,8,32,96]


// for(let i=0; i<list.length; i++){
//     if(list[i] %2 == 0){
//         console.log(list[i]);
//     }
// }

//baitap5
// const list = prompt("nhap day so la")
// const tach = list.split(",")

// for(let i=0 ; i<tach.length; i++){
//     if((tach[i]%2 == 0)){
//         console.log(tach[i]);
//     }
    
// }

//baitap 6 , 7 , 8
//  const quan = ["ST", "BD", "BTL","CG","DD","HBT"]
//  const danso = [150.300,247.100,333.300,266.800,420.900,318.000]

// let min = danso[0]
// let max = danso[0]

// for(let i=0; i< danso.length; i++){
//     if(danso[i]>max){
//         max = danso[i];
//     }
    



//     if(danso[i]<min){
//         min = danso[i];
//     }
// }
// console.log(max);
// console.log(min);


// console.log(quan[i],danso[i]);

//baitap9
// const dientich = [117.43,9.224,43.35,12.04,9.96,10.09]
// const matdo = []
// for(let i=0; i<danso.length; i++){
// let n = danso[i]/dientich[i];
// matdo.push(n);

// }
// console.log(matdo);

// //baitap10
// const matdodancutrungbinh =[]
// let totalmatdo =0


// for(let i=0; i<danso.length; i++){
//     totalmatdo += (matdo[i]);
    
// }
// let a = totalmatdo/quan.length
// matdodancutrungbinh.push(a);
// console.log(matdodancutrungbinh)

//bai 11
// const list = [1,4,7,8,32]
// let maxlist = list[0];

// for(let i=0; i<list.length; i++){
//     if(list[i]>maxlist){
//         maxlist = list[i];
//     }
// }
// console.log(maxlist);

//bai12
// const list = [1,4,7,8,32]
// let maxlist = list[0];

// for(let i=0; i<list.length; i++){
//     if(list[i]>maxlist){
//         maxlist = list[i];
//     }
//     console.log(maxlist);
// }

//bai13
// const list = [1,4,7,8,32]
// const newscore =prompt()

// list.push(Number(newscore));
// console.log(list);

//bai14
// const list = [45,67,56,78]
// let maxlist = list[0];

// for(let i=0; i<list.length; i++){
    
//     for(j=100; j<list.length; j--){
//         if(list[i]>maxlist){
//         maxlist = list[i];
        
//         list[j]= maxlist;
        
//     }
    
//     console.log(list[j])
// }
// }
const list = [1,4,7,8,32]
let tg;
for(i = 0; i < list.length -1; i++ ){
    for(j = i+1; j< list.length; j++ ){
        if(list[i]< list[j]){
            tg = list[i];
            list[i] =list[j];
            list[j] = tg
        }
    }
}

for(a = 0; a< list.length; a++ ){
    console.log(list[a])
}