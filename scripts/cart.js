const KUBERAN_CART_KEY = "kuberan-foodz-cart";
const KUBERAN_WHATSAPP_NUMBER = "+919488270932";

const KUBERAN_TAMIL_DISH_NAMES = {
  "idly": "இட்லி",
  "dosai": "தோசை",
  "ven-pongal": "வெண் பொங்கல்",
  "chappathi": "சப்பாத்தி",
  "tomato-rice": "தக்காளி சாதம்",
  "lemon-rice": "எலுமிச்சை சாதம்",
  "malli-rice": "மல்லி சாதம்",
  "mushroom-biriyani": "மஷ்ரூம் பிரியாணி",
  "chutney": "சட்னி",
  "sambar": "சாம்பார்",
  "idlyBatter": "இட்லி மாவு 1/2 கப்",
  "idlyDosaiBatter": "இட்லி/தோசை மாவு 1 கப்",
};

const KUBERAN_DISHES = [
  {
    id: "idly",
    name: "Idly / இட்லி",
    nameKey: "dish.idly.name",
    category: "Tiffen",
    categoryKey: "category.tiffen",
    image: "../assets/dishes/idly.jpg",
    description: "Soft and fluffy idly made fresh for a light and comforting meal.",
    descriptionKey: "dish.idly.description",
    price: 8,
  },
  // {
  //   id: "dosai",
  //   name: "Dosai / தோசை",
  //   nameKey: "dish.dosai.name",
  //   category: "Tiffen",
  //   categoryKey: "category.tiffen",
  //   image: "../assets/dishes/dosai.jpg",
  //   description: "Golden and crispy dosai with classic South Indian flavor and texture.",
  //   descriptionKey: "dish.dosai.description",
  //   price: 20,
  // },
  // {
  //   id: "ven-pongal",
  //   name: "Ven Pongal /  பொங்கல்",
  //   nameKey: "dish.ven_pongal.name",
  //   category: "Tiffen",
  //   categoryKey: "category.tiffen",
  //   image: "../assets/dishes/venpongal.jpg",
  //   description: "Creamy ven pongal with pepper and ghee for a warm homestyle taste.",
  //   descriptionKey: "dish.ven_pongal.description",
  //   price: 40,
  // },
  // {
  //   id: "chappathi",
  //   name: "Chappathi / சப்பாத்தி",
  //   nameKey: "dish.chappathi.name",
  //   category: "Tiffen",
  //   categoryKey: "category.tiffen",
  //   image: "../assets/dishes/chappathi.jpg",
  //   description: "Soft chappathi prepared fresh and perfect with kurma or side dishes.",
  //   descriptionKey: "dish.chappathi.description",
  //   price: 30,
  // },
  // {
  //   id: "tomato-rice",
  //   name: "Tomato Rice / தக்காளி சாதம்",
  //   nameKey: "dish.tomato_rice.name",
  //   category: "Rice",
  //   categoryKey: "category.rice",
  //   image: "../assets/dishes/tomato_rice.jpg",
  //   description: "Tangy tomato rice packed with masala flavor and home-style comfort.",
  //   descriptionKey: "dish.tomato_rice.description",
  //   price: 40,
  // },
  // {
  //   id: "lemon-rice",
  //   name: "Lemon Rice / எலுமிச்சை சாதம்",
  //   nameKey: "dish.lemon_rice.name",
  //   category: "Rice",
  //   categoryKey: "category.rice",
  //   image: "../assets/dishes/lemon_rice.jpg",
  //   description: "Fresh and zesty lemon rice with a bright and refreshing taste.",
  //   descriptionKey: "dish.lemon_rice.description",
  //   price: 40,
  // },
  // {
  //   id: "malli-rice",
  //   name: "Malli Rice / மல்லி சாதம்",
  //   nameKey: "dish.malli_rice.name",
  //   category: "Rice",
  //   categoryKey: "category.rice",
  //   image: "../assets/dishes/malli_rice.jpg",
  //   description: "Fragrant malli rice with herb freshness and a gentle spice note.",
  //   descriptionKey: "dish.malli_rice.description",
  //   price: 40,
  // },
  // {
  //   id: "mushroom-biriyani",
  //   name: "Mushroom Biriyani / மஷ்ரூம் பிரியாணி",
  //   nameKey: "dish.mushroom_biriyani.name",
  //   category: "Biriyani",
  //   categoryKey: "category.biriyani",
  //   image: "../assets/dishes/mushroom_biriyani.jpg",
  //   description: "Aromatic mushroom biriyani layered with masala and long-grain rice.",
  //   descriptionKey: "dish.mushroom_biriyani.description",
  //   price: 40,
  // },
    {
    id: "chutney",
    name: "Chutney / சட்னி",
    nameKey: "dish.chutney.name",
    category: "Side Dish",
    categoryKey: "category.side_dish",
    image: "../assets/dishes/chutney.jpg",
    description: "Flavorful chutney made with fresh ingredients, perfect for enhancing your meals.",
    descriptionKey: "dish.chutney.description",
    price: 10,
  },
    {
    id: "sambar",
    name: "Sambar / சாம்பார்",
    nameKey: "dish.sambar.name",
    category: "Side Dish",
    categoryKey: "category.side_dish",
    image: "../assets/dishes/saambar.jpg",
    description: "Hearty sambar simmered with lentils, vegetables, and a blend of spices for a comforting accompaniment.",
    descriptionKey: "dish.sambar.description",
    price: 10,
  },
   {
    id: "idlyBatter",
    name: "Batter 1/2 cup / மாவு 1/2 கப்",
    nameKey: "dish.idly_batter.name",
    category: "Tiffen",
    categoryKey: "category.tiffen",
    image: "../assets/dishes/Batter.jpg",
    description: "Aromatic idly batter made with handpicked ingredients and a perfect texture.",
    descriptionKey: "dish.idly_batter.description",
    price: 20,
  },
    {
    id: "idlyDosaiBatter",
    name: "Batter 1 cup / மாவு 1 கப்",
    nameKey: "dish.idly_batter.name",
    category: "Tiffen",
    categoryKey: "category.tiffen",
    image: "../assets/dishes/Batter.jpg",
    description: "Aromatic idly batter made with handpicked ingredients and a perfect texture.",
    descriptionKey: "dish.idly_batter.description",
    price: 40,
  },
];

