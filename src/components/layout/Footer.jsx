import "./Footer.css";
function Footer({ owner }) {
  return <footer className="footer"><p>© {new Date().getFullYear()} {owner}</p></footer>;
}
export default Footer;
