
import { useState } from "react";
import QuoteBox from "./components/QuoteBox";

function App() {

  const [color, setColor]=useState("#e11d74")

  return (
    <div className="App" style={{backgroundColor:color}}>
      <div className="container">
            <QuoteBox setColor={setColor} color={color}/>
      </div>
    </div>
  );
}

export default App;
