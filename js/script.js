$(function () {
  var mobileMenuToggle = function () {
    $(".js-menu-toggle").on("click", function (e) {
      e.preventDefault();
      if ($("body").hasClass("mobile-menu-active")) {
        $("body").removeClass("mobile-menu-active");
      } else {
        $("body").addClass("mobile-menu-active");
      }
    });

    $(window)
      .resize(function () {
        var $this = $(this);
        if ($this.width() > 768) {
          if ($("body").hasClass("mobile-menu-active")) {
            $("body").removeClass("mobile-menu-active");
          }
        }
      })
      .resize();

    $("body").click(function () {
      $(this).removeClass("mobile-menu-active");
    });

    $(".mobile-menu, .menu-toggle").click(function (event) {
      event.stopPropagation();
    });
  };
  mobileMenuToggle();

  const swiper = new Swiper(".swiperProperties", {
    direction: "horizontal",
    loop: false,
    allowTouchMove: false,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 30,
    speed: 800,

    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },
  });

  var accordion = function () {
    var accordionItemActive = $(".accordion-item.active");
    var height = accordionItemActive.find("div").prop("scrollHeight");

    accordionItemActive.find(".accordion-body").css({
      "max-height": height + "px",
    });

    $(".accordion-item a").click(function (e) {
      e.preventDefault();
      var $this = $(this);
      var accordionItem = $this.closest(".accordion-item");

      var height = accordionItem.find("div").prop("scrollHeight");

      $(".accordion-item")
        .removeClass("active")
        .find(".accordion-body")
        .css({
          "max-height": 0 + "px",
        });

      if (accordionItem.hasClass("active")) {
        accordionItem.removeClass("active");
        accordionItem.find(".accordion-body").css({
          "max-height": 0 + "px",
        });
      } else {
        accordionItem.addClass("active");
        accordionItem.find(".accordion-body").css({
          "max-height": height + "px",
        });
      }
    });
  };
  accordion();

  var benefitImageSize = function () {
    var benefitsImage = $(".benefits-img");
    var imgHeight = benefitsImage.find("ul li:first img:eq(0)").height();
    $(".benefits-img").css({
      height: imgHeight,
    });
  };
  benefitImageSize();

  $(window)
    .resize(function () {
      setTimeout(function () {
        benefitImageSize();
      }, 100);
    })
    .resize();

  var benefitsAccordionClickImageFade = function () {
    $(".benefits-text .accordion-item").each(function (index) {
      var $this = $(this);
      $this.find("h3 > a").attr("data-index", index);
    });

    $("body").on("click", ".accordion-item a", function (e) {
      e.preventDefault();
      var $this = $(this),
        index = $this.data("index"),
        benefitsImgLi = $(".benefits-img ul li:eq(" + index + ")");

      $(".benefits-img ul li").removeClass("active");
      benefitsImgLi.addClass("active");
    });
  };
  benefitsAccordionClickImageFade();

  var selectLang = function () {
    $(".js-select-lang").on("click", function (e) {
      e.preventDefault();
      var $this = $(this),
        langWrap = $this.closest(".language");

      if ($(".language").hasClass("active")) {
        langWrap.removeClass("active");
      } else {
        langWrap.addClass("active");
      }
    });

    $("body").click(function () {
      $(".language").removeClass("active");
    });

    $(".language").click(function (event) {
      event.stopPropagation();
    });
  };
  selectLang();
});
