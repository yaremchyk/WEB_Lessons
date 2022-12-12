import CitiesList from "./components/CitiesList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles.css";
import Header from "./components/Header";

const cities = [
  {
    name: "Київ",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/%D0%91%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0_%D0%B2%D1%83%D0%BB.%2C_10_DSC_8398.JPG/1280px-%D0%91%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0_%D0%B2%D1%83%D0%BB.%2C_10_DSC_8398.JPG"
  },
  {
    name: "Сімферополь",
    img:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT2d8r0Vezuf79ZOGzclNq-ZvjpPjEkZxTG4L-WPx9ZGr9LXUDa5f1R8klorX2w4pbK"
  },
  {
    name: "Вінниця",
    img:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT7CW0uYKWTRZ9RQHwAkjU-xa6uzB_HAXz8g3qF7luK8E2FSMjTVYRTFb88BN8LaPTm"
  },
  {
    name: "Луцьк",
    img:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS_DIBeY_xMjt7Vrn44H_v00bGDzPc4KFOE4Lz9ywUt-lZ7GQst9zqCo5EacOp013LH"
  },
  {
    name: "Дніпро",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Dnipropetrovsk_view_2015_tov-tob.jpg"
  },
  {
    name: "Донецьк",
    img: "https://i.ytimg.com/vi/W9Stw1xrkOU/maxresdefault.jpg"
  },
  {
    name: "Житомир",
    img:
      "https://zt.20minut.ua/img/cache/news_new_m/news/0021/09/2008014-chomu-same-zhitomir-legendi-pro-pohodzhennya-nazvi-mista.jpeg?hash=2020-11-20-12-01-07"
  },
  {
    name: "Ужгород",
    img:
      "https://prokarpaty-tour.info/wp-content/uploads/uzhgorod-castle-from-above-ukraine-2.jpg"
  },
  {
    name: "Запоріжжя",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg/1280px-%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg"
  },
  {
    name: "Івано-Франківськ",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ratush-01.jpg/1280px-Ratush-01.jpg"
  },
  {
    name: "Кропивницький",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/P1480854_%D0%B2%D1%83%D0%BB._%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0_%D0%9F%D0%B5%D1%80%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%B0_%28%D0%9A._%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0%29%2C_33.jpg/1280px-P1480854_%D0%B2%D1%83%D0%BB._%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0_%D0%9F%D0%B5%D1%80%D1%81%D0%BF%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%B0_%28%D0%9A._%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0%29%2C_33.jpg"
  }
];

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CitiesList cities={cities} />} />
          <Route
            path="frsthalf"
            element={<CitiesList cities={cities.slice(5)} />}
          />
          <Route
            path="sechalf"
            element={<CitiesList cities={cities.slice(6, 10)} />}
          />
          <Route path="*" element={<h1>Page Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
