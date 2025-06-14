let pourc=document.querySelector('.pourc');
let fist=document.querySelector('.fist');

let starValue=0;
let endValue=90;
let finInterval=100;
let evolution=setInterval(()=>{
    starValue++;

    pourc.textContent=`${starValue}%`;
    fist.style.background=`conic-gradient( yellow ${starValue*3.6}deg,rgb(235, 233, 233) 0deg)`;

if(starValue==endValue){
    clearInterval(evolution);
}
},finInterval
);

