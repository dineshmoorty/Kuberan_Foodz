const dishesGrid = document.getElementById("dishes-grid");
const dishesFeedback = document.getElementById("cart-feedback");

function translate(key, params = {}, fallback = "") {
  if (window.KuberanI18n?.t) {
    return window.KuberanI18n.t(key, params);
  }

  return fallback || key;
}

function createDishCard(dish) {
  return `
    <article class="hover-lift overflow-hidden rounded-2xl bg-white shadow-lg">
      <img
        src="${dish.image}"
        alt="${dish.name}"
        class="h-56 w-full object-cover"
      />
      <div class="p-6">
        <div class="mb-3 flex items-start justify-between gap-4">
          <div>
            <p class="mb-1 text-sm font-semibold uppercase tracking-wide text-[#6FAF4F]">
              ${dish.category}
            </p>
            <h3 class="text-2xl font-bold text-[#7A3D12]">${dish.name}</h3>
          </div>
          <span class="rounded-full bg-[#FFF7ED] px-3 py-1 text-sm font-semibold text-[#D97A2B]">
            ${window.KuberanCart.formatPrice(dish.price)}
          </span>
        </div>
        <p class="mb-5 text-gray-700">${dish.description}</p>
        <button
          type="button"
          data-add-to-cart="${dish.id}"
          class="inline-flex w-full items-center justify-center rounded-full bg-[#6FAF4F] px-5 py-3 font-semibold text-white shadow-lg shadow-[#6FAF4F]/25 transition hover:bg-[#5aa64a]"
        >
          ${translate("button.add_to_cart", {}, "Add To Cart")}
        </button>
      </div>
    </article>
  `;
}

function showFeedback(message) {
  if (!dishesFeedback) return;

  dishesFeedback.textContent = message;
  dishesFeedback.classList.remove("opacity-0");
  dishesFeedback.classList.add("opacity-100");
  window.dispatchEvent(new Event("kuberan-translate-refresh"));

  window.clearTimeout(showFeedback.timeoutId);
  showFeedback.timeoutId = window.setTimeout(() => {
    dishesFeedback.classList.add("opacity-0");
    dishesFeedback.classList.remove("opacity-100");
  }, 1800);
}

function renderDishesPage() {
  if (!dishesGrid || !window.KuberanCart) return;
  dishesGrid.innerHTML = window.KuberanCart
    .getLocalizedDishes()
    .map(createDishCard)
    .join("");
  window.dispatchEvent(new Event("kuberan-translate-refresh"));
}

if (dishesGrid && window.KuberanCart) {
  renderDishesPage();

  dishesGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-to-cart]");
    if (!button) return;

    const dishId = button.getAttribute("data-add-to-cart");
    const dish = window.KuberanCart.getLocalizedDishById(dishId);
    if (!dish) return;

    window.KuberanCart.addToCart(dishId);
    showFeedback(
      translate(
        "dishes.feedback.added_to_cart",
        { name: dish.name },
        `${dish.name} added to cart`
      )
    );
  });

  window.addEventListener("kuberan-language-change", renderDishesPage);
}
