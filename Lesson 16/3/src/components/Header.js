import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Your Gallery</h1>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/">
              Головна
            </Link>
          </li>
          <li>
            <Link className="link" to="addphoto/">
              Додати фото
            </Link>
          </li>
          <li>
            <Link className="link" to="gallery/">
              Галерея
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
