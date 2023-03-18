import React, { useState } from "react";

export default function TextArea(props) {
  const HandleOnchange = (event) => {
    setText(event.target.value);
  };
  let MyStyle = {
    color: "black",
    backgroundColor: "white",
    border: "2px solid black",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px"
  };

  const HandleUpclick = () => {
    // console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  };
  const HandleLowclick = () => {
    // console.log('Lowercase was clicked');
    let newText = text.toLowerCase();
    setText(newText);
  };
  const HandleRemovespaces = () => {
    // console.log('Remove spaces was clicked');
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };
  const HandleFindAndReplace = () => {
    const find = prompt("Enter the text to find:");
    if (find === null) {
      return; // User canceled the prompt
    }
    const replace = prompt("Enter the replacement text:");
    if (replace === null) {
      return; // User canceled the prompt
    }
    // console.log('Find and Replace was clicked');
    let newText = text.replace(new RegExp(find, "g"), replace);
    setText(newText);
  };
  const handleRemoveDuplicates = () => {
    const lines = text.split("\n");
    const uniqueLines = [...new Set(lines)]; // Use Set to remove duplicates
    const newText = uniqueLines.join("\n");
    setText(newText);
  };
  const handleReverseString = () => {
    const reversedText = text.split("").reverse().join("");
    setText(reversedText);
    if (text.toLowerCase() === reversedText.toLowerCase()) {
      alert("Woah! It's a palindrome!");
    }
  };
  const countWords = (text) => {
    return text.trim().split(/\s+/).length;
  };

  const countCharacters = (text) => {
    return text.length;
  };
  const handleRemoveEmptyLines = () => {
    const filteredText = text
      .split("\n")
      .filter((line) => line.trim() !== "")
      .join("\n");
    setText(filteredText);
  };
  const HandleClearText = () => {
    setText("");
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={HandleOnchange}
          style={MyStyle}
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
        <button className="btn btn-primary my-3 " onClick={HandleUpclick}>
          CONVERT TO UPPERCASE
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={HandleLowclick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary my-3 " onClick={HandleRemovespaces}>
          RemovExtraSpaces
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={HandleFindAndReplace}
        >
          Find & Replace
        </button>
        <button
          className="btn btn-primary my-3 "
          onClick={handleRemoveDuplicates}
        >
          Remove Duplicate Lines
        </button>
        <button
          className="btn btn-primary my-3 mx-3"
          onClick={handleReverseString}
        >
          Reverse It
        </button>
        <button
          className="btn btn-primary my-3 "
          onClick={handleRemoveEmptyLines}
        >
          Remove Empty Lines
        </button>
        <button className="btn btn-primary my-3 " onClick={HandleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleCopyText}>
          Copy Text
        </button>
        <p>
          Word count: {countWords(text)}, Character count:{" "}
          {countCharacters(text)}
        </p>
        <p>
          Estimated time to read text : {0.008 * text.split(" ").length} minutes
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
