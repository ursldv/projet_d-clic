const pr= document.getElementById("pr");
const pg= document.getElementById("pg");
let debutpr=0;
let debutpg=0;
let finpr=60;
let finpg=75;

let intpr=setInterval(()=>{
    debutpr++;
    pr.style.width=`${debutpr}%`;
    if(debutpr==finpr){
        clearInterval(intpr);
    }
},60)
let intpg=setInterval(()=>{
    debutpg++;
    pg.style.width=`${debutpg}%`;
    if(debutpg==finpg){
        clearInterval(intpg);
    }
},75)
const pa=document.getElementById("pa");
let debpa=0;
const finpa=85;
 let intpa=setInterval(()=>{
    debpa++;
    pa.style.width=`${debpa}%`;
    if(debpa==finpa){
        clearInterval(intpa);
    }
 },85);

 let cycle1=document.getElementById("cycle1");
 const cycle1span=document.getElementById("cycle1span"); 
let debut1=0;
let fin1=95;
let int1=setInterval(()=>{
    debut1++;
    cycle1span.textContent=`${debut1}%`;
    cycle1.style.background=`conic-gradient(#0fdacf ${debut1*3.5}deg,#e9e9e9 0deg)`;
    if(fin1==debut1){
        clearInterval(int1);
    }
},95);

 let cycle2=document.getElementById("cycle2");
 const cycle2span=document.getElementById("cycle2span"); 
let debut2=0;
let fin2=80;
let int2=setInterval(()=>{
    debut2++;
    cycle2span.textContent=`${debut2}%`;
    cycle2.style.background=`conic-gradient(#0fdacf ${debut2*3.5}deg,#e9e9e9 0deg)`;
    if(fin2==debut2){
        clearInterval(int2);
    }
},80);

 let cycle3=document.getElementById("cycle3");
 const cycle3span=document.getElementById("cycle3span"); 
let debut3=0;
let fin3=50;
let int3=setInterval(()=>{
    debut3++;
    cycle3span.textContent=`${debut3}%`;
    cycle3.style.background=`conic-gradient(#0fdacf ${debut3*3.6}deg,#e9e9e9 0deg)`;
    if(fin3==debut3){
        clearInterval(int3);
    }
},50);

 let cycle4=document.getElementById("cycle4");
 const cycle4span=document.getElementById("cycle4span"); 
let debut4=0;
let fin4=80;
let int4=setInterval(()=>{
    debut4++;
    cycle4span.textContent=`${debut4}%`;
    cycle4.style.background=`conic-gradient(#0fdacf ${debut4*3.6}deg,#e9e9e9 0deg)`;
    if(fin4==debut4){
        clearInterval(int4);
    }
},80);