import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img
      src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
      className="h-25 p-2"
      alt="logo"
      width="100px"
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-blue-300 border rounded-b-2xl shadow-2xl mb-5">
      <Title />
      <p className="py-10">{isOnline ? "✅ Online" : "🔴 Offline"}</p>
      <ul className="flex py-10 mr-5">
        <li className="px-2 hover:bg-blue-400 rounded-2xl text-slate-600">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 hover:bg-blue-400 rounded-2xl text-slate-600">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-2 hover:bg-blue-400 rounded-2xl text-slate-600">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2 hover:bg-blue-400 rounded-2xl text-slate-600">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="px-2">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
