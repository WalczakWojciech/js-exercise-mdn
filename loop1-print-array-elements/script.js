const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');

    
    myArray.forEach(printArray);

    function printArray(value){
        let newLine = document.createElement('li');
        newLine.innerHTML = value;
        list.appendChild(newLine);
    }
    
    const section = document.querySelector('section');
    section.appendChild(list);

