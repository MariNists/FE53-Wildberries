const mockApiUrl = "https://654d30da77200d6ba85a1e5c.mockapi.io/card";

fetch(mockApiUrl)
  .then(response => {
    // Проверка успешности запроса (код 200 означает успешный запрос)(не работает)
    if (!response.ok) {
      throw new Error(`Ошибка при получении данных. Код ответа: ${response.status}`);
    }
    // Извлечение данных из JSON-формата
    return response.json();
  })
  .then(data => {
    // Добавление обработчика события input после успешного получения данных
    const inputElement = document.querySelector('.header__search-input');


    if (inputElement) {
      let searchTerm = '';

      // ...

inputElement.addEventListener('input', (event) => {
    searchTerm = event.target.value.toLowerCase();
    const regex = new RegExp(searchTerm, 'i'); // 'i' - игнорировать регистр
  
    // Перебор всех карточек товаров на странице
    const allProductItems = document.querySelectorAll('.products__cards-item');
  
    allProductItems.forEach(productItem => {
      // Получение текстового содержимого (названия) товара
      const productName = productItem.querySelector('.products__names').textContent.toLowerCase();
      console.log(productName)
  
      if (regex.test(productName)) {
        productItem.style.display = 'inline-block'; 
      } else {
        productItem.style.display = 'none'; 
      }
    });
  })}})  