import {
    swiper
} from "./slider";
import "./search";
import "./goodsBasket";
import {
    showGoods
} from "./goodsBasket";


const cardsWrapper = document.querySelector('.products__cards-wrapper');
async function getArr() {
    let response = await fetch('https://654d30da77200d6ba85a1e5c.mockapi.io/card');
    let cards = await response.json();
    cards = cards.slice(0, 10);

    let key;

    for (key of cards) {

        cardsWrapper.innerHTML += `
        <li class="products__cards-item" id="${key.id}">
            <div class="products__cards-image">
                <img class="picture" src="${key.image}" alt="#">
                <button type="button" id="${key.id}" class="products__show" data-path="form-popup">Быстрый просмотр</button>
                <span class="products__sale">${key.sale}</span>
            </div>
            <div class="products__discription">
                <span class="products__price">${key.price}₽<span class="products__old-price">${key.oldPrice}</span></span>
                <span class="products__names">${key.nameCard}<span> / ${key.rusNameCard}</span></span>
                <span class="products__rating"><i class="fa-solid fa-star"></i>${key.rating}</span>
                <button class="btn-style" id="${key.id}">Добавить в корзину</button>
            </div>
        </li>
        `
    };
    // ОБРАБОТЧИК СОБЫТИЙ
    cardsWrapper.addEventListener('click', (event) => {
        let cardId = event.target.getAttribute('id');

        const targetCard = cards.find((item) => item.id === cardId);

        const goodsFromLs = localStorage.getItem("goods");

        if (goodsFromLs === null || goodsFromLs === JSON.stringify([])) {
            localStorage.setItem("goods", JSON.stringify([targetCard]));
        } else {
            let parsedGoodsFromLs = JSON.parse(goodsFromLs);
            parsedGoodsFromLs = [...parsedGoodsFromLs, targetCard];
            localStorage.setItem('goods', JSON.stringify(parsedGoodsFromLs));
        }
    });



    // МОДАЛЬНОЕ ОКНО
    const btns = document.querySelectorAll('.products__show');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modals = document.querySelectorAll('.modal-D');
    const modalVisible = document.getElementById('visible');

    let bigImg = document.createElement('img');
    bigImg.className = 'modalImg';
    bigImg.alt = '#'

    btns.forEach((el) => {
        el.addEventListener('click', (e) => {

            let imgId = e.target.getAttribute('id');
            const targetImg = cards.find((item) => {
                if (item.id === imgId) {
                    bigImg.src = item.image;
                };
            });

            modalVisible.append(bigImg);

            let path = e.target.getAttribute('data-path');

            modals.forEach((el) => {
                el.classList.remove('modal--visible');
            });

            document.querySelector(`[data-target="${path}"]`).classList.toggle('modal--visible');
            modalOverlay.classList.add('modal-overlay--visible');
        });
    });

    modalOverlay.addEventListener('click', (e) => {

        if (e.target == modalOverlay) {
            modalOverlay.classList.remove('modal-overlay--visible');
            modals.forEach((el) => {
                el.classList.remove('modal--visible');
            });

        };
    });
};


getArr();

const bootstrap = require('bootstrap');
const busketButton = document.getElementById("busketButton");
busketButton.addEventListener("click", showGoods);
// console.log(busketButton);
