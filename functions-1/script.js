const names = ['Chris', 'Li Kang', 'Anne', 'Francesca',
'Mustafa', 'Tina', 'Bert', 'Jada']

const para = document.createElement('p');

function chooseName(){
const random = names[Math.floor(Math.random() * names.length)];
console.log(random);
para.innerText = random;
} 

chooseName();


const section = document.querySelector('section');

section.appendChild(para);