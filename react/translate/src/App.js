import './App.css';
import { useEffect,useState } from "react";
import axios from "axios";
 
function App() {

const [options,setOptions] = useState([]);
const [to,setTo]  = useState('en');
const [from,setFrom] = useState('en');
const [input,setInput] = useState('');
const [output,setOutput] = useState('');


const translate = () => {
  const params = new URLSearchParams();
  params.append('q',input);
  params.append('source',from);
  params.append('target',to);
  params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

  axios.post("https://libretranslate.de/translate",params,{
    headers:{
      'accept':'application/json',
      'Content-Type':'application/x-www-form-urlencoded',
    },
  })
  .then(res => {
    setOutput(res.data.translatedText)
  })

}

useEffect(() => {
  axios.get("https://libretranslate.de/languages",{
    headers:{accept:'application/json'},
  })
  .then((res) => {
    console.log(res.data)
    setOptions(res.data)
  })
},[])

  return (
    <div className="App">
        <div>
          From ({from}) :
          <select onChange={(e) => setFrom(e.target.value)}>
            {options.map((opt) => (
              <option key={opt.code}>{opt.name}</option>
            ))}
          </select>
          To ({to}) :
          <select onChange={(e) => setTo(e.target.value) }>
            {
              options.map((opt) => (
                <option key={opt.code}> {opt.name}</option>
              ))
            }
          </select>

        </div>
        <div>
          <textarea cols="50" rows="8" value={input} onInput={(e) => setInput(e.target.value)}>

          </textarea>
        </div>
        <div>
          <textarea cols="50" rows="8" value={output}></textarea>
        </div>
        <div> <button onClick={() => translate()}>Translate</button></div>

    </div>
  );
}

export default App;
