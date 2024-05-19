import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was Clicked: "+ text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    //console.log("UpperCase was Clicked: "+ text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase!", "success");

  };
  const handleClear = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!", "success");

  };

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");

  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized Case!", "success");

  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");

  };

  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords;

    setText(newText);
    props.showAlert("Text Reversed!", "success");

  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert("Downloading Stared!", "success");

  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent == "Speak") {
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML = "Speak")) {
        window.speechSynthesis.cancel();
      }
    }
  };

  const [text, setText] = useState("Enter Text Here");
  // text = "new text" Wrong Way to change the Text
  // setText("new text"); Correct way to change the text
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalize}>
          Convert to Sentence Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={reversed}>
          Reverse Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={downloadTxtFile}>
          Download Text
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
          id="toggle"
        >
          Speak
        </button>
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text to Preview Here"}</p>
      </div>
    </>
  );
}
