
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/menu";
import Feedback from "./pages/Contact";
import Footer from "./components/Footer";

function App() {

  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar />

      <Home setPage={setPage} />

      {page === "about" && <About />}

      {page === "menu" && <Menu />}

      {page === "feedback" && <Feedback />}

      <Footer />
    </>
  );
}

export default App;