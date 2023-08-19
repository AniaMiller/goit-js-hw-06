const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let list = document.querySelector('#ingredients')
let items = []

function createItems() {
  ingredients.forEach((item) => {
    let li = document.createElement('li')
    li.innerText = item
    li.className = 'item'
    items.push(li)
  })
}

createItems()
list.append(...items)
