const filterButtons = document.querySelectorAll(".menu-filter");
const menuCards = document.querySelectorAll(".menu-card");

function setActiveFilter(category) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.category === category;

    button.classList.toggle("bg-[#D97A2B]", isActive);
    button.classList.toggle("text-white", isActive);
    button.classList.toggle("bg-white", !isActive);
    button.classList.toggle("text-[#7A3D12]", !isActive);
  });

  menuCards.forEach((card) => {
    const matches = category === "all" || card.dataset.category === category;
    card.classList.toggle("hidden", !matches);
  });
}

if (filterButtons.length && menuCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFilter(button.dataset.category || "all");
    });
  });

  setActiveFilter("all");
}
