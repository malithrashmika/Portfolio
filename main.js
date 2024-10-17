let number=document.getElementById('number');
let count=0;

setInterval(()=>{
    if(count==90){
        clearInterval;
    } else {
        count+=1;
        number.innerHTML=`${count}%`;
    }
},30);

let number1=document.getElementById('number1');
let count1=0;

setInterval(()=>{
    if(count1==85){
        clearInterval;
    } else {
        count1+=1;
        number1.innerHTML=`${count1}%`;
    }
},30);

let number2=document.getElementById('number2');
let count2=0;

setInterval(()=>{
    if(count2==80){
        clearInterval;
    } else {
        count2+=1;
        number2.innerHTML=`${count2}%`;
    }
},30);

let number3=document.getElementById('number3');
let count3=0;

setInterval(()=>{
    if(count3==75){
        clearInterval;
    } else {
        count3+=1;
        number3.innerHTML=`${count3}%`;
    }
},30);
