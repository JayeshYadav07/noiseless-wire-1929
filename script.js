let search = document.getElementById("header-search");
search.addEventListener("click", (e) => {
  let url = window.location.origin + "/product.html";
  window.location.assign(url);
});
