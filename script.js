const items = document.querySelectorAll("li");
const list = document.querySelector("ul");
const button = document.querySelector("button");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     item.remove(); //item removed from list
//     // e.stopPropagation(); //Stop bubbling up and propagation
//     // console.log("item clicked");
//   });
// });

list.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    e.target.remove();
  }
  // e.target.remove(); //remove al UL list item clicking area
});

button.addEventListener("click", () => {
  let el = document.createElement("li");
  el.textContent = "new item";
  list.append(el); // add new item to bottom
});
