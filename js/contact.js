const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () => {
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});
window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    menu.style.display = "none";
    menuButton.style.display = "none";
  } else {
    menu.style.display = "block";
    menuButton.style.display = "block";
  }
});
