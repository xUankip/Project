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



const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const searchTerm = searchInput.value.toLowerCase(); // Get search term and convert to lowercase

  // Search logic for entire page content (optional)
  // ... (implement search logic here)

  // Search within recipe card titles (example)
  const recipeCards = document.querySelectorAll('.list-group-item');
  for (const card of recipeCards) {
    const cardTitle = card.querySelector('h5').textContent.toLowerCase();
    if (cardTitle.includes(searchTerm)) {
      card.classList.add('search-highlight'); // Highlight matching cards
    } else {
      card.classList.remove('search-highlight'); // Remove highlight if not matching
    }
  }
});


