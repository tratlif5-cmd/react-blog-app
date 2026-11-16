import Logo from "./Logo";
import Navbar from "./Navbar";
import "./Header.css";

function Header({ title }) {
  return (
    <header className="header" id="home">
      <div className="header__inner">
        <div className="header__brand">
          <Logo />
          <h1 className="header__title">{title}</h1>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
