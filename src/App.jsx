import "./styles.css";
import googlelogo from "./googlelogo_color_272x92dp.png";
import { useState } from "react";
import { InputWithButton } from "./components/InputWithButton.jsx";

export default function App() {
  const [searchWord, setSearchWord] = useState("");
  const onChangeSearchWord = (event) => setSearchWord(event.target.value);
  const onClickSearch = () => {
    console.log("Google検索", searchWord);
    if (searchWord === "") return;
    setSearchWord("");
  };
  return (
    <div className="App">
      <header>
        <nav className="container_header">
          <div className="left_header">
            <ol>
              <li className="crumb">
                <a href="#">Googleについて</a>
              </li>
              <li className="crumb">
                <a href="#">ストア</a>
              </li>
            </ol>
          </div>
          <div className="right_header">
            <ol>
              <li className="crumb">
                <a href="#">Gmail</a>
              </li>
              <li className="crumb">
                <a href="#">画像</a>
              </li>
            </ol>
          </div>
        </nav>
      </header>
      <body>
        <div className="img">
          <img id="img" src={googlelogo} />
        </div>
        <InputWithButton
          searchWord={searchWord}
          onChange={onChangeSearchWord}
          onClick={onClickSearch}
        />
      </body>
    </div>
  );
}
