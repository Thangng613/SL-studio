$(document).ready(function () {
  "use strict";

  document.getElementById("registerBtn").addEventListener("click", function () {
    // Lấy dữ liệu từ các trường
    const concept = document.querySelector("select").value;
    const fullname = document.querySelector('input[name="fullname"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const time = document.querySelector('input[name="time"]').value;

    // Gửi dữ liệu tới server
    const data = {
      concept,
      fullname,
      phone,
      time,
    };
    const loadingOverlay = document.getElementById("loading-overlay");
    if (!concept || !fullname || !phone || !time) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    } else {
      try {
        loadingOverlay.style.display = "flex";
        fetch("https://sl-studio-be.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            response.json();
          })
          .then((data) => {
            loadingOverlay.style.display = "none";
            alert("Đăng ký thành công!");
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Đã xảy ra lỗi! Vui lòng thử lại");
          });
      } catch (error) {
        alert("Đã xảy ra lỗi! Vui lòng thử lại");
      }
    }
  });

  /*==================================
* Author        : "ThemeSine"
* Template Name : CarVilla HTML Template
* Version       : 1.0
==================================== */

  /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. welcome animation support
3. owl carousel
======================================*/

  // 1. Scroll To Top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".return-to-top").fadeIn();
    } else {
      $(".return-to-top").fadeOut();
    }
  });
  $(".return-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
    return false;
  });

  // 2. welcome animation support

  $(window).load(function () {
    $(".welcome-hero-txt h2,.welcome-hero-txt p")
      .removeClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".welcome-hero-txt button")
      .removeClass("animated fadeInDown")
      .css({ opacity: "0" });
  });

  $(window).load(function () {
    $(".welcome-hero-txt h2,.welcome-hero-txt p")
      .addClass("animated fadeInUp")
      .css({ opacity: "0" });
    $(".welcome-hero-txt button")
      .addClass("animated fadeInDown")
      .css({ opacity: "0" });
  });

  // 3. owl carousel

  // i.  new-cars-carousel

  $("#new-cars-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    dots: true,
    mouseDrag: true,
    nav: false,
    smartSpeed: 1000,
    transitionStyle: "fade",
    animateIn: "fadeIn",
    animateOut: "fadeOutLeft",
    // navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
  });

  // ii. .testimonial-carousel

  var owl = $(".testimonial-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 0,

    loop: true,
    autoplay: true,
    smartSpeed: 1000,

    //nav:false,
    //navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

    dots: false,
    autoplayHoverPause: false,

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // iii. .brand-item (carousel)

  $(".brand-item").owlCarousel({
    items: 6,
    loop: true,
    smartSpeed: 1000,
    autoplay: true,
    dots: false,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2,
      },
      415: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });

  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });

  const allImagesTets = [
    "assets/imagess/concept/tetnc/24.jpg",
    "assets/imagess/concept/tetnc/2.jpg",
    "assets/imagess/concept/tetnc/3.jpg",
    "assets/imagess/concept/tetnc/4.jpg",
    "assets/imagess/concept/tetnc/5.jpg",
    "assets/imagess/concept/tetnc/6.jpg",
    "assets/imagess/concept/tetnc/7.jpg",
    "assets/imagess/concept/tetnc/8.jpg",
    "assets/imagess/concept/tetnc/23.jpg",
    "assets/imagess/concept/tetnc/9.jpg",
    "assets/imagess/concept/tetnc/10.jpg",
    "assets/imagess/concept/tetnc/11.jpg",
    "assets/imagess/concept/tetnc/12.jpg",
    "assets/imagess/concept/tetnc/13.jpg",
    "assets/imagess/concept/tetnc/14.jpg",
    "assets/imagess/concept/tetnc/15.jpg",
    "assets/imagess/concept/tetnc/16.jpg",
    "assets/imagess/concept/tetnc/17.jpg",
    "assets/imagess/concept/tetnc/18.jpg",
    "assets/imagess/concept/tetnc/19.jpg",
    "assets/imagess/concept/tetnc/20.jpg",
    "assets/imagess/concept/tetnc/21.jpg",
    "assets/imagess/concept/tetnc/22.jpg",
    "assets/imagess/concept/tetnc/1.jpg",
  ];

  const allImagesCouple = [
    "assets/imagess/concept/couple/c1.jpg",
    "assets/imagess/concept/couple/c2.jpg",
    "assets/imagess/concept/couple/c3.jpg",
    "assets/imagess/concept/couple/c4.jpg",
    "assets/imagess/concept/couple/c5.jpg",
    "assets/imagess/concept/couple/c6.jpg",
    "assets/imagess/concept/couple/c7.jpg",
    "assets/imagess/concept/couple/c8.jpg",
    "assets/imagess/concept/couple/c9.jpg",
    "assets/imagess/concept/couple/c10.jpg",
    "assets/imagess/concept/couple/c11.jpg",
  ];

  const allImagesSN = [
    "assets/imagess/concept/sinhnhat/sn1.jpg",
    "assets/imagess/concept/sinhnhat/sn2.jpg",
    "assets/imagess/concept/sinhnhat/sn3.jpg",
    "assets/imagess/concept/sinhnhat/sn4.jpg",
    "assets/imagess/concept/sinhnhat/sn5.jpg",
    "assets/imagess/concept/sinhnhat/sn6.jpg",
    "assets/imagess/concept/sinhnhat/sn7.jpg",
    "assets/imagess/concept/sinhnhat/sn8.jpg",
    "assets/imagess/concept/sinhnhat/sn9.jpg",
    "assets/imagess/concept/sinhnhat/sn10.jpg",
    "assets/imagess/concept/sinhnhat/sn12.jpg",
    "assets/imagess/concept/sinhnhat/sn13.jpg",
    "assets/imagess/concept/sinhnhat/sn14.jpg",
    "assets/imagess/concept/sinhnhat/sn15.jpg",
    "assets/imagess/concept/sinhnhat/sn16.jpg",
    "assets/imagess/concept/sinhnhat/sn17.jpg",
    "assets/imagess/concept/sinhnhat/sn18.jpg",
    "assets/imagess/concept/sinhnhat/sn19.jpg",
    "assets/imagess/concept/sinhnhat/sn20.jpg",
    "assets/imagess/concept/sinhnhat/sn21.jpg",
    "assets/imagess/concept/sinhnhat/sn22.jpg",
    "assets/imagess/concept/sinhnhat/sn23.jpg",
    "assets/imagess/concept/sinhnhat/sn24.jpg",
    "assets/imagess/concept/sinhnhat/sn25.jpg",
    "assets/imagess/concept/sinhnhat/sn26.jpg",
    "assets/imagess/concept/sinhnhat/sn27.jpg",
    "assets/imagess/concept/sinhnhat/sn28.jpg",
    "assets/imagess/concept/sinhnhat/sn29.jpg",
  ];

  const allImagesBeauty = [];

  const allImagesKyyeu = [
    "assets/imagess/concept/couple/c1.jpg",
    "assets/imagess/concept/couple/c2.jpg",
    "assets/imagess/concept/couple/c3.jpg",
    "assets/imagess/concept/couple/c4.jpg",
    "assets/imagess/concept/couple/c5.jpg",
    "assets/imagess/concept/couple/c6.jpg",
    "assets/imagess/concept/couple/c7.jpg",
    "assets/imagess/concept/couple/c8.jpg",
    "assets/imagess/concept/couple/c9.jpg",
    "assets/imagess/concept/couple/c10.jpg",
    "assets/imagess/concept/couple/c11.jpg",
  ];

  const allImagesProfile = [
    "assets/imagess/concept/profile/p1.jpg",
    "assets/imagess/concept/profile/p2.jpg",
    "assets/imagess/concept/profile/p3.jpg",
    "assets/imagess/concept/profile/p4.jpg",
    "assets/imagess/concept/profile/p5.jpg",
    "assets/imagess/concept/profile/p6.jpg",
    "assets/imagess/concept/profile/p7.jpg",
    "assets/imagess/concept/profile/p8.jpg",
    "assets/imagess/concept/profile/p9.jpg",
    "assets/imagess/concept/profile/p10.jpg",
    "assets/imagess/concept/profile/p11.jpg",
    "assets/imagess/concept/profile/p12.jpg",
    "assets/imagess/concept/profile/p13.jpg",
    "assets/imagess/concept/profile/p14.jpg",
    "assets/imagess/concept/profile/p15.jpg",
    "assets/imagess/concept/profile/p16.jpg",
    "assets/imagess/concept/profile/p17.jpg",
    "assets/imagess/concept/profile/p18.jpg",
    "assets/imagess/concept/profile/p18.jpg",
    "assets/imagess/concept/profile/p19.jpg",
    "assets/imagess/concept/profile/p19.jpg",
    "assets/imagess/concept/profile/p20.jpg",
    "assets/imagess/concept/profile/p21.jpg",
    "assets/imagess/concept/profile/p22.jpg",
  ];

  const allImagesTetnc = [];

  const allImagesTetStu = [];

  const allImagesNangtho = [
    "assets/imagess/concept/nangtho/nt1.jpg",
    "assets/imagess/concept/nangtho/nt2.jpg",
    "assets/imagess/concept/nangtho/nt3.jpg",
    "assets/imagess/concept/nangtho/nt4.jpg",
    "assets/imagess/concept/nangtho/nt5.jpg",
    "assets/imagess/concept/nangtho/nt6.jpg",
    "assets/imagess/concept/nangtho/nt7.jpg",
    "assets/imagess/concept/nangtho/nt8.jpg",
    "assets/imagess/concept/nangtho/nt9.jpg",
    "assets/imagess/concept/nangtho/nt10.jpg",
    "assets/imagess/concept/nangtho/nt11.jpg",
    "assets/imagess/concept/nangtho/nt12.jpg",
    "assets/imagess/concept/nangtho/nt13.jpg",
    "assets/imagess/concept/nangtho/nt14.jpg",
    "assets/imagess/concept/nangtho/nt15.jpg",
    "assets/imagess/concept/nangtho/nt16.jpg",
    "assets/imagess/concept/nangtho/nt17.jpg",
    "assets/imagess/concept/beauty/b2.jpg",
    "assets/imagess/concept/nangtho/nt18.jpg",
    "assets/imagess/concept/nangtho/nt19.jpg",
    "assets/imagess/concept/nangtho/nt20.jpg",
    "assets/imagess/concept/nangtho/nt21.jpg",
    "assets/imagess/concept/nangtho/nt22.jpg",
    "assets/imagess/concept/nangtho/nt23.jpg",
    "assets/imagess/concept/nangtho/nt24.jpg",
    "assets/imagess/concept/nangtho/nt25.jpg",
    "assets/imagess/concept/beauty/b4.jpg",
    "assets/imagess/concept/nangtho/nt26.jpg",
    "assets/imagess/concept/nangtho/nt27.jpg",
    "assets/imagess/concept/nangtho/nt28.jpg",
    "assets/imagess/concept/beauty/b3.jpg",
    "assets/imagess/concept/nangtho/nt29.jpg",
    "assets/imagess/concept/nangtho/nt30.jpg",
    "assets/imagess/concept/nangtho/nt31.jpg",
    "assets/imagess/concept/nangtho/nt32.jpg",
    "assets/imagess/concept/nangtho/nt33.jpg",
    "assets/imagess/concept/nangtho/nt34.jpg",
    "assets/imagess/concept/nangtho/nt35.jpg",
    "assets/imagess/concept/nangtho/nt36.jpg",
    "assets/imagess/concept/beauty/b1.jpg",
    "assets/imagess/concept/nangtho/nt37.jpg",
    "assets/imagess/concept/nangtho/nt38.jpg",
    "assets/imagess/concept/nangtho/nt39.jpg",
    "assets/imagess/concept/beauty/b6.jpg",
    "assets/imagess/concept/nangtho/nt40.jpg",
    "assets/imagess/concept/nangtho/nt41.jpg",
    "assets/imagess/concept/nangtho/nt42.jpg",
    "assets/imagess/concept/beauty/b5.jpg",
  ];

  // Number of images to load at once
  // const imagesPerLoad = 8;

  // Track current index
  // let currentIndex = 0;

  // Reference to the car list container
  const tetnc = document.getElementById("photo-gallery-tet");
  // const tetstu = document.getElementById("photo-gallery-tet-stu");
  const sinhnhat = document.getElementById("photo-gallery-sinhnhat");
  const couple = document.getElementById("photo-gallery-couple");
  const profile = document.getElementById("photo-gallery-profile");
  // const beauty = document.getElementById("photo-gallery-beauty");
  const nangtho = document.getElementById("photo-gallery-nangtho");
  const kyyeu = document.getElementById("photo-gallery-kyyeu");

  // Load images function
  function createImageFragment(images, container) {
    const fragment = document.createDocumentFragment();
    images.forEach((image, index) => {
      const col = document.createElement("div");

      col.innerHTML = `
        <div class="gallery-item">
            <img  src="${image}" alt="Image ${index + 1}">
        </div>`;
      col
        .querySelector("img")
        .addEventListener("click", () => openModal(image));
      fragment.appendChild(col);
    });
    if (fragment) {
      container.appendChild(fragment);
    }
  }

  // Sử dụng lại
  createImageFragment(allImagesTets, tetnc);
  // createImageFragment(allImagesTetS, tetstu);
  createImageFragment(allImagesSN, sinhnhat);
  createImageFragment(allImagesCouple, couple);
  createImageFragment(allImagesProfile, profile);
  // createImageFragment(allImagesBeauty, beauty);
  createImageFragment(allImagesNangtho, nangtho);
  createImageFragment(allImagesKyyeu, kyyeu);

  // Initial load (only the first set of images)

  // Dropdown
  // Lấy phần tử dropdown

  // Close modal when clicking close button
});
function openModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");

  modal.style.display = "flex";
  modalImage.src = imageSrc;
}

document
  .querySelector(".dropdown-toggle")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    const dropdownMenu = this.nextElementSibling; // Lấy menu dropdown

    // Đóng tất cả các dropdown khác (nếu cần)
    document.querySelectorAll(".dropdown-menu-custom").forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.remove("show");
      }
    });

    // Toggle trạng thái hiển thị của menu hiện tại
    dropdownMenu.classList.toggle("show");
  });

// Đóng menu dropdown khi click ra ngoài
document.addEventListener("click", function (event) {
  const isClickInside = event.target.closest(".dropdown");
  if (!isClickInside) {
    document.querySelectorAll(".dropdown-menu-custom").forEach((menu) => {
      menu.classList.remove("show");
    });
  }
});

const closeDropdown = document.querySelector(".close-dropdown");
closeDropdown.addEventListener("click", () => {
  console.log("1aadd");

  document.getElementById("dropdown-menu-custom").style.display = "none";
});

const closeButton = document.querySelector(".modal .close");
closeButton.addEventListener("click", () => {
  document.getElementById("image-modal").style.display = "none";
});

// Close modal when clicking outside of the image
window.addEventListener("click", (event) => {
  const modal = document.getElementById("image-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// custonm
// Get all featured images

//load more

// Data for all images
