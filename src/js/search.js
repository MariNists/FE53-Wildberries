function setupSearch() {
  const inputElement = document.querySelector('.header__search-input');

  if (inputElement) {
    let searchTerm = '';

    inputElement.addEventListener('input', (event) => {
      searchTerm = event.target.value.toLowerCase();
      const regex = new RegExp(searchTerm, 'i');

      // Перебор всех карточек товаров на странице
      const allProductItems = document.querySelectorAll('.products__cards-item');

      allProductItems.forEach(productItem => {
        // Получение текстового содержимого (названия) товара
        const productName = productItem.querySelector('.products__names').textContent.toLowerCase();

        if (regex.test(productName)) {
          productItem.style.display = 'inline-block';
        } else {
          productItem.style.display = 'none';
        }
      });
    });
  }
}

// Вызываем функцию для настройки поиска
setupSearch();
