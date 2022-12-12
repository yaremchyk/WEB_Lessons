import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Michael Jackson</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Головне
            </Link>
          </li>
          <li>
            <Link className="link" to="7090/">
              70-90
            </Link>
          </li>
          <li>
            <Link className="link" to="9000/">
              90-00
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
