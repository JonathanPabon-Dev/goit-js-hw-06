const categories = document.querySelector('#categories');
const numberOfCategories = categories.children.length;
console.log([...categories.children]);
console.log(`Number of categories: ${numberOfCategories}`);

[...categories.children].forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  const numberOfElements = category.querySelectorAll('li').length;
  console.log(`Elements: ${numberOfElements}`);
});
