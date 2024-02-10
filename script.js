const wrapper = document.querySelector(".slider-wrapper");
const items = document.querySelectorAll(".item");
const sizes = document.querySelectorAll(".size");


// Size button active:

// Products array
const products = [ {
  id : 1,
  title: "Air Jordan 1 Retro OG",
  price: 699,
  colors: [
    {
      code: "blue",
      img: "images/jordan1.png"
    },
    {
      code: "red",
      img: "images/retro.png"
    }
  ],

},
{
  id : 2,
  title: "Nike Dunk Low University Red",
  price: 389,
  colors: [
    {
      code: "red",
      img: "images/PngItem_5535108.png"
    },
    {
      code: "black",
      img: "images/dunk.png"
    }
  ],

},
{
  id : 3,
  title: "Air Force 1 Shadow Pastel",
  price: 129,
  colors: [
    {
      code: "black",
      img: "images/PngItem_6277177.png"
    },
    {
      code: "blue",
      img: "images/force.png"
    }
  ],

},
{
  id : 4,
  title: "Air Max 97 Splatter",
  price: 449,
  colors: [
    {
      code: "white",
      img: "images/PngItem_181189.png"
    },
    {
      code: "black",
      img: "images/max.png"
    }
  ],

},
{
  id : 5,
  title: "Travis Scott X Air Jordan 1 Retro OG",
  price: 1599,
  colors: [
    {
      code: "brown",
      img: "images/PngItem_1302521.png"
    },
    {
      code: "blue",
      img: "images/chicago.png"
    }
  ],

},
];
let chosenProduct = products[0];
const productImage = document.querySelector('.product-image');
const productTitle = document.querySelector('.product-title');
const productPrice = document.querySelector('.product-price');
const productOptions = document.querySelectorAll('.option');
const productSizes = document.querySelectorAll('.size');



// Javascript logics:
items.forEach((item, index) =>{
  item.addEventListener('click', () =>{
    // Chnage current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change chosen product
    chosenProduct = products[index];

    //Changing the texts and price
    productTitle.textContent = chosenProduct.title;
    productPrice.textContent = "$" + chosenProduct.price;
    productImage.src = chosenProduct.colors[0].img;

    // Changing the options of colours:
    productOptions.forEach((color, index) =>{
      color.style.backgroundColor = chosenProduct.colors[index].code;
    }); 
  });
});

//Displaying different chosen options:

productOptions.forEach((color, index) =>{
  color.addEventListener('click', () =>{
    productImage.src = chosenProduct.colors[index].img;
  });
});


productSizes.forEach((size, index) =>{
  size.addEventListener('click', () =>{
    productSizes.forEach((size)=>{
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});





