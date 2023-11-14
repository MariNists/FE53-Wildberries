export function showGoods(){
const modalBody = document.querySelector(".modal-body"); 

//очистить все внутри modal-body

const goodsWrapp = document.createElement('div');
goodsWrapp.classList.add("goodsWrapp");
modalBody.append(goodsWrapp);

const goodsName = document.createElement('div');
goodsName.classList.add("goodsName");
goodsWrapp.append(goodsName);
goodsName.textContent = "Название товара";

const goodsPrise = document.createElement("div");
goodsPrise.classList.add("goodsPrise");
goodsWrapp.append(goodsPrise);
goodsPrise.textContent = "prise";

const delBtn = document.createElement("button");
delBtn.classList.add("delBtn");
goodsPrise.append(delBtn);
delBtn.textContent = "X";


}
