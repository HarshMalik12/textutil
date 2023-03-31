import React, {useState} from 'react'
export default function TextForm(props)
{
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleClearClick = ()=>{
        let newText = ' ';
        setText(newText)
        props.showAlert("Text clear", "success")
    }
    const [text, setText] = useState('');
    // text = 'new text'; // Wrong way to change the state
    // setText("new text"); // Correct way
    return (
        <>
        <div className='conatiner' style={{color: props.mode==='dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" style={{backgroundColor: props.mode==='dark'? 'white' : 'black'}}>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey' : 'white',color: props.mode==='dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="conatiner my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview it here"}</p>
        </div>

        </>
    )
}
