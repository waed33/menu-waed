import styles from "../styles/home.css";

function Home({ setPage }) {
  return (
    <div className="home">

      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
        alt="Restaurant"
        className="home-image"
      />

      <div className="home-content">

        <h1>Royal Taste</h1>

        <p>
          Experience premium flavors, fresh ingredients,
          and unforgettable dining.
        </p>

        <div className="home-buttons">

          <button onClick={() => setPage("menu")}>
            🍽 Menu
          </button>

          <button onClick={() => setPage("about")}>
            ℹ About
          </button>

          <button onClick={() => setPage("feedback")}>
            📞 Contact 
          </button>

        </div>

      </div>

    </div>
  );
}

export default Home;