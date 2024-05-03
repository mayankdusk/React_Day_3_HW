import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container"></div>
      <h1 className="logo">Family Wellness</h1>
      <p className="logop">MESSAGE THERAPY</p>
      <ul className="list_nav">
        <li id="fix">
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#service">SERVICE</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
