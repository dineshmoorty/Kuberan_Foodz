const cartItemsContainer = document.getElementById("cart-items");
const cartEmptyState = document.getElementById("cart-empty");
const cartSummary = document.getElementById("cart-summary");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartGrandTotal = document.getElementById("cart-grand-total");
const cartLayout = document.getElementById("cart-layout");
const cartMainColumn = document.getElementById("cart-main-column");
const clearCartButton = document.getElementById("clear-cart");
const orderWhatsAppLink = document.getElementById("order-whatsapp");
const orderWhatsAppNote = document.getElementById("order-whatsapp-note");
const customerNameInput = document.getElementById("customer-name");
const customerMobileInput = document.getElementById("customer-mobile");
const customerAddressInput = document.getElementById("customer-address");
const customerFormNote = document.getElementById("customer-form-note");

function translate(key, params = {}, fallback = "") {
  if (window.KuberanI18n?.t) {
    return window.KuberanI18n.t(key, params);
  }

  return fallback || key;
}

function getCustomerDetails() {
  return {
    name: customerNameInput?.value || "",
    mobile: customerMobileInput?.value || "",
    address: customerAddressInput?.value || "",
  };
}

function resetCustomerForm() {
  if (customerNameInput) customerNameInput.value = "";
  if (customerMobileInput) customerMobileInput.value = "";
  if (customerAddressInput) customerAddressInput.value = "";
}

