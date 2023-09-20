//header toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const activeClass = "is-show";

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle(activeClass); // Thay đổi class khi nhấp vào menu-toggle
    });

    window.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove(activeClass); // Ẩn menu khi bấm bên ngoài
      }
    });
  } else {
    console.error("Không tìm thấy phần tử '.menu-toggle' hoặc '.menu'.");
  }
});

// Active Nav Link on Scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header ul li a nav");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        if (
          links.parentElement.querySelector("a").getAttribute("href") ===
          `#${id}`
        ) {
          links.classList.add("active");
        }
      });
    }
  });
};
const header = document.querySelector(".header");

// Sử dụng sự kiện 'scroll' để kiểm tra khi trang được cuộn
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    // Khi cuộn xuống, thay đổi nền của header thành màu trắng mờ
    header.style.backgroundColor = "rgba(255, 255, 255, 1)";
    header.style.boxShadow = "0px 1px 10px #999";
  } else {
    // Khi cuộn lên đầu trang, xóa nền màu trắng
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
});

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

//topDeal
function showDivs(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

//about us
function currentDivAbout(n) {
  showDivsAbout((slideIndex = n));
}

function showDivsAbout(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesAbout");
  var dots = document.getElementsByClassName("aboutImageSmall");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-opacity-off";
}

// tour
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const seeMoreButton = document.getElementById("seeMore");
  let startIndex = 3;
  let endIndex = 6;

  function showCards(start, end) {
    for (let i = start; i < end; i++) {
      if (cards[i]) {
        cards[i].style.display = "block";
      }
    }
  }

  function checkIfNoContent() {
    const hiddenCards = Array.from(cards)
      .slice(startIndex, endIndex)
      .filter((card) => {
        return card.style.display === "none";
      });

    if (hiddenCards.length === 0) {
      seeMoreButton.textContent = "No Content";
      seeMoreButton.classList.add("noContent");
    }
  }

  showCards(0, 3);

  if (seeMoreButton) {
    seeMoreButton.addEventListener("click", (e) => {
      e.preventDefault();
      showCards(startIndex, endIndex);
      startIndex += 3;
      endIndex += 3;
      checkIfNoContent();
    });
  }
});

//modal
document.getElementById("btnLogin").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".modal").style.display = "none";
});
