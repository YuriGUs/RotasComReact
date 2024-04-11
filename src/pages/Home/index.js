import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <h1>Pagina Home</h1>

      <Link to="/sobre">Sobre</Link>
    </div>
  );
}
