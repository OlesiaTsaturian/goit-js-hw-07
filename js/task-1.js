// TODO З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const refs = {
  itemUlEl: document.querySelector('#categories'),
  itemLiEl: document.querySelectorAll('.item'),
};

const calculateItems = item => {
  item = refs.itemUlEl.children.length;
  console.log(`Number of categories: ${item}`);
};

calculateItems();

refs.itemLiEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
