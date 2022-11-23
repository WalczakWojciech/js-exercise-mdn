let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
if (machineActive){
    machineResult = 'Machine On';
    // Option 1
    // if (pwd === 'cheese'){
    //     pwdResult = 'Logged successfully';
    // } else {
    //     pwdResult = 'Login invalid';
    // }

    // Option 2
    // switch (true){
    //     case (pwd === 'cheese'):
    //         pwdResult = 'Logged successfully';
    //     break;
    //     default:
    //         pwdResult = 'Login invalid';

    // }
    // Option 3
    pwdResult = (pwd ==='cheese') ? 'Logged successfully': 'Login invalid';
} else {
    machineResult = 'Machine off';
}
// Don't edit the code below here!

const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);