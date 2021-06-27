import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/snippets/xml";
import "ace-builds/src-noconflict/theme-github";
import "./Editor.css";

const Editor = () => {
  const  TextFile = () => {
        const element = document.createElement("a");
        const file = new Blob([code], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "download.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      }
  const [code, setCode] = useState(`<!DOCTYPE html>
  <html>
  <head>
  <title>Page Title</title>
  <style>
  body {
    background-color: black;
    text-align: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
  </style>
  </head>
  <body>
  
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
  <p>Edit the code in the window to the left, and click "Run" to view the result.</p>
  <img src="avatar.png" alt="Avatar" style="width:200px">
  
  </body>
  </html>`);

  const [editorCode,setEditorCode] = useState(`<!DOCTYPE html>
  <html>
  <head>
  <title>Page Title</title>
  <style>
  body {
    background-color: black;
    text-align: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
  </style>
  </head>
  <body>
  
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
  <p>Edit the code in the window to the left, and click "Run" to view the result.</p>
  <img src="avatar.png" alt="Avatar" style="width:200px">
  
  </body>
  </html>`);
  const onChange = (value) => {
    
      setEditorCode(value);
  }

  const run = ()=>{
    setCode(editorCode);
  }

  return (
    <div className="editor">
      <div className="editor__navbar">
        <button onClick={run}>Run</button>
        <button onClick={TextFile}>Save</button>
      </div>
      <div className="editor__body">
        <div className="editor__aceEditor">
          <AceEditor
            style={{ width: "100%", height: "100%" }}
            mode="xml"
            id="codeSnippet"
            value={editorCode}
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div className="editor__output">
          <iframe title="Output" srcDoc={code}></iframe>
        </div>
      </div>
    </div>
  );
};

export default Editor;