function getDishById(id) {
  return KUBERAN_DISHES.find((dish) => dish.id === id) || null;
}

function getWhatsAppDishName(item) {
  return KUBERAN_TAMIL_DISH_NAMES[item.id] || item.name;
}

function translate(key, params = {}, fallback = "") {
  if (window.KuberanI18n?.t) {
    return window.KuberanI18n.t(key, params);
  }

  return fallback || key;
}

function getLocalizedDish(dish) {
  return {
    ...dish,
    name: translate(dish.nameKey, {}, dish.name),
    category: translate(dish.categoryKey, {}, dish.category),
    description: translate(dish.descriptionKey, {}, dish.description),
  };
}

function getLocalizedDishes() {
  return KUBERAN_DISHES.map(getLocalizedDish);
}

function getLocalizedDishById(id) {
  const dish = getDishById(id);
  return dish ? getLocalizedDish(dish) : null;
}

function getCart() {
  try {
    const rawCart = localStorage.getItem(KUBERAN_CART_KEY);
    const parsedCart = rawCart ? JSON.parse(rawCart) : [];
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
}

function saveCart(cartItems) {
  localStorage.setItem(KUBERAN_CART_KEY, JSON.stringify(cartItems));
  renderCartCount();
}

function addToCart(id) {
  const cartItems = getCart();
  const existingItem = cartItems.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ id, quantity: 1 });
  }

  saveCart(cartItems);
}

function updateItemQuantity(id, quantity) {
  const cartItems = getCart();
  const nextCart = cartItems
    .map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity };
    })
    .filter((item) => item.quantity > 0);

  saveCart(nextCart);
}

function removeFromCart(id) {
  const cartItems = getCart().filter((item) => item.id !== id);
  saveCart(cartItems);
}

function clearCart() {
  saveCart([]);
}

function getCartCount() {
  return getCart().reduce((total, item) => total + item.quantity, 0);
}

function getDetailedCartItems() {
  return getCart()
    .map((item) => {
      const dish = getDishById(item.id);
      if (!dish) return null;
      const localizedDish = getLocalizedDish(dish);

      return {
        ...localizedDish,
        quantity: item.quantity,
        lineTotal: dish.price * item.quantity,
      };
    })
    .filter(Boolean);
}

function getCartSubtotal() {
  return getDetailedCartItems().reduce((total, item) => total + item.lineTotal, 0);
}

function formatPrice(price) {
  const currency = translate("common.currency", {}, "Rs.");
  return `${currency} ${price}`;
}

function getWhatsAppNumber() {
  return KUBERAN_WHATSAPP_NUMBER.replace(/\D/g, "");
}

function getWhatsAppOrderLink(customer = {}) {
  const phoneNumber = getWhatsAppNumber();
  const items = getDetailedCartItems();
  const customerName = (customer.name || "").trim();
  const customerMobile = (customer.mobile || "").trim();
  const customerAddress = (customer.address || "").trim();

  if (
    !phoneNumber ||
    !items.length ||
    !customerName ||
    !customerMobile ||
    !customerAddress
  ) {
    return "";
  }

  const subtotal = getCartSubtotal();
  const lines = [
    "வணக்கம் குபேரன் ஃபுட்ஸ், நான் ஒரு ஆர்டர் செய்ய விரும்புகிறேன்.",
    "",
    "வாடிக்கையாளர் விவரங்கள்:",
    `பெயர்: ${customerName}`,
    `மொபைல்: ${customerMobile}`,
    `முகவரி: ${customerAddress}`,
    "",
    "ஆர்டர் விவரங்கள்:",
    ...items.map(
      (item, index) =>
        `${index + 1}. ${getWhatsAppDishName(item)} x ${item.quantity} - ${formatPrice(
          item.lineTotal
        )}`
    ),
    "",
    `மொத்தம்: ${formatPrice(subtotal)}`,
  ];

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function renderCartCount() {
  const count = getCartCount();

  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = String(count);
    badge.classList.toggle("hidden", count === 0);
  });
}

window.KuberanCart = {
  addToCart,
  clearCart,
  formatPrice,
  getCart,
  getCartCount,
  getCartSubtotal,
  getDetailedCartItems,
  getDishById,
  getLocalizedDish,
  getLocalizedDishById,
  getLocalizedDishes,
  getWhatsAppNumber,
  getWhatsAppOrderLink,
  removeFromCart,
  renderCartCount,
  updateItemQuantity,
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderCartCount);
} else {
  renderCartCount();
}

window.addEventListener("storage", renderCartCount);
