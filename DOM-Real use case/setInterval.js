let count=1;

const counter=setInterval(()=>{
  if(count>10){
    clearInterval();
  }
  else{
  console.log(count++);  }
}
 ,1000);

 console.log(counter);   

 //setTimeout

 /*

setTimeout(()=>clearInterval(counter),1000*10);

 */

//happy independence day

const countdown=document.querySelector('h1');
let time=10;
countdown.innerText=time--;


setTimeout(()=>{
    countdown.innerText=time--;
},1000);


//promise

const deepak=new Promise((resolve,reject)=>{
  const cleanedRoom=true;
  if(cleanedRoom){
  resolve("Go and Play");
}else{
  reject("Go do laundry");
}

});

deepak.then((msg)=>console.log(msg)).catch((error)=>console.log(error));


//example

const print=document.querySelector('h2');


const msg=(num)=>
new Promise((resolve,reject)=>{
  if(num){
    setTimeout(()=>{
      console.log(num);
      print.innerText=num;
      resolve(num)},1000);
  }else{
    reject(num);
  }
});

msg(10)
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.then((x)=>msg(--x))
.catch((err)=>print.innerText="Happy independence day");










