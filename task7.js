// Write your code below:
const subhead = document.createElement('h3');
const subheadText = document.createTextNode('Buy high quality organic fruits online');
subhead.appendChild(subheadText);
const divs = document.getElementsByTagName('div');
const firstdivs = divs[0];
firstdivs.appendChild(subhead);
subhead.style.fontStyle='italic';

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
 para.appendChild(paraText);
const seconddivs = divs[1];
const uol=document.querySelector('.fruits');
seconddivs.insertBefore(para,uol);
para.id='fruits-total';
