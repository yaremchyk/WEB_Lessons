import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./components/Main";
import FirstArticle from "./components/7090";
import SecondArticle from "./components/9000";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles.css";

export default function App() {
  // code...

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="7090" element={<FirstArticle />} />
          <Route path="9000" element={<SecondArticle />} />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
