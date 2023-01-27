const items = document.querySelectorAll("li");
const list = document.querySelector("ul");

items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("item clicked");
  });
});

list.addEventListener("click", () => {
  console.log("list clicked");
});
