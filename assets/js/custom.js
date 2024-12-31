$(document).ready(function () {
  "use strict";

  document.getElementById("registerBtn").addEventListener("click", function () {
    // Lấy dữ liệu từ các trường
    const concept = document.querySelector("select").value;
    const fullName = document.querySelector('input[name="fullName"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const date = document.querySelector('input[name="date"]').value;
  
    // Gửi dữ liệu tới server
    const data = {
      concept,
      fullName,
      phone,
      date
    };
  
    fetch("/.netlify/functions/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
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



  const allImagesCouple = [
    "assets/images/concept/couple/c1.png",
    "assets/images/concept/couple/c2.png",
    "assets/images/concept/couple/c3.png",
    "assets/images/concept/couple/c4.png",
    "assets/images/concept/couple/c5.png",
    "assets/images/concept/couple/c6.png",
    "assets/images/concept/couple/c7.png",
    "assets/images/concept/couple/c8.jpg",
    "assets/images/concept/couple/c9.jpg",
    "assets/images/concept/couple/c10.png", 
    "assets/images/concept/couple/c11.jpg",
  ];
  
  
  const allImagesSN = [
    "assets/images/concept/sinhnhat/sn1.jpg",
    "assets/images/concept/sinhnhat/sn2.jpg",
    "assets/images/concept/sinhnhat/sn3.jpg",
    "assets/images/concept/sinhnhat/sn4.jpg",
    "assets/images/concept/sinhnhat/sn5.jpg",
    "assets/images/concept/sinhnhat/sn6.png",
    "assets/images/concept/sinhnhat/sn7.png",
    "assets/images/concept/sinhnhat/sn8.png",
    "assets/images/concept/sinhnhat/sn9.png",
    "assets/images/concept/sinhnhat/sn10.png", 
    "assets/images/concept/sinhnhat/sn12.png",
    "assets/images/concept/sinhnhat/sn13.png",
    "assets/images/concept/sinhnhat/sn14.png",
    "assets/images/concept/sinhnhat/sn15.png",
    "assets/images/concept/sinhnhat/sn16.png",
    "assets/images/concept/sinhnhat/sn17.png",
    "assets/images/concept/sinhnhat/sn18.png",
    "assets/images/concept/sinhnhat/sn19.png",
    "assets/images/concept/sinhnhat/sn20.png",
    "assets/images/concept/sinhnhat/sn21.png",
    "assets/images/concept/sinhnhat/sn22.jpg",
    "assets/images/concept/sinhnhat/sn23.jpg",
    "assets/images/concept/sinhnhat/sn24.jpg",
    "assets/images/concept/sinhnhat/sn25.jpg",
    "assets/images/concept/sinhnhat/sn26.jpg",
    "assets/images/concept/sinhnhat/sn27.jpg",
    "assets/images/concept/sinhnhat/sn28.jpg",
    "assets/images/concept/sinhnhat/sn29.png",
  ];
  
  const allImagesBeauty = [
    "assets/images/concept/beauty/b1.png",
    "assets/images/concept/beauty/b2.png",
    "assets/images/concept/beauty/b3.png",
    "assets/images/concept/beauty/b4.png",
    "assets/images/concept/beauty/b5.png",
    "assets/images/concept/beauty/b6.png",
  ];
  
  const allImagesKyyeu = [
    "assets/images/concept/couple/c1.png",
    "assets/images/concept/couple/c2.png",
    "assets/images/concept/couple/c3.png",
    "assets/images/concept/couple/c4.png",
    "assets/images/concept/couple/c5.png",
    "assets/images/concept/couple/c6.png",
    "assets/images/concept/couple/c7.png",
    "assets/images/concept/couple/c8.jpg",
    "assets/images/concept/couple/c9.jpg",
    "assets/images/concept/couple/c10.png", 
    "assets/images/concept/couple/c11.jpg",
  ];
  
  const allImagesProfile = [
    "assets/images/concept/profile/p1.png",
    "assets/images/concept/profile/p2.png",
    "assets/images/concept/profile/p3.png",
    "assets/images/concept/profile/p4.png",
    "assets/images/concept/profile/p5.png",
    "assets/images/concept/profile/p6.png",
    "assets/images/concept/profile/p7.png",
    "assets/images/concept/profile/p8.png",
    "assets/images/concept/profile/p9.png",
    "assets/images/concept/profile/p10.png", 
    "assets/images/concept/profile/p11.png",
    "assets/images/concept/profile/p12.png",
    "assets/images/concept/profile/p13.png",
    "assets/images/concept/profile/p14.png",
    "assets/images/concept/profile/p15.png",
    "assets/images/concept/profile/p16.png",
    "assets/images/concept/profile/p17.png",
    "assets/images/concept/profile/p18.jpg",
    "assets/images/concept/profile/p18.png",
    "assets/images/concept/profile/p19.png",
    "assets/images/concept/profile/p19.jpg",
    "assets/images/concept/profile/p20.png",
    "assets/images/concept/profile/p21.png",
    "assets/images/concept/profile/p22.png",
  ];
  
  const allImagesTetnc = [
    
  ];
  
  const allImagesTetStu = [
   
  ];
  
  const allImagesNangtho = [
   "assets/images/concept/nangtho/nt1.png",
    "assets/images/concept/nangtho/nt2.png",
    "assets/images/concept/nangtho/nt3.png",
    "assets/images/concept/nangtho/nt4.png",
    "assets/images/concept/nangtho/nt5.png",
    "assets/images/concept/nangtho/nt6.png",
    "assets/images/concept/nangtho/nt7.png",
    "assets/images/concept/nangtho/nt8.png",
    "assets/images/concept/nangtho/nt9.png",
    "assets/images/concept/nangtho/nt10.png", 
    "assets/images/concept/nangtho/nt11.png", 
    "assets/images/concept/nangtho/nt12.png",
    "assets/images/concept/nangtho/nt13.png",
    "assets/images/concept/nangtho/nt14.jpg",
    "assets/images/concept/nangtho/nt15.png",
    "assets/images/concept/nangtho/nt16.png",
    "assets/images/concept/nangtho/nt17.png",
    "assets/images/concept/nangtho/nt18.jpg",
    "assets/images/concept/nangtho/nt19.png",
    "assets/images/concept/nangtho/nt20.png",
    "assets/images/concept/nangtho/nt21.jpg",
    "assets/images/concept/nangtho/nt22.jpg",
    "assets/images/concept/nangtho/nt23.png",
    "assets/images/concept/nangtho/nt24.png",
    "assets/images/concept/nangtho/nt25.png",
    "assets/images/concept/nangtho/nt26.png",
    "assets/images/concept/nangtho/nt27.png",
    "assets/images/concept/nangtho/nt28.png",
    "assets/images/concept/nangtho/nt29.png",
    "assets/images/concept/nangtho/nt30.png",
    "assets/images/concept/nangtho/nt31.png",
    "assets/images/concept/nangtho/nt32.png",
    "assets/images/concept/nangtho/nt33.png",
    "assets/images/concept/nangtho/nt34.png",
    "assets/images/concept/nangtho/nt35.png",
    "assets/images/concept/nangtho/nt36.png",
    "assets/images/concept/nangtho/nt37.png",
    "assets/images/concept/nangtho/nt38.png",
    "assets/images/concept/nangtho/nt39.png",
    "assets/images/concept/nangtho/nt40.png",
    "assets/images/concept/nangtho/nt41.png",
    "assets/images/concept/nangtho/nt42.png",
  
  ];
  
  // Number of images to load at once
  // const imagesPerLoad = 8;
  
  // Track current index
  // let currentIndex = 0;
  
  // Reference to the car list container
  const tetnc = document.getElementById("photo-gallery-tet-nc");
  const tetstu = document.getElementById("photo-gallery-tet-stu");
  const sinhnhat = document.getElementById("photo-gallery-sinhnhat");
  const couple = document.getElementById("photo-gallery-couple");
  const profile = document.getElementById("photo-gallery-profile");
  const beauty = document.getElementById("photo-gallery-beauty");
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
      col.querySelector("img").addEventListener("click", () => openModal(image));
      fragment.appendChild(col);
    });
    if (fragment) {
      container.appendChild(fragment);
    }
  }
  
  // Sử dụng lại
  createImageFragment(allImagesTetnc, tetnc);
  createImageFragment(allImagesTetStu, tetstu);
  createImageFragment(allImagesSN, sinhnhat);
  createImageFragment(allImagesCouple, couple);
  createImageFragment(allImagesProfile, profile);
  createImageFragment(allImagesBeauty, beauty);
  createImageFragment(allImagesNangtho, nangtho);
  createImageFragment(allImagesKyyeu, kyyeu);
  
  // Initial load (only the first set of images)
  
  function openModal(imageSrc) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
  
    modal.style.display = "flex";
    modalImage.src = imageSrc;
  }
  
  
  
  // Dropdown
  // Lấy phần tử dropdown
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
  
  
  
  
  // Close modal when clicking close button
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

});

// custonm
// Get all featured images

//load more

// Data for all images
