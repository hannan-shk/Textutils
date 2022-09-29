import React, {useState} from 'react';



function Textarea(props){

    const handleUpClick = () =>{

        let newText = text.toUpperCase();

        setText(newText)
        props.showAlert2('Converted to uppercase!','success');
    }

    const handleOnChange = (e) =>{

        setText(e.target.value)

    }

    const handlelowClick = () =>{
        let new2Text = text.toLowerCase();
        setText(new2Text);
        props.showAlert2('Converted to lowercase!','success');
    }

    const clearClick = () =>{
        let new3Text = '';
        setText(new3Text);
        props.showAlert2('Textarea is cleared','success');
    }

    const urlClick = () =>{
        props.showAlert2('URL button has been clicked','success');
    }

    const handleSpaces = () =>{
        let new4Text = text.split(/[ ]+/);
        setText(new4Text.join(" "));
        props.showAlert2('Extra spaces have been removed','success');
    }

    // const copyText = () =>{
    //     let new5Text = document.getElementById('myBox');
    //     new5text.select();
    //     new5Text.setSelectionRange(0,9999);
    //     navigator.clipboard.writeText(new5text.value);
    //     props.showAlert2("Text has been copied",'success');
    // }

    // const capital = (work) =>{
    //    const lower = work.toLowerCase();
    //    setText(lower.charAt(0).toUpperCase() + lower.slice(1));
    // }

    const [text, setText] = useState('');

    return(
        <>
        <div className='container-fluid' style={{color: props.mode2==='dark'?'white':'#091f42'}}>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea placeholder={props.place} type="text" onChange={handleOnChange} 
        style={{backgroundColor: props.mode2==='dark'?'#0e0e0f':'white', color: props.mode2==='dark'?'white':'#091f42'}} 
        className="form-control border border-dark" value={text} rows='10' id="myBox"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert your text in UpperCase</button>
      <button className="btn btn-success mx-4" onClick={handlelowClick}>Convert your text in LowerCase</button>
      <button className="btn btn-secondary " onClick={clearClick}>Click to clear text</button>
      <button className="btn btn-info mx-4" onClick={urlClick}>Make URL</button>
      <button className="btn btn-warning " onClick={handleSpaces}>Remove extra spaces</button>
      {/* <button className="btn btn-warning " onClick={copyText}>Copy your text</button> */}
      {/* <button className="btn btn-warning " onClick={capital}>Capital.</button> */}
      </div>
      <div className="container my-4" style={{color: props.mode2==='dark'?'white':'#091f42'}}>
        <h1>Your text summary</h1>
        <h3>{text.split(" ").length-1} words and {text.length} letters</h3>
        {/* <h3>{0.008 * text.split(' ').length} Minutes to read</h3> */}
        <h2>Preview</h2>
        <h4>{text.length > 0 ? text:'Enter something to preview here'}</h4>
      </div>
      </>
    )
}

export default Textarea;
