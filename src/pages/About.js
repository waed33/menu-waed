
import styles from "../styles/about.css";


function About() {
  return (
    <section className="about-page">

      <div className="about-container">

        <div className="about-left">

          <span className="small-title">WHO WE ARE</span>

          <h1>
            Welcome To <span>Royal Taste</span>
          </h1>

          <p>
            Royal Taste is more than just a restaurant. We create unforgettable
            dining experiences by combining fresh ingredients, authentic recipes,
            and exceptional service.
          </p>

          <p>
            Every meal is prepared with passion to bring you the highest quality
            and the most delicious flavors.
          </p>

        </div>

        <div className="about-right">

          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
            alt="Restaurant"
          />

        </div>

      </div>

      <div className="about-cards">

        <div className="about-card">
          <h2>🍔 50+</h2>
          <p>Signature Dishes</p>
        </div>

        <div className="about-card">
          <h2>👨‍🍳 10+</h2>
          <p>Professional Chefs</p>
        </div>

        <div className="about-card">
          <h2>⭐ 4.9</h2>
          <p>Customer Rating</p>
        </div>

      </div>

    </section>
  );
}

export default About;