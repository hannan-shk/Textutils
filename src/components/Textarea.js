import React,{useState} from 'react';



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

    const copyText = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert2("Text has been copied",'success');
    }

    // const capital = (work) =>{
    //    const lower = work.toLowerCase();
    //    setText(lower.charAt(0).toUpperCase() + lower.slice(1));
    // }

    const [text, setText] = useState('');

    return(
        <>
        <div className='container-fluid' style={{color: props.mode2==='dark'?'white':'#091f42'}}>
            <h1 className='my-2 mb-4 disabled={text.length===0}'>{props.heading}</h1>
        <div className="mb-3">
        <textarea placeholder={props.place} type="text" onChange={handleOnChange} 
        style={{backgroundColor: props.mode2==='dark'?'#0e0e0f':'white', color: props.mode2==='dark'?'white':'#091f42'}} 
        className="form-control border border-dark" value={text} rows='10' id="myBox"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert your text in UpperCase</button>
      <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handlelowClick}>Convert your text in LowerCase</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={clearClick}>Click to clear text</button>
      <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={urlClick}>Make URL</button>
      <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleSpaces}>Remove extra spaces</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={copyText}>Copy your text</button>
      {/* <button className="btn btn-warning " onClick={capital}>Capital.</button> */}
      </div>
      <div className="container my-4" style={{color: props.mode2==='dark'?'white':'#091f42'}}>
        <h1>Your text summary</h1>
        <h3>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} 
        words and {text.length} letters</h3>
        
        <h1>Preview</h1>
        <h4>{text.length > 0 ? text:'Nothing to preview'}</h4>
      </div>
      </>
    )
}

export default Textarea;
