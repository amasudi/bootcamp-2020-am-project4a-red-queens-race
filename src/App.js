import React from "react";
import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";
import { Background1 } from "./components/Background1";
import { Background2 } from "./components/Background2";
import { Foreground1 } from "./components/Foreground1";
import { Foreground2 } from "./components/Foreground2";
import { AliceRedQueen } from "./components/AliceRedQueen";
function App() {
  return (
    <GlobalProvider>
      <div className="wrapper">
        <div className="sky"></div>
        <div className="earth">
          <div id="red-queen_and_alice">
            <AliceRedQueen />
          </div>
        </div>
        <Foreground1 />
        <Foreground2 />
        <Background1 />
        <Background2 />
      </div>
    </GlobalProvider>
  );
}
export default App;
