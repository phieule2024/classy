$(".contact__form").submit(function (event) {
  return false;
});
var header_block = {
  active: (_this) => {
    $(".header__block").addClass("active");
    let id_active = _this.attr("data-id");
    let mega_content = $(
      `.mega-menu__block .mega-menu__container[data-menu-id="${id_active}"]`
    );
    if (mega_content.length) {
      $(".mega-menu__block").addClass("active");
      mega_content.addClass("active");
    }
  },
  unActive: () => {
    // $(".header__block").removeClass("active");
    $(".mega-menu__block").removeClass("active");
    $(`.mega-menu__block .mega-menu__container.active`).removeClass("active");
  },
};
$(".header__block .nav__content .nav__link").hover(
  function () {
    header_block.active($(this));
  },
  function () {
    header_block.unActive();
  }
);
$('.menu-mobile__button').click(function () {
  header_block.active($(this));
});
$('.close-mobile__button').click(function () {
  $(".header__block").removeClass("active");
});

$("body").hover(function () {
  if ($(this).closest('.header__block').length) return;
  var windowpos = $(window).scrollTop();
  if (windowpos <= 500) {
    header_block.unActive();
  }
});

$(window).scroll(function () {
  var windowpos = $(window).scrollTop();
  var menu = $(".header__block");
  if ($(this).width() <= 1024) menu = $(".header__mobile");
  if (windowpos >= 500) {
    menu.addClass("active");
  } else {
    menu.removeClass("active");
  }
});

var $slickElement_1 = $(".card-list__block");
var $status_1 = $(".pagingInfo_1");
$slickElement_1.on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status_1.text(i + " / " + slick.slideCount);
  }
);

$slickElement_1.slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

function zeroFill(num = 0, size = 2) {
  let s = num + "";
  while (s.length < size) s = `0${s}`;
  return s;
}

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  birthday = "05/06/2023";
  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = zeroFill(
        Math.floor(distance / day)
      )),
        (document.getElementById("hours").innerText = zeroFill(
          Math.floor((distance % day) / hour)
        )),
        (document.getElementById("minutes").innerText = zeroFill(
          Math.floor((distance % hour) / minute)
        )),
        (document.getElementById("seconds").innerText = zeroFill(
          Math.floor((distance % minute) / second)
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("countdown").style.display = "none";
        // document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();

$(".partner__list").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
});

$(".radio__group .radio__group__label").click(function () {
  $(this)
    .closest(".color__list")
    .find(".radio__group__input.checked")
    .removeClass("checked");
  $(this).parent().find(".radio__group__input").addClass("checked");
});

$("#best-seller-slide").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  adaptiveHeight: true,
});

$("#best-seller-slide").on("wheel", function (e) {
  e.preventDefault();

  if (e.originalEvent.deltaY < 0) {
    $(this).slick("slickPrev");
  } else {
    $(this).slick("slickNext");
  }
});

$("#best-seller-slide").on(
  "beforeChange",
  function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;
    console.log(nextSlide, slick.slideCount);
    $(".best-seller__block .progress-bar").css("width", calc + "%");
  }
);

$(".cart__item").click(function () {
  $("#cartModal").modal("show");
});
$(".search__action").click(function () {
  $("#searchModal").modal("show");
});
$(".lang__action").click(function () {
  $("#languageModal").modal('toggle');
});