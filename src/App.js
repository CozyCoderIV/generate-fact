import './App.css';
import Axios from "axios";
import { useState, useEffect } from 'react';

// // function used to fetch data from an API   (inefficient)
// fetch("https://catfact.ninja/fact")
//  .then((resp) => resp.json())
//  .then((data) => {
//   console.log(data);
// }); 

// javascript library -> axios makes getting data from API's easier

function App() {
  const [catFact, setCatFact] = useState("");
  const generateFact = () => {
    let newFact = ""
    Axios.get("https://catfact.ninja/fact").then((resp) => {
      newFact = resp.data.fact;
      setCatFact(newFact);
    })
  }

  useEffect(()=>{
    generateFact();
  }, []);
  
  // // (inefficient) -> updates infinitely

  // Axios.get("https://catfact.ninja/fact").then((resp) => {
  //   // console.log(resp.data);
  //   setCatFact(resp.data.fact);
  // })


  return (
    <div className="App">
      <button id="gen_button" onClick={generateFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