function createCartItem(item) {
  return `
    <article class="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div class="flex flex-col gap-5 p-5 sm:flex-row">
        <img
          src="${item.image}"
          alt="${item.name}"
          class="h-36 w-full rounded-2xl object-cover sm:w-40"
        />
        <div class="flex-1">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p class="mb-1 text-sm font-semibold uppercase tracking-wide text-[#6FAF4F]">
                ${item.category}
              </p>
              <h3 class="text-2xl font-bold text-[#7A3D12]">${item.name}</h3>
              <p class="mt-2 text-gray-700">${item.description}</p>
            </div>
            <p class="text-lg font-bold text-[#D97A2B]">
              ${window.KuberanCart.formatPrice(item.lineTotal)}
            </p>
          </div>
          <div class="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div class="inline-flex items-center rounded-full bg-[#FFF7ED] p-1">
              <button
                type="button"
                data-quantity-action="decrease"
                data-item-id="${item.id}"
                class="inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-[#7A3D12] transition hover:bg-white"
                aria-label="${translate(
                  "cart.quantity.decrease",
                  {},
                  "Decrease quantity"
                )}"
              >
                -
              </button>
              <span class="min-w-12 px-3 text-center font-semibold text-[#7A3D12]">
                ${item.quantity}
              </span>
              <button
                type="button"
                data-quantity-action="increase"
                data-item-id="${item.id}"
                class="inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-[#7A3D12] transition hover:bg-white"
                aria-label="${translate(
                  "cart.quantity.increase",
                  {},
                  "Increase quantity"
                )}"
              >
                +
              </button>
            </div>
            <button
              type="button"
              data-remove-item="${item.id}"
              class="inline-flex items-center justify-center rounded-full border border-[#D97A2B] px-4 py-2 font-semibold text-[#D97A2B] transition hover:bg-[#FFF7ED]"
            >
              ${translate("cart.remove", {}, "Remove")}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCartPage() {
  if (!cartItemsContainer || !window.KuberanCart) return;

  const items = window.KuberanCart.getDetailedCartItems();
  const subtotal = window.KuberanCart.getCartSubtotal();
  const customer = getCustomerDetails();
  const hasCustomerDetails =
    customer.name.trim() &&
    customer.mobile.trim() &&
    customer.address.trim();
  const whatsAppUrl = window.KuberanCart.getWhatsAppOrderLink(customer);
  const hasWhatsAppNumber = Boolean(window.KuberanCart.getWhatsAppNumber());

  if (!items.length) {
    cartItemsContainer.innerHTML = "";
    cartEmptyState?.classList.remove("hidden");
    cartSummary?.classList.add("hidden");
    cartLayout?.classList.remove("xl:grid-cols-[1.7fr_0.9fr]");
    cartMainColumn?.classList.add("mx-auto", "w-full", "max-w-2xl");
    cartEmptyState?.classList.add(
      "flex",
      "min-h-[55vh]",
      "flex-col",
      "items-center",
      "justify-center"
    );
    window.dispatchEvent(new Event("kuberan-translate-refresh"));
    return;
  }

  cartEmptyState?.classList.add("hidden");
  cartSummary?.classList.remove("hidden");
  cartLayout?.classList.add("xl:grid-cols-[1.7fr_0.9fr]");
  cartMainColumn?.classList.remove("mx-auto", "w-full", "max-w-2xl");
  cartEmptyState?.classList.remove(
    "flex",
    "min-h-[55vh]",
    "flex-col",
    "items-center",
    "justify-center"
  );
  cartItemsContainer.innerHTML = items.map(createCartItem).join("");

  if (cartSubtotal) {
    cartSubtotal.textContent = window.KuberanCart.formatPrice(subtotal);
  }

  if (cartGrandTotal) {
    cartGrandTotal.textContent = window.KuberanCart.formatPrice(subtotal);
  }

  if (orderWhatsAppLink) {
    orderWhatsAppLink.href = whatsAppUrl || "#";
    orderWhatsAppLink.classList.toggle("pointer-events-none", !whatsAppUrl);
    orderWhatsAppLink.classList.toggle("opacity-60", !whatsAppUrl);
  }

  if (orderWhatsAppNote) {
    orderWhatsAppNote.textContent = hasWhatsAppNumber
      ? hasCustomerDetails
        ? translate(
            "cart.whatsapp.ready",
            {},
            "Tap the button to send this order directly through WhatsApp."
          )
        : translate(
            "cart.whatsapp.fill_details",
            {},
            "Please fill in customer name, mobile number, and address."
          )
      : translate(
          "cart.whatsapp.activate",
          {},
          "Add your WhatsApp number in scripts/cart.js to activate direct order sending."
        );
  }

  if (customerFormNote) {
    customerFormNote.textContent = hasCustomerDetails
      ? translate(
          "cart.customer.ready",
          {},
          "Customer details are ready to send with this order."
        )
      : translate(
          "cart.customer.fill",
          {},
          "Fill name, mobile number, and address before placing the order."
        );
    customerFormNote.classList.toggle("text-red-500", !hasCustomerDetails);
    customerFormNote.classList.toggle("text-gray-500", Boolean(hasCustomerDetails));
  }

  window.dispatchEvent(new Event("kuberan-translate-refresh"));
}

if (cartItemsContainer && window.KuberanCart) {
  renderCartPage();

  cartItemsContainer.addEventListener("click", (event) => {
    const quantityButton = event.target.closest("[data-quantity-action]");
    const removeButton = event.target.closest("[data-remove-item]");

    if (quantityButton) {
      const itemId = quantityButton.getAttribute("data-item-id");
      const action = quantityButton.getAttribute("data-quantity-action");
      const cartItem = window.KuberanCart.getCart().find((item) => item.id === itemId);
      if (!cartItem) return;

      const nextQuantity =
        action === "increase" ? cartItem.quantity + 1 : cartItem.quantity - 1;

      window.KuberanCart.updateItemQuantity(itemId, nextQuantity);
      renderCartPage();
      return;
    }

    if (removeButton) {
      const itemId = removeButton.getAttribute("data-remove-item");
      window.KuberanCart.removeFromCart(itemId);
      renderCartPage();
    }
  });

  clearCartButton?.addEventListener("click", () => {
    window.KuberanCart.clearCart();
    renderCartPage();
  });

  orderWhatsAppLink?.addEventListener("click", (event) => {
    const customer = getCustomerDetails();
    const whatsAppUrl = window.KuberanCart.getWhatsAppOrderLink(customer);
    if (!whatsAppUrl) {
      event.preventDefault();
      renderCartPage();
      return;
    }

    event.preventDefault();
    window.open(whatsAppUrl, "_blank", "noopener,noreferrer");
    window.KuberanCart.clearCart();
    resetCustomerForm();
    renderCartPage();
  });

  [customerNameInput, customerMobileInput, customerAddressInput].forEach((field) => {
    field?.addEventListener("input", renderCartPage);
  });

  window.addEventListener("kuberan-language-change", renderCartPage);
}
