import "./App.css";
import "./util.js";

import { getEmotionById } from "./util.js";

function App() {
  return (
    <div className="App">
      <h1>폰트테스트</h1>
      <div>
        <img alt="감정1" src={getEmotionById(1)} />
        <img alt="감정1" src={getEmotionById(2)} />
        <img alt="감정1" src={getEmotionById(3)} />
        <img alt="감정1" src={getEmotionById(4)} />
        <img alt="감정1" src={getEmotionById(5)} />
      </div>
    </div>
  );
}

export default App;
