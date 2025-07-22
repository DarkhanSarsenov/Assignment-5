document.addEventListener("DOMContentLoaded", function () {
  const categoriesTitle = document.getElementById("categories-title");
  const categoriesContainer = document.getElementById("categories");

  categoriesTitle.innerHTML = "<h2>Our Categories</h2>";

  const categories = [
    { name: "Appetizers", short_name: "A" },
    { name: "Beverages", short_name: "B" },
    { name: "Desserts", short_name: "D" },
    { name: "Salads", short_name: "S" },
    { name: "Entrees", short_name: "E" }
  ];

  categories.forEach(category => {
    const tile = document.createElement("div");
    tile.className = "category-tile";
    tile.innerHTML = `<h2>${category.name}</h2><p>(${category.short_name})</p>`;
    categoriesContainer.appendChild(tile);
  });
});
