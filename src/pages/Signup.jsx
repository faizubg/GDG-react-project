import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sha256 from "crypto-js/sha256";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    
    const exists = users.some((u) => u.email === email);
    if (exists) {
      alert("Email already registered. Please login.");
      navigate("/login");
      return;
    }

    const newUser = {
      name,
      email,
      passwordHash: sha256(password).toString(),
    };

    users.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    setSuccess(`Thank you ${name}, your registration was successful!`);

    // redirect to login after short delay
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="auth">
      <div className="auth-box">
        <h2>Register</h2>

        {success && (
          <p style={{ color: "green", marginBottom: "10px" }}>
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>

        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
