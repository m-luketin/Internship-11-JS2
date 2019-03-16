//adding <li> elements with DOM manipulation
let dropdownMenu = document.querySelector(".dropdown__list");
let sortArray = [{type: "Beige", count: "1014"}, {type: "Purple", count: "1014"}, {type: "Yellow", count: "1014"}];

for(let i = 0; i < sortArray.length; i++)
{
  dropdownMenu.innerHTML += `<li class="dropdown__list__item">${sortArray[i].type}<span class="list__item__count">${sortArray[i].count}</span></li>`;
}

//adding shop items with DOM manipulation
let mainOffers = document.querySelector(".main__offers");
let shopItems = [
 {description: "Wrangler small logo crew neck t-shirt in white", brand: "", price: "£16.63"},
 {description: "Wrangler logo chest stripe rugby polo in blue/white", brand: "", price: "£50.63"}, 
 {description: "Wrangler kobel retro large logo ringer t-shirt in white", brand: "", price: "£20.97"}, 
 {description: "Lyle & Scott polo in burgundy", brand: "", price: "£44.12"}, 
 {description: "Unisex long sleeve t-shirt with graphic print in neon green", brand: "COLLUSION ", price: "£12.29"},
 {description: "Disney oversized t-shirt with rainbow", brand: "ASOS DESIGN ", price: "£22.42"},
 {description: "Unisex oversized t-shirt with back print", brand: "COLLUSION ", price: "£10.12"},
 {description: "Mickey relaxed t-shirt with retro print", brand: "ASOS DESIGN ", price: "£18.08"}
];

for(let i = 0; i < shopItems.length; i++)
{
  mainOffers.innerHTML += `<div class="offers__item">
  <img class="item__img" src="./assets/images/offer.jpg" alt="Offer" />
  <img class="item__heart-shape" src="./assets/images/heart-shape.png" alt="Hearth Shape">
  <img class="item__heart-full" src="./assets/images/heart-full.png" alt="Hearth Full">
  <p class="item__img-description">TALL</p>
  <p class="item__paragraph">
  <span class="item__paragraph__brand">${shopItems[i].brand}</span> ${shopItems[i].description}
  </p>
  <span class="item__price">${shopItems[i].price}</span>
  </div>`;
}

//hover and click events for favorites
let favorites = 0;
let items = document.querySelectorAll(".offers__item");
items.forEach((element) => {
  element.addEventListener("mouseover", function() {
    let blackHeart = element.querySelector(".item__heart-full");
      blackHeart.classList.add("opaque");  
  });
});
 
items.forEach((element) => {
  element.addEventListener("mouseout", function() {
    let blackHeart = element.querySelector(".item__heart-full");
    if(!blackHeart.clicked)
      blackHeart.classList.remove("opaque");
    else
      blackHeart.clicked == false;    
  });
});

let favoriteElement = document.createElement("span");
favoriteElement.innerHTML = `Favorites: ${favorites}`;
let main = document.querySelector("main");

let buttons = document.querySelectorAll(".item__heart-full");
buttons.forEach((element) => {
  element.clicked = false;
  element.addEventListener("click", function() {
      if(element.clicked) {
        element.clicked = false; 
        favorites--;
      }
      else {
        element.clicked = true;
        favorites++;
      } 

      if(favorites){
        favoriteElement.innerHTML = `Favorites: ${favorites}`;
        main.appendChild(favoriteElement);
      }
      else
        main.removeChild(favoriteElement);
  });
});

//popup item window
let offerItems = document.querySelectorAll(".item__img");
offerItems.forEach((element) => {
  element.addEventListener("click", function() {
    let win = window.open(); 
    win.document.write(`<link rel="stylesheet" href="./assets/styles/main.css" />
    <body><main>
    <div class="main__offers">${element.parentElement.innerHTML}</div>
    </main></body>`);
  });
});