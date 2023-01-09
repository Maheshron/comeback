import React,{useEffect, useState} from "react";
import Editor1 from "./Editor1";


function App() {

   const [html,setHtml] = useState("");
   const [css,setCss]   = useState("");
   const [js,setJs]     = useState("");
  const  [srcDoc,setSrcDoc] = useState("");
useEffect(()=> {
  const timeout = setTimeout(() => {
setSrcDoc(`
<html>
<body>
${html}
</body>

<style>
${css}
</style>


<script>${js}</script>

</html>



`)

  },500)
  console.log("App Component");
  
  return () => clearTimeout(timeout);
},[html,css,js])
  
 
  
  return (
    <>
  
      <div className="pane top-pane">
      <Editor1
        value={html}
        onChange={(m) => {setHtml(m)}}
        language="html"
        />
        <Editor1
        value={css}
        onChange={setCss}
        language="css"
        />
        <Editor1
        value={js}
        onChange={setJs}
        language="js"
        />
      
        
      </div>
      <div className="pane">
        <iframe
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
        srcDoc={srcDoc}
        />
      </div>
    </>
  );
}

export default App;
