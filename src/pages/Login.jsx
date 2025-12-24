import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../layouts/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(); // fake login
    navigate("/dashboard"); // redirect after login
  };

  return (
    <div className="auth">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>No account? <Link to="/signup">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
