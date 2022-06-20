const users=['Pavan','Sridhar','Mirthunjay'];

// const userList=document.createElement('ol');

// users.forEach((user)=>{

//     const userName=document.createElement('li');
//     userName.innerHTML=`${user}`;
// userList.append(userName);
// document.body.append(userList);
// })

users.map((user)=>{
var ol=document.createElement('li');
ol.innerHTML=`${user}`;
document.body.append(ol);
}
)