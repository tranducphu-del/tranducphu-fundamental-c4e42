const a = prompt()
const b = prompt()
const c = prompt()

const delta = b**2 - (4*a*c)

if(delta<0){
    console.log("phuong trinh vo nghiem");
}

if(delta=0){
    console.log("phuong trinh co nghiem kep");

    x1 = x2 = (-b)/(2*a);
    console.log("phuong trinh co nghiem kep la x1 = x2 = ", x1);
}

if(delta>0){
    console.log("phuong trinh co hai nghiem phan biet");

    x1 = (-b+Math.sqrt(delta))/(2*a);
    x2 = (-b-Math.sqrt(delta))/(2*a);
}