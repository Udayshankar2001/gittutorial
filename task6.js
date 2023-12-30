// Write the code as shown in the video below:
const mh=document.querySelector('#main-heading');
mh.style.textAlign='right';
const bh=document.querySelector('#basket-heading');
bh.style.color='brown';
const fruit = document.querySelector('.fruits');
fruit.style.padding='5px';
fruit.style.margin='5px';
fruit.style.backgroundColor='grey';
fruit.style.width='100%';
fruit.style.borderRadius='5px';
const eFruit=document.querySelectorAll('.fruit');
for(let i=0;i<eFruit.length;i++)
  {
    eFruit[i].style.backgroundColor='lightgrey';
    eFruit[i].style.padding='5px';
     eFruit[i].style.margin='5px';
    eFruit[i].style.backgroundColor='lightgrey';
    eFruit[i].style.borderRadius='5px';
   eFruit[i].style.listStyleType='none'; 
  }
const evenFruit=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<evenFruit.length;i++)
  {
    evenFruit[i].style.backgroundColor='brown';
    evenFruit[i].style.color='white';
  }
