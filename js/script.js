// Creare array con lista delle 5 immagini

const allImg = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp', ];
console.log(allImg, typeof allImg);


// Ciclo for per concatenare Template Literal

const container = document.querySelector('.content');

let activeElement = 0;

for (let i = 0; i < allImg.length; i++) {
    console.log (allImg[i]);
    
    if (i == 0) {
    container.innerHTML = container.innerHTML + `
    <div class=" item active">
    <img src="${allImg[i]}"  alt="">
    </div>`; 
}
else {
    container.innerHTML = container.innerHTML  + `
    <div class="item">
    <img src="${allImg[i]}" alt="">
    </div>`; 
}
}

const allContent = document.querySelectorAll('.item');
console.log(allContent, typeof allContent);
 

const postArrow = document.querySelector('.post');

postArrow.addEventListener('click', 
   function () {
    if (activeElement < allContent.length -1) {
        allContent[activeElement].classList.remove('active');
        activeElement++;
        allContent [activeElement].classList.add('active');
    }   
    }
);

const preArrow = document.querySelector('.pre');

    preArrow.addEventListener('click',
    function () {

        if (activeElement > 0) 
    }
    );



