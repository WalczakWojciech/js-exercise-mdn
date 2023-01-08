const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const filPe of people) {
  if (filPe == "Phil" || filPe == "Lola"){
	refused.textContent += `${filPe}, `;
	} else {
		admitted.textContent += `${filPe}, `;
	}
	}

refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + '.';
