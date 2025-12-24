import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="navbar">
        <h1>MyApp</h1>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Register</Link>
        </div>
      </div>

    </>
  );
};

export default Hero;
