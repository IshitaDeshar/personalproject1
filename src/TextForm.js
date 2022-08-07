import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("upperc ase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("upperc ase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        // console.log("upperc ase was clicked" + text);
        let newText = '';
        setText(newText)
    }

    // const handleBoldClick = () => {
    //     // // console.log("upperc ase was clicked" + text);
    //     // let newText = ;
    //     // setText(newText)
        
    // }
    

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //Right way to change the state

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control bg-success text-black bg-opacity-25" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear Text</button>
                {/* <button className="btn btn-success mx-2" onClick={handleBoldClick}>Bold Text</button> */}
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} <strong>words</strong> <br /> {text.length} <strong>Characters</strong></p>
                <p>{0.008 * text.split(" ").length} <strong>Minutes Read</strong></p>
            </div>
            <h1 className="pre mx-2">Preview</h1>
            <div className="mb-3">
                <textarea className="form-control bg-success text-black bg-opacity-25 mx-2" value={text} onChange={handleOnChange} id="preview" rows="8"></textarea>
            </div>
            {/* <p>{text}</p> */}
        </>
    )
    }
