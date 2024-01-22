// Seleccionar el elemento ul#categories 
const categories = document.querySelector("#categories"); 
// Obtener el número de categorías 
const numberOfCategories = categories.children.length; 
console.log(`Number of categories: ${numberOfCategories}`); 
// Iterar sobre cada elemento li.item en la lista 
for (const category of categories.children) 
{ 
    // Obtener el texto del título del artículo 
    const categoryTitle = category.querySelector("h2").textContent; 
    console.log(`Category: ${categoryTitle}`); 
    // Obtener el número de artículos en la categoría 
    const numberOfElements = category.querySelectorAll("li").length; 
    console.log(`Elements: ${numberOfElements}`); 
} 