import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddPhoto from "./components/AddPhoto";
import Gallery from "./components/Gallery";
import "./styles.css";

const photos = [
  {
    name: "Мона Ліза",
    description: "Найвідоміша картина світу",
    genre: "Портрет",
    author: "Леонардо да Вінчі",
    year: "1503-1505",
    img:
      "https://uploads0.wikiart.org/00339/images/leonardo-da-vinci/mona-lisa-c-1503-1519.jpg!Large.jpg"
  }
];

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="addphoto" element={<AddPhoto photos={photos} />} />
          <Route path="gallery" element={<Gallery photos={photos} />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
