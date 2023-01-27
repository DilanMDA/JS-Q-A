const items = document.querySelectorAll("li");
const list = document.querySelector("ul");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); //Stop bubbling up and propagation
    console.log("item clicked");
  });
});

list.addEventListener("click", () => {
  console.log("list clicked");
});
