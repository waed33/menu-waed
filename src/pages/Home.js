import styles from "../styles/home.css";
import pic1 from "../access/pic1.png";

function Home({ setPage }) {
  return (
    <div className="home">

      <img
        
  src={pic1}
  alt="Delicious Burger"
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