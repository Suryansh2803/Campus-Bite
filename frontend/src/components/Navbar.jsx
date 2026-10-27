
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <span className="brand-icon">🍴</span>
        <span className="brand-name">CanteenX</span>
      </a>

      <div className="navbar-links">
        <a href="/" className="nav-link active">
          Home
        </a>

        <a href="#menu" className="nav-link">
          Menu
        </a>

        <a href="#orders" className="nav-link">
          My Orders
        </a>
      </div>

      <button className="cart-button" type="button">
        🛍️ Cart <span className="cart-count">0</span>
      </button>
    </nav>
  );
}

export default Navbar;
