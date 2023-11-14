import { swiper } from "./slider";
import "./search";
import "./goodsBasket";
import {showGoods} from "./goodsBasket";


const cardsWrapper = document.querySelector('.products__cards-wrapper');

async function getArr() {
    let response = await fetch('https://654d30da77200d6ba85a1e5c.mockapi.io/card');
    let card = await response.json();
    // card = card.slice(0, 10);
    
    let key;

    for (key in card) {

        cardsWrapper.innerHTML += `
        <li class="products__cards-item" id="${card[key].id}">
            <div class="products__cards-image">
                <img class="picture" src="${card[key].image}" alt="#">
                <button type="button" class='products__show'>Быстрый просмотр</button>
                <span class="products__sale">${card[key].sale}</span>
            </div>
            <div class="products__discription">
                <span class="products__price">${card[key].price}₽<span class="products__old-price">${card[key].oldPrice}</span></span>
                <span class="products__names">${card[key].nameCard}<span> / ${card[key].rusNameCard}</span></span>
                <span class="products__rating"><i class="fa-solid fa-star"></i>${card[key].rating}</span>
                <button class="btn-style" id="${card[key].id}">Добавить в корзину</button>
            </div>
        </li>
        `
    };

    // let cardsItem = cardsWrapper.getElementsByClassName('products__cards-item');
    // let btnAdd = document.getElementsByClassName('btn-style');

    // console.log(cardsItem[0].id);
    // console.log(btnAdd[0].id);

    let cloneCard = [];

    let objFor = card;

    cardsWrapper.addEventListener('click', (event) => {

        // console.log(event.target); 

        cloneCard.push(objFor);

        if (event.target) {
            saveToLocalStorage();
        };
    });

    function saveToLocalStorage() {
        localStorage.setItem('cards', JSON.stringify(cloneCard));
    };
};

getArr();

const bootstrap = require('bootstrap');
const busketButton = document.getElementById("busketButton");
busketButton.addEventListener("click", showGoods);
console.log(busketButton);