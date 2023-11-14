export function showGoods() {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "";

    const goodsFromLs = localStorage.getItem("goods");
    const cardsFromLs = JSON.parse(goodsFromLs);

    cardsFromLs.forEach((item) => {
        const goodsWrapp = document.createElement('div');
        goodsWrapp.classList.add("goodsWrapp");
        modalBody.append(goodsWrapp);
    
        const goodsName = document.createElement('div');
        goodsName.classList.add("goodsName");
        goodsWrapp.append(goodsName);
        goodsName.textContent = item ["nameCard"];
    
        const goodsPrise = document.createElement("div");
        goodsPrise.classList.add("goodsPrise");
        goodsWrapp.append(goodsPrise);
        goodsPrise.textContent = item ["price"];
    
        const delBtn = document.createElement("button");
        delBtn.classList.add("delBtn");
        goodsPrise.append(delBtn);
        delBtn.textContent = "X";

    });
  
}
function removeCards () {
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = "";
    localStorage.removeItem("goods");

}


const deleteBtn = document.querySelector('.btn-secondary');
deleteBtn.addEventListener("click", () => removeCards());