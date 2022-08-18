import React, { useState } from 'react'

export default function TextForm (props) {
  const handleUpClick =()=> {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleExtraSpaces=()=> {
    let newText= text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const handleCopy =()=> {
    let text= document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const handleLoClick =()=> {
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handleFirstLetter = ()=> {
          let words= text.split(" ");
          for(let i=0; i<words.length; i++)
          {
            words[i]= words[i].charAt(0).toUpperCase() + words[i].slice(1);
          }
          let newText= words.join(" ");
          setText(newText)
    }
  
  const handleOnChange = (event)=> {
    setText(event.target.value)
  }
  
  const [text, setText] = useState("");
   
  return (
    <>
     <div className='Container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}> Convert to UpperCase </button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}> Convert to LowerCase </button>
<button className='btn btn-primary mx-2' onClick={handleCopy}> Text Copy </button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces}> Remove Extra Spaces </button>
<button className='btn btn-primary mx-2' onClick={handleFirstLetter}> Capitalize first letter </button>
    </div>
    <div className='Container my-3'>
      <h1> Your text summary </h1>
        <p> {text.split(" ").length -1} words and {text.length} characters </p>
        <p> {0.008*text.split(" ").length} Minutes read </p>
    </div>
    </>
   
  )
}
