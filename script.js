/* ----------- MOBILNI MENI ----------- */

mobileMenu = document.querySelector('.mobilemenu');

mobileMenu.addEventListener('click', () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
});


/* ----------- IMAGE SLIDER ----------- */

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

rightBtn.addEventListener('click', () => {
    displayNone();
    imgNum++;

    if(imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
});

leftBtn.addEventListener('click', () => {
    displayNone();
    imgNum--;

    if(imgNum === -1) {
        imgNum = pictures.length - 1;
    }

    pictures[imgNum].style.display = 'block';
});


const displayNone = () => {
    pictures.forEach(img => {
        img.style.display = 'none';
    })
};

/* ----------- PORTFOLIO ITEMS ----------- */

let all = document.querySelector('.sve');
let portfolioItems = document.querySelectorAll('.portfolio-single-item');

all.addEventListener('click', () => {
    portfolioItems.forEach((item) => {
        item.style.display = 'block';
    });
});

/* ----------- RESTORAN DUGME ----------- */

let brown = document.querySelector('.brown');
let brownCategory = brown.getAttribute('data-category');

brown.addEventListener('click', () => {

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });
    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(brownCategory)) {
            item.style.display = 'block';
            
        }
    });
});


/* ----------- HOTEL DUGME ----------- */

let blue = document.querySelector('.blue');
let blueCategory = blue.getAttribute('data-category');

blue.addEventListener('click', () => {

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });
    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(blueCategory)) {
            item.style.display = 'block';
        }
    });
});

/* ----------- KORPORACIJE DUGME ----------- */

let green = document.querySelector('.green');
let greenCategory = green.getAttribute('data-category');

green.addEventListener('click', () => {

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });
    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(greenCategory)) {
            item.style.display = 'block';
        }
    });
});

/* ----------- SPA DUGME ----------- */

let yellow = document.querySelector('.yellow');
let yellowCategory = yellow.getAttribute('data-category');

yellow.addEventListener('click', () => {

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });
    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(yellowCategory)) {
            item.style.display = 'block';
        }
    });
});

/* ----------- EDUKACIJA DUGME ----------- */

let red = document.querySelector('.red');
let redCategory = red.getAttribute('data-category');

red.addEventListener('click', () => {

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });
    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(redCategory)) {
            item.style.display = 'block';
        }
    });
});

/* ----------- OSTALO DUGME ----------- */

let rose = document.querySelector('.rose');
let roseCategory = rose.getAttribute('data-category');

rose.addEventListener('click', () => {

    portfolioItems.forEach((item) => {
        item.style.display = 'none';
    });
    portfolioItems.forEach((item) => {
        if(item.getAttribute('data-category').includes(roseCategory)) {
            item.style.display = 'block';  
        }
    });
});


/* ----------- OPEN-CLOSE MODAL ----------- */

let openBtn = document.querySelector('.modal-btn');

openBtn.addEventListener('click', () => {
    let modalWindow = document.querySelector('.popup-modal2');
    let overlay = document.querySelector('.overlay2');

    overlay.style.display = 'block';
    modalWindow.style.display = 'block';
});

let closeModal = document.querySelector('#closeModal2');

closeModal.addEventListener('click', () => {
    let modalWindow = document.querySelector('.popup-modal2');
    let overlay = document.querySelector('.overlay2');

    overlay.style.display = 'none';
    modalWindow.style.display = 'none';
});


