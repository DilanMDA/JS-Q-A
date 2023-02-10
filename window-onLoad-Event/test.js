function setUpEvents() {
  var content = document.getElementById("content");
  var button = document.getElementById("show-more");

  button.onclick = function () {
    if (content.className == "open") {
      // shrink the box to
      content.className = "";
      button.innerHTML = "Show More";
    } else {
      // expand the box to the
      content.className = "open";
      button.innerHTML = "Show Less";
    }
  };
}

window.onload = function () {
  setUpEvents();
};
