import $ from "jquery";

export const jQuery = (): void => {
  $(document).ready(function () {
    const e = $(".first-carousel .owl-carousel");

    function o(e: JQuery<HTMLElement>, o: string): void {
      e.each(function () {
        const e = $(this);
        const t = "animated " + e.data("animation-" + o);
        e.addClass(t).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            e.removeClass(t);
          }
        );
      });
    }

    e.on("change.owl.carousel", function (t: any): void {
      o($(".owl-item", e).eq(t.item.index).find("[data-animation-out]"), "out");
    });

    let t = 0;

    e.on("changed.owl.carousel", function (t: any): void {
      o($(".owl-item", e).eq(t.item.index).find("[data-animation-in]"), "in");
    });

    e.on("translated.owl.carousel", function (o: any): void {
      if (o.item.index == o.page.count - 1)
        if (t < 1) t++;
        else {
          e.trigger("stop.owl.autoplay");
          const l = e.data("owl.carousel");
          l.settings.autoplay = !1;
          l.options.autoplay = !1;
          e.trigger("refresh.owl.carousel");
        }
    });
  });

  $(document).on("click", 'a[href^="#"]', function (e: Event): void {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($.attr(this, "href")).offset().top },
      500
    );
  });

  const video = document.querySelector("#sixth-section video");
  const playBtn = document.querySelector(".play-btn") as HTMLElement;
  const closeVideo = document.querySelector(".close-video") as HTMLElement;

  playBtn.addEventListener("click", () => {
    video?.classList.remove("d-none");
    playBtn.classList.add("d-none");
    playBtn.classList.remove("fadeInUpBig");
    closeVideo.style.transform = "scale(1)";
  });

  closeVideo.addEventListener("click", () => {
    video?.classList.add("d-none");
    playBtn.classList.remove("d-none");
    closeVideo.style.transform = "scale(0)";
  });

  const TabBtn = document.querySelectorAll(".tab-button") as NodeListOf<HTMLElement>;
  const Tabs = document.querySelectorAll(".tab-pane") as NodeListOf<HTMLElement>;

  TabBtn.forEach((e) => {
    e.addEventListener("click", () => {
      Tabs.forEach((e) => {
        e.classList.contains("active")
          ? e.classList.add("fadeinright")
          : e.classList.remove("fadeinright");
      });
    });
  });

  const menu = document.querySelector("#menu") as HTMLElement;
  const sideBar = document.querySelector(".sidebar") as HTMLElement;
  const close = document.querySelector("#close") as HTMLElement;

  menu.addEventListener("click", () => {
    sideBar.style.left = "0";
  });

  close.addEventListener("click", () => {
    sideBar.style.left = "-100%";
  });

  window.addEventListener("scroll", () => {
    const e = document.querySelector("#tenth-section") as HTMLElement;
    const o = document.querySelectorAll(".remove-effect") as NodeListOf<HTMLElement>;

    if (e.getBoundingClientRect().top < -400) {
      o.forEach((e) => {
        e.classList.add("fadeOutUpBig");
      });
    } else {
      o.forEach((e) => {
        e.classList.remove("fadeOutUpBig");
      });
    }
  });

  const header = document.querySelector("#header-section") as HTMLElement;
  const ul = document.querySelector("#header-section ul") as HTMLElement;
  const logo = document.querySelector(".logo") as HTMLElement;
  const logoImg = document.querySelector(".logo > img") as HTMLElement;

  let didScroll: boolean;

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

  let lastScrollTop = 0;
  const delta = 5;
  const navbarHeight = $("#header-section").outerHeight();

  function hasScrolled(): void {
    const e = $(this).scrollTop();
    if (Math.abs(lastScrollTop - e) <= delta) return;

    if (e > lastScrollTop && e > navbarHeight) {
      $("header").removeClass("scroll-down").addClass("scroll-up");
    } else if (e + $(window).height() < $(document).height()) {
      $("header").removeClass("scroll-up").addClass("scroll-down");
    }

    lastScrollTop = e;
  }

  $(window).scroll(function (e: any): void {
    didScroll = !0;
  });

  setInterval(function () {
    didScroll && (hasScrolled(), (didScroll = !1));
  }, 250);

  const popupBtn = document.querySelector(".popup-btn") as HTMLElement;
  const popupBox = document.querySelector(".popup") as HTMLElement;
  const closePopup = document.querySelector(".popup-close") as HTMLElement;
  const popupText = document.querySelector(".popup-btn h2") as HTMLElement;
  const popupImg = document.querySelector(".popup-btn img") as HTMLElement;

  window.addEventListener("load", () => {
    setTimeout(() => {
      popupBtn.style.transform = "scale(1)";
    }, 4e3);
  });

  popupText.addEventListener("click", () => {
    popupBox.style.transform = "scale(1)";
  });

  closePopup.addEventListener("click", () => {
    popupBox.style.transform = "scale(0)";
  });

  popupImg.addEventListener("click", () => {
    popupBtn.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    window.scrollY > 0 && popupBtn.classList.remove("active");
  });

  const sidebarItem = document.querySelectorAll(".sidebar-item") as NodeListOf<HTMLElement>;

  function isScrolledIntoView(e: HTMLElement): boolean {
    const o = $(window).scrollTop();
    const t = o + $(window).height();
    const l = $(e).offset().top;

    return l + $(e).height() - 500 <= t && l >= o;
  }

  sidebarItem.forEach((e) => {
    e.addEventListener("click", () => {
      sideBar.style.left = "-100%";
    });
  });

  $(window).on("load", function () {
    $(".loader").delay(2e3).fadeOut("slow");
    setTimeout(function () {
      $("#overlayer").addClass("loaded-page");
      document.body.style.overflowY = "auto";
      document.body.style.overflowX = "hidden";
    }, 2500);
  });

  $(window).scroll(function () {
    $("#video-play").each(function () {
      if (isScrolledIntoView(this)) {
        (document.getElementById("video-play") as HTMLVideoElement).play();
      }
    });
  });

  const arrow = document.querySelector(".middle-arrow") as HTMLElement;

  arrow.addEventListener("click", () => {
    document.querySelector("#eighth-section")?.scrollIntoView();
  });
};


