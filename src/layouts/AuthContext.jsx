import { createContext, useContext, useState } from "react";
import sha256 from "crypto-js/sha256";

const AuthContext = createContext();

/* Predefined users (admins) */
const USERS = [
  {
    email: "admin@faizubg.com",
    passwordHash: sha256("admin123").toString(),
  },
];

export const AuthProvider = ({ children }) => {
  const [authed, setAuthed] = useState(
    localStorage.getItem("authed") === "true"
  );

  const login = (email, password) => {
    const hashedInput = sha256(password).toString();

    // users from localStorage (registered users)
    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const allUsers = [...USERS, ...storedUsers];

    const userExists = allUsers.find(
      (user) =>
        user.email === email &&
        user.passwordHash === hashedInput
    );

    if (userExists) {
      setAuthed(true);
      localStorage.setItem("authed", "true");
      localStorage.setItem("userEmail", userExists.email);
      return true;
    }

    return false;
  };

  const logout = () => {
    setAuthed(false);
    localStorage.removeItem("authed");
    localStorage.removeItem("userEmail");
  };

  return (
    <AuthContext.Provider value={{ authed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
