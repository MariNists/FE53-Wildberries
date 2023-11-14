export function showGoods() {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "";

    const goodsFromLs = localStorage.getItem("goods");
    const cardsFromLs = JSON.parse(goodsFromLs);

    cardsFromLs.forEach((item) => {
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

        delBtn.addEventListener("click", () => removeCard(id));
        goodsPrise.append(delBtn);
        delBtn.textContent = "X";

    });
}

function removeCards() {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "";
    localStorage.removeItem("goods");
}
const deleteBtn = document.querySelector('.btn-secondary');
deleteBtn.addEventListener("click", () => removeCards());



function removeCard(id) {
    const card = document.getElementById(id);
    console.log(card);
    card.remove();
    let arrCard = JSON.parse(localStorage.getItem('goods'));
    const index = arrCard.find(goods => goods.id === id);
    arrCard.splice(index, 1);
    localStorage.setItem('goods', JSON.stringify(arrCard));

}
