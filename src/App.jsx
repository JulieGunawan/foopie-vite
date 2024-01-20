import { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Selections from "./components/Selections";
import FoopieList from "./components/FoopieList";
import Object from "./components/Object";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="foopieStore">
      <Navbar />
      <Hero />
      <About />
      <Selections />
      <FoopieList />
      <Footer />
    </div>
  );
}

export default App;
