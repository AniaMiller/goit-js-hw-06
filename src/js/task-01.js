const categories = document.querySelectorAll('.item')
console.log("Number of categories: " + categories.length)

categories.forEach(printInfo)

function printInfo(item) {
    const name = item.querySelector('h2')
    const elements = item.querySelectorAll('li')
    console.log("Category: " + name.innerHTML)
    console.log("Elements: " + elements.length)
}

// const list = document.querySelector(ul);
// const categoriesElementSingle = document.querySelector('# categoriesElement');
// const categoriesElement = document.querySelectorAll("# categoriesElement");
// console.log(categoriesElement);
// console.log(categoriesElementSingle);

// const firstElement = list.querySelector(li);
// console.log(list);
// console.log(firstElement);

// const listElements = document.querySelectorAll(li);
// console.log(listElements);

/*
Expected solution:

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5 
*/