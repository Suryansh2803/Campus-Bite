import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          YOUR CAMPUS FOOD, REIMAGINED
        </span>

        <h1>
          Good food.
          <br />
          <span>No long queues.</span>
        </h1>

        <p>
          Order your favourite campus meals online.
          Pay securely, track your order, and pick it
          up when it's ready.
        </p>

        <a href="#menu" className="hero-button">
          Order Now →
        </a>

        <div className="hero-note">
          <span>⚡</span>
          Skip the queue. Enjoy your break.
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
          alt="Freshly prepared food"
        />
        <div className="hero-badge">
          <span>🍽️</span>
          <div>
            <strong>Freshly made</strong>
            <p>Ready when you are</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;