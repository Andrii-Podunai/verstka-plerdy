const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1140: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// function myFunction(x) {
//   if (x.matches) {
//     console.log(swiper.slidesPerView);
//     swiper.slidesPerView = 3;
//   } else {
//     swiper.slidesPerView = 4;
//   }
// }

// var x = window.matchMedia("(min-width: 1200px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction);
//modal
var modal = document.getElementById("myModal");

var btn = document.getElementsByClassName("myBtn");

var span = document.getElementsByClassName("close")[0];

btn[0].onclick = function () {
  modal.style.display = "block";
};

btn[1].onclick = function () {
  modal.style.display = "block";
};
btn[2].onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// validation

const contact = document.getElementById("contact");
contact.addEventListener("click", (e) => {
  e.preventDefault();
  let vameVal = document.getElementById("vameVal").value;
  let txtPhone = document.getElementById("txtPhone").value;
  let text;
  let textPhone;
  if (vameVal === "") {
    text = "Error";
    document.getElementById("demo").innerHTML = text;
    document.querySelector(".form__button").style.margin = "21px auto";
    document.getElementById("vameVal").style.borderColor = "red";
  } else {
    text = "";
    document.getElementById("demo").innerHTML = text;
    document.querySelector(".form__button").style.margin = "34px auto";
    document.getElementById("vameVal").style.borderColor = "#d5d5d6";
  }
  if (txtPhone === "") {
    ("margin: 21px auto;");
    textPhone = "Error";
    document.getElementById("demo-phone").innerHTML = textPhone;
    document.querySelector(".form__button").style.margin = "21px auto";
    document.getElementById("txtPhone").style.borderColor = "red";
  } else {
    textPhone = "";
    document.getElementById("demo-phone").innerHTML = textPhone;
    document.querySelector(".form__button").style.margin = "34px auto";
    document.getElementById("txtPhone").style.borderColor = "#d5d5d6";
  }
});

//menu
document.addEventListener("DOMContentLoaded", nav);
function nav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".main-nav");
  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}
