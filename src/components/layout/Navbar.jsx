import { Link } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <Link to="/">Home / Posts</Link>
      <Link to="/contact">Contact</Link>
      <button onClick={toggleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Mode</button>
    </nav>
  );
}
export default Navbar;
