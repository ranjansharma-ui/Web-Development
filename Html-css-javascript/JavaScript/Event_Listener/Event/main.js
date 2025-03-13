// function changeText() {
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "Marco";

// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText)



function changeText(event){
    console.log(event);
    let para = document.getElementById('fpara');
    para.textContent = "Babbar";

    
}

let fpara = document.getElementById('fpara');

fpara.addEventListener('click',changeText)