let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
if (machineActive){
    machineResult = 'Machine On';
    // if (pwd === 'cheese'){
    //     pwdResult = 'Logged successfully';
    // } else {
    //     pwdResult = 'Login invalid';
    // }


    switch (true){
        case (pwd === 'cheese'):
            pwdResult = 'Logged successfully';
        break;
        default:
            pwdResult = 'Login invalid';

    }
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