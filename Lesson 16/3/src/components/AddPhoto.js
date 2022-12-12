import { useState } from "react";

export default function AddPhoto(props) {
  const [input, setInput] = useState(props?.value ?? "");
  const [input2, setInput2] = useState(props?.value ?? "");
  const [input3, setInput3] = useState(props?.value ?? "");
  const [input4, setInput4] = useState(props?.value ?? "");
  const [input5, setInput5] = useState(props?.value ?? "");
  const [input6, setInput6] = useState(props?.value ?? "");

  const addPic = () => {
    props.photos.push({
      name: input,
      description: input2,
      genre: input3,
      author: input4,
      year: input5,
      img: input6
    });
  };

  return (
    <div class="addPhoto">
      <div>
        <span>Назва</span>
        <input
          type="text"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        ></input>
      </div>
      <div>
        <span>Опис</span>
        <input
          type="text"
          value={input2}
          onInput={(e) => setInput2(e.target.value)}
        ></input>
      </div>
      <div>
        <span>Жанр</span>
        <input
          type="text"
          value={input3}
          onInput={(e) => setInput3(e.target.value)}
        ></input>
      </div>
      <div>
        <span>Автор</span>
        <input
          type="text"
          value={input4}
          onInput={(e) => setInput4(e.target.value)}
        ></input>
      </div>
      <div>
        <span>Рік</span>
        <input
          type="number"
          value={input5}
          onInput={(e) => setInput5(e.target.value)}
        ></input>
      </div>
      <div>
        <span>Посилання</span>
        <input
          type="text"
          value={input6}
          onInput={(e) => setInput6(e.target.value)}
        ></input>
      </div>
      <div>
        <button id="styled-button" onClick={addPic}>
          Додати
        </button>
      </div>
    </div>
  );
}
