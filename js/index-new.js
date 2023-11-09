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
$(document).ready(function () {
  $(".menu_links-item_dropdown").click(function () {
    $(this).toggleClass("opened");
    const isActive = $(this).hasClass("opened");
    const icon = $(this).find(".menu_links-item_dropdown_icon");
    const body = $(this).find(".menu_links-item-body");

    if (isActive) {
      icon.css("transform", "rotate(270deg)");
      body.css("max-height", "70px");
      body.css("display", "flex");
      body.css("padding-top", "10px");
    } else {
      icon.css("transform", "rotate(180deg)");
      body.css("max-height", "0");
      body.css("padding-top", "0");
    }
  });
});

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 150) {
    $(".nav-menu").addClass("fixed");
  } else {
    $(".nav-menu").removeClass("fixed");
  }
});
