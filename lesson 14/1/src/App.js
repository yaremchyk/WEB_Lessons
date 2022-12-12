import Quote from "./components/Quote";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Quote
        text='"If you cannot do great things, do small things in a great way."'
        author="Napoleon Hill"
      />
    </div>
  );
}
