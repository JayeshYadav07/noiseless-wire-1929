
// cards.innerHTML += `<div class="card-item">
// <div class="img-container">
// <img
// src="${element.img}"
// alt="error"
// />
// <div class="quick-show">Quick Show</div>
// </div>

// <div class="item-body">

// <div class="card-arrive">${element.arrive}</div>
// <div class="card-title">${element.title}</div>
// <h4 class="card-disc">
// ${element.disc}
// </h4>
// <div class="card-price">${element.price}</div>

// <div class="card-review">
// <span>Review:</span
// ><span class="review-counter">${element.review}</span>
// </div>
// <div class="add-to-cart">Add to cart</div>
// </div>
// </div>`;

let div = document.createElement("div");
  div.setAttribute("class", "card-item");

  let imgC = document.createElement("div");
  imgC.setAttribute("class", "img-container");
  let img = document.createElement("img");
  img.setAttribute("src", element.img);
  let quick_show = document.createElement("div");
  quick_show.setAttribute("class", "quick-show");
  quick_show.innerText = "Quick Show";
  imgC.append(img, quick_show);

  let item_body = document.createElement("div");
  let card_arrive = document.createElement("div");
  card_arrive.setAttribute("class", "card-arrive");
  card_arrive.innerText = element.arrive;

  let card_title = document.createElement("div");
  card_title.setAttribute("class", "card-title");
  card_title.innerText = element.title;


  let card_disc = document.createElement("h4");
  card_disc.setAttribute("class", "card-disc");
  card_disc.innerText = element.disc;

  
  let card_price = document.createElement("div");
  card_price.setAttribute("class", "card-price");
  card_price.innerText = element.price;

  let card_review = document.createElement("div");
  card_review.setAttribute("class", "card-review");
  let span1 = document.createElement("span");
  span1.innerText = "Review:";
  let span2 = document.createElement("span");
  span2.setAttribute("class", "review-counter");
  span2.innerText = element.review;
  card_review.append(span1, span2);
  let add_to_cart = document.createElement("div");
  add_to_cart.setAttribute("class", "add-to-cart");
  add_to_cart.innerText = "Add to cart";
  item_body.append(
    card_arrive,
    card_title,
    card_disc,
    card_price,
    card_review,
    add_to_cart
  );
  div.append(imgC, item_body);
  cards.append(div);