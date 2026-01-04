import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      {/* Navbar */}
      <nav className="hero-navbar">
        <h1 className="logo">GDG WEB PAGE</h1>
        <div className="nav-actions">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-btn">Get Started</Link>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="hero-content">
        <div className="hero-text">
          <h2>
          <span className="neon">WELCOME</span>
            
          </h2>
          <p>
            Experience a GDG dashboard with live analytics, interactive tools, and futuristic design.
            Mentorship,Everything you need to do to be part of the amazing team, Roadmaps, See upcoming and previous events, all in one extraordinary place.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="primary-btn">Create Account</Link>
            <Link to="/login" className="secondary-btn">Sign In</Link>
          </div>
        </div>

        {/* 3D Floating Cards */}
        <div className="hero-visual">
          <div className="card card-1"></div>
          <div className="card card-2"></div>
          <div className="card card-3"></div>
          <div className="card card-4"></div>
        </div>
      </section>

      {/* Particle Background */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
