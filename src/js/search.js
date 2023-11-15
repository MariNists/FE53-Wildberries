const mockApiUrl = "https://654d30da77200d6ba85a1e5c.mockapi.io/card";

let allProductItems; // Объявляем переменную для хранения всех элементов товаров

fetch(mockApiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка при получении данных. Код ответа: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    allProductItems = data; // Сохраняем полученные данные в переменную

    const inputElement = document.querySelector('.header__search-input');

    if (inputElement) {
      let searchTerm = '';

      inputElement.addEventListener('input', (event) => {
        searchTerm = event.target.value.toLowerCase();
        const regex = new RegExp(searchTerm, 'i');

        // Перебираем все товары, полученные из API
        allProductItems.forEach(productItem => {
          // Получение текстового содержимого (названия) товара
          const productName = productItem.rusNameCard.toLowerCase();

          const productElement = document.getElementById(productItem.id);

          if (regex.test(productName)) {
            productElement.style.display = 'inline-block';
          } else {
            productElement.style.display = 'none';
          }
        });
      });
    }
  });
