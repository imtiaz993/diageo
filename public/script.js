import $ from "jquery";

export const jQuery = () => {
  $(document).ready(function () {
    var e = $(".first-carousel .owl-carousel");
    function o(e, o) {
      e.each(function () {
        var e = $(this),
          t = "animated " + e.data("animation-" + o);
        e.addClass(t).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            e.removeClass(t);
          }
        );
      });
    }

    e.on("change.owl.carousel", function (t) {
      o($(".owl-item", e).eq(t.item.index).find("[data-animation-out]"), "out");
    });
    var t = 0;
    e.on("changed.owl.carousel", function (t) {
      o($(".owl-item", e).eq(t.item.index).find("[data-animation-in]"), "in");
    }),
      e.on("translated.owl.carousel", function (o) {
        if (o.item.index == o.page.count - 1)
          if (t < 1) t++;
          else {
            e.trigger("stop.owl.autoplay");
            var l = e.data("owl.carousel");
            (l.settings.autoplay = !1),
              (l.options.autoplay = !1),
              e.trigger("refresh.owl.carousel");
          }
      });
  }),
    $(document).on("click", 'a[href^="#"]', function (e) {
      e.preventDefault(),
        $("html, body").animate(
          { scrollTop: $($.attr(this, "href")).offset().top },
          500
        );
    });
  const video = document.querySelector("#sixth-section video"),
    playBtn = document.querySelector(".play-btn"),
    closeVideo = document.querySelector(".close-video");
  playBtn.addEventListener("click", () => {
    video.classList.remove("d-none"),
      playBtn.classList.add("d-none"),
      playBtn.classList.remove("fadeInUpBig"),
      (closeVideo.style.transform = "scale(1)");
  }),
    closeVideo.addEventListener("click", () => {
      video.classList.add("d-none"),
        playBtn.classList.remove("d-none"),
        (closeVideo.style.transform = "scale(0)");
    });
  const TabBtn = document.querySelectorAll(".tab-button"),
    Tabs = document.querySelectorAll(".tab-pane");
  TabBtn.forEach((e) => {
    e.addEventListener("click", () => {
      Tabs.forEach((e) => {
        e.classList.contains("active")
          ? e.classList.add("fadeinright")
          : e.classList.remove("fadeinright");
      });
    });
  });
  const menu = document.querySelector("#menu"),
    sideBar = document.querySelector(".sidebar"),
    close = document.querySelector("#close");
  menu.addEventListener("click", () => {
    sideBar.style.left = 0;
  }),
    close.addEventListener("click", () => {
      sideBar.style.left = "-100%";
    }),
    window.addEventListener("scroll", () => {
      const e = document.querySelector("#tenth-section"),
        o = document.querySelectorAll(".remove-effect");
      e.getBoundingClientRect().top < -400
        ? o.forEach((e) => {
            e.classList.add("fadeOutUpBig");
          })
        : o.forEach((e) => {
            e.classList.remove("fadeOutUpBig");
          });
    });
  const header = document.querySelector("#header-section"),
    ul = document.querySelector("#header-section ul"),
    logo = document.querySelector(".logo"),
    logoImg = document.querySelector(".logo > img");
  var didScroll;
  window.addEventListener("scroll", () => {
    window.scrollY > 1
      ? (header.classList.add("sticky"),
        logo.classList.add("onscroll-logo"),
        logo.style.setProperty("--remove", "none"),
        ul.classList.add("onscroll-ul"),
        header.classList.add("onscroll-header"),
        menu.classList.add("onscroll-menu"))
      : (header.classList.remove("sticky"),
        logo.classList.remove("onscroll-logo"),
        logo.style.setProperty("--remove", "block"),
        ul.classList.remove("onscroll-ul"),
        header.classList.remove("onscroll-header"),
        menu.classList.remove("onscroll-menu"));
  });
  var lastScrollTop = 0,
    delta = 5,
    navbarHeight = $("#header-section").outerHeight();
  function hasScrolled() {
    var e = $(this).scrollTop();
    Math.abs(lastScrollTop - e) <= delta ||
      (e > lastScrollTop && e > navbarHeight
        ? $("header").removeClass("scroll-down").addClass("scroll-up")
        : e + $(window).height() < $(document).height() &&
          $("header").removeClass("scroll-up").addClass("scroll-down"),
      (lastScrollTop = e));
  }
  $(window).scroll(function (e) {
    didScroll = !0;
  }),
    setInterval(function () {
      didScroll && (hasScrolled(), (didScroll = !1));
    }, 250);
  const popupBtn = document.querySelector(".popup-btn"),
    popupBox = document.querySelector(".popup"),
    closePopup = document.querySelector(".popup-close"),
    popupText = document.querySelector(".popup-btn h2"),
    popupImg = document.querySelector(".popup-btn img");
  window.addEventListener("load", () => {
    setTimeout(() => {
      popupBtn.style.transform = "scale(1)";
    }, 4e3);
  }),
    popupText.addEventListener("click", () => {
      popupBox.style.transform = "scale(1)";
    }),
    closePopup.addEventListener("click", () => {
      popupBox.style.transform = "scale(0)";
    }),
    popupImg.addEventListener("click", () => {
      popupBtn.classList.toggle("active");
    }),
    window.addEventListener("scroll", () => {
      window.scrollY > 0 && popupBtn.classList.remove("active");
    });
  const sidebarItem = document.querySelectorAll(".sidebar-item");
  function isScrolledIntoView(e) {
    var o = $(window).scrollTop(),
      t = o + $(window).height(),
      l = $(e).offset().top;
    return l + $(e).height() - 500 <= t && l >= o;
  }
  sidebarItem.forEach((e) => {
    e.addEventListener("click", () => {
      sideBar.style.left = "-100%";
    });
  }),
    $(window).on("load", function () {
      $(".loader").delay(2e3).fadeOut("slow"),
        setTimeout(function () {
          $("#overlayer").addClass("loaded-page"),
            (document.body.style.overflowY = "auto"),
            (document.body.style.overflowX = "hidden");
        }, 2500);
    }),
    $(window).scroll(function () {
      $("#video-play").each(function () {
        !0 === isScrolledIntoView(this) &&
          document.getElementById("video-play").play();
      });
    });
  const arrow = document.querySelector(".middle-arrow");
  arrow.addEventListener("click", () => {
    document.querySelector("#eighth-section").scrollIntoView();
  });
};
