let search = document.getElementById("header-search");
search.addEventListener("click", (e) => {
  let url = window.location.origin + "/product.html";
  window.location.assign(url);
});
let cart = JSON.parse(localStorage.getItem("cart"));
if (cart == null) cart = [];
let countCart = document.getElementById("cart-count");
countCart.innerText = cart.length;
