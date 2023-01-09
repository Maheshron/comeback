import React, { useRef, useEffect, useState } from 'react';

import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { xml } from "@codemirror/lang-xml";
import { css } from "@codemirror/lang-css";

export const Editor1 = (props) => {
  const editor = useRef();
  var {value,onChange,language} = props;

 
	const [code, setCode] = useState("");

    function handleChange(markup){
     
      onChange(markup);
     console.log(code);
    }

  const onUpdate = EditorView.updateListener.of((v) => {
      setCode(v.state.doc.toString());
    
     handleChange(v.state.doc.toString());
     
     
  });
  
  

  useEffect(() => {
   


    const state = EditorState.create({
      doc: `${language}`,
      extensions: [
        
        keymap.of([defaultKeymap, indentWithTab]),
        
        javascript(),xml(),css(),
        onUpdate
      ],
    });
    
    
    const view = new EditorView({ state, parent: editor.current });
   
    
    
    return () => {
      view.destroy();
    };
  

   
  }, []);
 

  return <div className="code-mirror-wrapper" ref={editor}></div>;
};



export default Editor1
