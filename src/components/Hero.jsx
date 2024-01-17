import "../App.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Welcome to my Foopie Store!</h1>
        <p>
          Foopie is a delicious combination of food and pie or dessert that you
          never tried before
        </p>
        <a href="#explore" className="btn hero-btn">
          explore Foopies
        </a>
      </div>
    </section>
  );
};

export default Hero;
