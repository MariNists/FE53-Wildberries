export function showGoods() {
    console.log("showgoods");
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "";

    const goodsFromLs = localStorage.getItem("goods");
    const cardsFromLs = JSON.parse(goodsFromLs) || [];
    let goodsSum = 0;

    cardsFromLs.forEach((item) => {
        goodsSum += item.price;

        const id = `${item.id}-basketRemove`;

        const goodsWrapp = document.createElement('div');
        goodsWrapp.classList.add("goodsWrapp");
        goodsWrapp.id = id;
        modalBody.append(goodsWrapp);

        const goodsName = document.createElement('div');
        goodsName.classList.add("goodsName");
        goodsWrapp.append(goodsName);
        goodsName.textContent = item["nameCard"];

        const goodsPrise = document.createElement("div");
        goodsPrise.classList.add("goodsPrise");
        goodsWrapp.append(goodsPrise);
        goodsPrise.textContent = item["price"];

        const delBtn = document.createElement("button");
        delBtn.classList.add("delBtn");

        delBtn.addEventListener("click", () => removeCard(id, item.id));
        goodsPrise.append(delBtn);
        delBtn.textContent = "X";
    });

    const total = document.createElement('div');
    total.classList.add("total");
    modalBody.append(total);
    total.textContent = `Итого: ${goodsSum}`;

    // const deleteBtn = document.querySelector('.btn-secondary');
    // deleteBtn.addEventListener("click", () => removeCards());

    // const deleteBtn = document.querySelector('.btn-secondary');
    // if (sum === 0) {
    //     deleteBtn.disabled = true;
    // }

}

function removeCards() {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "";
    localStorage.removeItem("goods");
}
const deleteBtn = document.querySelector('.btn-secondary');
deleteBtn.addEventListener("click", () => removeCards());



function removeCard(htmlItemid, itemId) {
    const card = document.getElementById(htmlItemid);
    card.remove();
    let arrCard = JSON.parse(localStorage.getItem('goods'));

    let removedItemIndex = 0;
    const index = arrCard.forEach((goods, i) => {
        if (goods.id === itemId) {
            removedItemIndex = i;
        }
    });

    arrCard.splice(removedItemIndex, 1);
    localStorage.setItem('goods', JSON.stringify(arrCard));
    let sum = 0;
    arrCard.forEach((item) => {
        console.log('OOK item: ', item);
        sum += item.price;

    });

    let removeTotal = document.querySelector(".total");
    removeTotal.textContent = `Итого: ${sum}`;

}
