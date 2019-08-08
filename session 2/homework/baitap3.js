const n = prompt("nhap mot so ngau nhien la")
if(n<30){
    console.log("rainy");
}
else if (n>=30 && n<60){
    console.log("Cloudy");
}
else if (n>60){
    console.log("Sunny");
}
