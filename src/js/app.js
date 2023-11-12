import { swiper } from "./slider";


const cardsWrapper = document.querySelector('.products__cards-wrapper');

async function getArr() {
    let response = await fetch('https://654d30da77200d6ba85a1e5c.mockapi.io/card')
    let card = await response.json()
    card = card.slice(0, 10)

    let key;

    for (key in card) {

        cardsWrapper.innerHTML += `
        <li class="products__cards-item" id="${card[key].id}">
            <div class="products__cards-image">
                <img src="${card[key].image}" alt="#">
                <button class="products__show">Быстрый просмотр</button>
                <span class="products__sale">${card[key].sale}</span>
            </div>
            <div class="products__discription">
                <span class="products__price">${card[key].price}₽<span class="products__old-price">${card[key].oldPrice}</span></span>
                <span class="products__names">${card[key].nameCard}<span> / ${card[key].rusNameCard}</span></span>
                <span class="products__rating"><i class="fa-solid fa-star"></i>${card[key].rating}</span>
                <button class="btn-style">Добавить в корзину</button>
            </div>
        </li>
        `
    }

    let btnAdd = cardsWrapper.querySelectorAll(".btn-style");

    btnAdd[0].addEventListener('click', function() {
    if (btnAdd[0] === event.target) {
        saveToLocalStorage(card[0]);
    };
    });

    btnAdd[1].addEventListener('click', function() {
    if (btnAdd[1] === event.target) {
        saveToLocalStorage(card[1]);
    };
    });

    btnAdd[2].addEventListener('click', function() {
    if (btnAdd[2] === event.target) {
        saveToLocalStorage(card[2]);
    };
    });

    btnAdd[3].addEventListener('click', function() {
    if (btnAdd[3] === event.target) {
        saveToLocalStorage(card[3]);
    };
    });

    btnAdd[4].addEventListener('click', function() {
    if (btnAdd[4] === event.target) {
        saveToLocalStorage(card[4]);
    };
    });

    btnAdd[5].addEventListener('click', function() {
    if (btnAdd[5] === event.target) {
        saveToLocalStorage(card[5]);
    };
    });

    btnAdd[6].addEventListener('click', function() {
    if (btnAdd[6] === event.target) {
        saveToLocalStorage(card[6]);
    };
    });

    btnAdd[7].addEventListener('click', function() {
    if (btnAdd[7] === event.target) {
        saveToLocalStorage(card[7]);
    };
    });

    btnAdd[8].addEventListener('click', function() {
    if (btnAdd[8] === event.target) {
        saveToLocalStorage(card[8]);
    };
    });

    btnAdd[9].addEventListener('click', function() {
    if (btnAdd[9] === event.target) {
        saveToLocalStorage(card[9]);
    };
});



};

getArr();


function saveToLocalStorage(cardNum) {

localStorage.setItem('cards', JSON.stringify(cardNum));
};


const bootstrap = require('bootstrap');

