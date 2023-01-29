const name = 'Mustafa';
const para = document.createElement('p');

const phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]


for(let i = 0; i < phonebook.length; i++){
    if (phonebook[i].name === name) {
    let result = phonebook[i].name + ' ' + phonebook[i].number;
    para.innerHTML = result;
    }
}




const section = document.querySelector('section');
section.appendChild(para);