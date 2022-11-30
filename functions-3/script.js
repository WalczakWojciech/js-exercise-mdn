const names = ['Chris', 'Li Kang', 'Anne', 'Francesca',
'Mustafa', 'Tina', 'Bert', 'Jada']

const para = document.createElement('p');



function randomFun(){
    const num1 = Math.floor(Math.random() * names.length);
    const num2 = Math.floor(Math.random() * names.length);
    const random = Math.floor((num1 + num2)/2);
    console.log(random);
    return random;
}


function chooseName(){
    const number = randomFun();
    para.innerText = names[number];
} 

chooseName();

const section = document.querySelector('section');

section.appendChild(para);