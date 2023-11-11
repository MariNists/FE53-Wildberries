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
                <button class="btn-style">Добавить в карзину</button>
            </div>
            <div class="products__discription">
                <span class="products__price">${card[key].price}₽<span class="products__old-price">${card[key].oldPrice}</span></span>
                <span class="products__names">${card[key].nameCard}<span> / ${card[key].rusNameCard}</span></span>
                <span class="products__rating"><i class="fa-solid fa-star"></i>${card[key].rating}</span>
            </div>
        </li>
        `
    }
};

getArr();






const bootstrap = require('bootstrap');

