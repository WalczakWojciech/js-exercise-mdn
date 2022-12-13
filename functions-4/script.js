const names = ['Chris', 'Li Kang', 'Anne', 'andrzej', 'Francesca', 'mati', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

// function isShort(name) {
//   return name.length < 5;
// }

// const shortNames = names.filter(isShort);
// para.textContent = shortNames;

const isShort = (name) => name.length < 5;

const shortNames = names.filter(isShort);
para.textContent = shortNames;

// Don't edit the code below here!

const section = document.querySelector('section');

section.appendChild(para);