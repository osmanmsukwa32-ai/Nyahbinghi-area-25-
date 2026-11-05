const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const languageSelect = document.getElementById("languageSelect");

// Hamburger menu
menuToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Tsekani menu mukasankha tsamba
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Kusintha chilankhulo
function changeLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-ny][data-en]").forEach(function (element) {
    element.textContent =
      language === "en"
        ? element.dataset.en
        : element.dataset.ny;
  });
}

languageSelect.addEventListener("change", function () {
  changeLanguage(languageSelect.value);
});

// Chaka chapano
document.getElementById("year").textContent =
  new Date().getFullYear();
