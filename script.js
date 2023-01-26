const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("item clicked");
  });
});
