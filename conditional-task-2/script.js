let response;
let score = 100;
let machineActive = true;


if (machineActive){
  switch (true){
  case (score >= 0 && score <=19):
      response = 'That was terrible score - total fail!';
      break;
  case (score >= 20 && score <=39):
      response = 'You know some things, but it\'s a pretty bad score';
      break;
  case (score >=40 && score <=69):
      response = 'You did a passable job, not bad!';
      break;
  case (score >=70 && score <=89):
      response = 'That\'s great score, you really know your stuff.';
      break;
  case (score >=90 && score <=100):
      response = 'What an amazing score! Did you cheat? Are you for real?';
      break;  
  default:
      response = 'This is not possible, an error has occurded';
}
} else {
respone = 'The machine is turned off. Turn it on to process your score.';
}
// if (machineActive){
//   if (score < 0 || score > 100){
//      response = 'This is not possible, an error has occurded'; 
//         } else if (score >= 0 && score <=19){
//           response = 'That was terrible score - total fail!';
//         } else if (score >= 20 && score <=39){
//           response = 'You know some things, but it\'s a pretty bad score';
//         } else if (score >=40 && score <=69){
//           response = 'You did a passable job, not bad!';
//         } else if (score >=70 && score <=89){
//           responsee = 'That\'s great score, you really know your stuff.';
//         } else if (score >=90 && score <=100){
//           response = 'What an amazing score! Did you cheat? Are you for real?';
//         }

// } else {
//   response = 'Switch the machine on';
// }


const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
