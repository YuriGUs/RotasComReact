import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <h2>CABECA</h2>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/sobre">About</Link>
        <Link to="/contato">Contact</Link>
      </div>
    </header>
  );
}
