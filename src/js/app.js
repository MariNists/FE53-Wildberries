import { swiper } from "./slider";
import "./search";


const cardsWrapper = document.querySelector('.products__cards-wrapper');

async function getArr() {
    let response = await fetch('https://654d30da77200d6ba85a1e5c.mockapi.io/card');
    let card = await response.json();
    card = card.slice(0, 10);

    let key;

    for (key of card) {

        cardsWrapper.innerHTML += `
        <li class="products__cards-item" id="${key.id}">
            <div class="products__cards-image">
                <img class="picture" src="${key.image}" alt="#">
                <button type="button" class="products__show" data-path="form-popup">Быстрый просмотр</button>
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

    let btnAdd = document.getElementsByClassName('btn-style');

    let arr = [];

// ОБРАБОТЧИК СОБЫТИЙ
    cardsWrapper.addEventListener('click', (event) => {


        if (event.target) {
            let objFor = {
                id: `${key.id}`,
                image: `${key.image}`,
                nameCard: `${key.nameCard}`,
                rusNameCard: `${key.rusNameCard}`,
                price: `${key.price}`,
            };
            arr.push(objFor);
        };

        if (event.target) {
            saveToLocalStorage();
        };
    });

    function saveToLocalStorage() {
        localStorage.setItem('cards', JSON.stringify(arr));
    };



// МОДАЛЬНОЕ ОКНО
    const btns = document.querySelectorAll('.products__show');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modals = document.querySelectorAll('.modal-D');

    btns.forEach((el) => {
        el.addEventListener('click', (e) => {
            let path = e.target.getAttribute('data-path');
            console.log(path);

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

