const items = document.querySelectorAll(".issues_item");
document.addEventListener("DOMContentLoaded", function () {
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.toggle("active");
    });
  });
});

//menu_btn
$(document).ready(function () {
  // Обработчик клика на .menu_btn
  $(".menu_btn").click(function () {
    // Добавляем/удаляем класс "opened" к элементу .menu_btn_sidenav
    $(".menu_btn_sidenav").toggleClass("opened");

    // Плавное изменение ширины меню
    if ($(".menu_btn_sidenav").hasClass("opened")) {
      $(".menu_btn_sidenav").css("display", "block");
      $(".menu_btn_sidenav").animate({ width: "95%" }, 300);
      $(".opacity-background").css("display", "block");
    } else {
      $(".menu_btn_sidenav").animate({ width: "0" }, 300, function () {
        // После завершения анимации, скрываем меню
        $(".menu_btn_sidenav").css("display", "none");
        Ω;
      });
    }
  });

  // Обработчик клика на .icon-cancel
  $(".icon-cancel").click(function () {
    // Закрываем меню
    $(".menu_btn_sidenav").removeClass("opened");
    $(".opacity-background").css("display", "none");
    // Плавное изменение ширины меню на 0
    $(".menu_btn_sidenav").animate({ width: "0" }, 300, function () {
      // После завершения анимации, скрываем меню
      $(".menu_btn_sidenav").css("display", "none");
    });
  });
});
