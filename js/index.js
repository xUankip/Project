const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});
