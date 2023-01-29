let i = 500;
    const para = document.createElement('p');

    function isPrime(num) {
      for(let i = 2; i < num; i++) {
        if(num % i === 0) {
          return false;
        }
      }
      return true;
    }

for (let it = 200; it >= 2; it--){
  if (isPrime(it)){
          let result = it + ', ';
          para.textContent = result; 
          console.log(result);
        } 
      }
    


    const section = document.querySelector('section');
    section.appendChild(para);