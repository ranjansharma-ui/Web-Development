let mydiv = document.querySelector('#mydiv');

let newElement = document.createElement('span');
newElement.textContent = 'Ranjan';

// mydiv.insertAdjacentElement('beforebegin',newElement);
// mydiv.insertAdjacentElement('afterbegin',newElement);
mydiv.insertAdjacentElement('afterend',newElement);
// mydiv.insertAdjacentElement('beforeend',newElement);


let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);