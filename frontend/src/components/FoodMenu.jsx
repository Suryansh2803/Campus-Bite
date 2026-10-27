
import { useState } from "react";
import "./FoodMenu.css";

const foodItems = [
  {
    id: 1,
    name: "Classic Veg Sandwich",
    description: "Toasted bread, fresh vegetables & mint chutney",
    price: 60,
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80",
    tag: "STUDENT FAVOURITE",
  },
  {
    id: 2,
    name: "Crispy Veg Burger",
    description: "Golden veggie patty with lettuce & house sauce",
    price: 80,
    category: "Snacks",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    tag: "POPULAR",
  },
  {
    id: 3,
    name: "Classic Masala Dosa",
    description: "Crisp dosa served with chutney and sambar",
    price: 90,
    category: "Meals",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80",
    tag: "FRESHLY MADE",
  },
  {
    id: 4,
    name: "Cold Coffee",
    description: "Chilled, creamy coffee for your study break",
    price: 70,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80",
    tag: "CHILLED",
  },
  {
    id: 5,
    name: "Masala Chai",
    description: "Classic Indian tea brewed with aromatic spices",
    price: 20,
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=700&q=80",
    tag: "",
  },
  {
    id: 6,
    name: "Veg Fried Rice",
    description: "Wok-tossed rice with vegetables and light seasoning",
    price: 100,
    category: "Meals",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80",
    tag: "HEARTY MEAL",
  },
];

const categories = ["All", "Snacks", "Meals", "Beverages"];

function FoodMenu({ cartItems, setCartItems }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? foodItems
      : foodItems.filter(
          (item) => item.category === activeCategory
        );

  function handleAddToCart(food) {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...food, quantity: 1 }];
    });
  }

  return (
    <section className="food-menu" id="menu">
      <div className="menu-heading">
        <div>
          <p className="menu-eyebrow">MADE FOR YOUR CAMPUS DAYS</p>
          <h2>Something delicious.</h2>
          <p className="menu-subtitle">
            Good food, fair prices, and more time to enjoy your break.
          </p>
        </div>

        <p className="menu-item-count">
          {filteredItems.length} items
        </p>
      </div>

      <div className="category-filters" aria-label="Food categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-button ${
              activeCategory === category ? "selected" : ""
            }`}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="food-grid">
        {filteredItems.map((food) => (
          <article className="food-card" key={food.id}>
            <div className="food-image-wrap">
              <img
                className="food-image"
                src={food.image}
                alt={food.name}
                loading="lazy"
              />

              {food.tag && (
                <span className="food-tag">{food.tag}</span>
              )}
            </div>

            <div className="food-card-content">
              <div className="food-card-top">
                <span className="food-category">
                  {food.category}
                </span>
                <span className="food-price">₹{food.price}</span>
              </div>

              <h3>{food.name}</h3>
              <p className="food-description">
                {food.description}
              </p>

              <button
                type="button"
                className="add-to-cart-button"
                onClick={() => handleAddToCart(food)}
              >
                <span>+</span> Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FoodMenu;
