import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Міста України</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Усі міста
            </Link>
          </li>
          <li>
            <Link className="link" to="frsthalf/">
              Перша половина
            </Link>
          </li>
          <li>
            <Link className="link" to="sechalf/">
              Друга половина
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
