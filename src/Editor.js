import React, { useState, useContext } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/snippets/xml";
import "ace-builds/src-noconflict/theme-github";

import { ThemeContext } from "./Contexts/ThemeContext";
import "./Editor.css";

const Editor = () => {
    //Destructuring
  const { isLight, light, dark, ToggleTheme, btnLight, btnDark } = useContext(ThemeContext);

  //for backGround
  const theme = isLight ? light : dark;

  //fpr buttons
  const btnTheme = isLight ? btnDark : btnLight;

  //to download file in .txt format
  const TextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "download.txt";
    document.body.appendChild(element); 
    element.click();
  };

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

  const [editorCode, setEditorCode] = useState(`<!DOCTYPE html>
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
  };

  const run = () => {
    setCode(editorCode);
  };

  return (
    <div className="editor" style={{backgroundColor: theme.bg,
        color: theme.syntax}}>
      <div className="editor__navbar" style={{backgroundColor: theme.bg,
        color: theme.syntax}}>
        <button
          onClick={run}
          style={{ backgroundColor: btnTheme.bg, color: btnTheme.syntax }}
        >
          Run
        </button>
        <button
          onClick={TextFile}
          style={{ backgroundColor: btnTheme.bg, color: btnTheme.syntax }}
        >
          Save
        </button>
        <button
          onClick={ToggleTheme}
          style={{ backgroundColor: btnTheme.bg, color: btnTheme.syntax }}
        >
          {isLight?"Dark Theme":"Light Theme"}
        </button>
      </div>
      <div className="editor__body">
        <div className="editor__aceEditor">
          <AceEditor
            showPrintMargin={false}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: theme.bg,
              color: theme.syntax,
            }}
            mode="xml"
            id="codeSnippet"
            value={editorCode}
            onChange={onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
            fontSize={14}
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
