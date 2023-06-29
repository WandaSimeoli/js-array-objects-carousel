// Array di oggetti 

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// Ciclo for per concatenare Template Literal

const container = document.querySelector('.content');

let activeElement = 0;

images.forEach ((singleImage, i, imagesArray) => {
    
    if (i == 0) {
    container.innerHTML = container.innerHTML + `
    <div class=" item active">
    <img src="${singleImage.image}"  alt="">
    <h2>${singleImage.title}</h2>
    <p>${singleImage.text}</p>
    </div>`; 
}
else {
    container.innerHTML = container.innerHTML  + `
    <div class="item">
    <img src="${singleImage.image}"  alt="">
    <h2>${singleImage.title}</h2>
    <p>${singleImage.text}</p>
    </div>`; 
}
}
)
const allContent = document.querySelectorAll('.item');
console.log(allContent, typeof allContent);
 
// Button per andare avanti 

const postArrow = document.querySelector('.post');

postArrow.addEventListener('click', 
   function () {

    allContent[activeElement].classList.remove('active');

    if (activeElement < allContent.length -1) {
       
        activeElement++;
    }  
    
      //  Ciclo infinito del carosello 
      
      else {
        activeElement = 0;
    }

    allContent[activeElement].classList.add('active');

    }
);
    // Button per tornare indietro 

 const preArrow = document.querySelector('.pre');
     preArrow.addEventListener('click',
     function () {

        allContent[activeElement].classList.remove('active');
        
         if (activeElement > 0) {
           
            activeElement--;
           
         }
               //  Ciclo infinito del carosello 
         else {
            activeElement = allContent.length -1;
           
         }
         allContent[activeElement].classList.add('active');
     }
     );

   



