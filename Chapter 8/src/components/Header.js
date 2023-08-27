import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
      className="logo"
      alt="logo"
      width="100px"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
