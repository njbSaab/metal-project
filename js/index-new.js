const items = document.querySelectorAll(".issues_item");
document.addEventListener("DOMContentLoaded", function () {
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.toggle("active");
    });
  });
});
