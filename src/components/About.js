import React from 'react'

export default function About(props) {

  // const [myStyle,setStyle] = useState({
  //   color: 'black',
  //   backgroundColor:'white'
  // })

  let myStyle = {
    color: props.mode2 === 'dark'?'white':'#091f42',
    backgroundColor: props.mode2 === 'dark'?'#091f42':'white',
  }

  // const [btnText, setBtnText] = useState('Enable Dark Mode');
  // const [btnColor, setBthColor] = useState('dark');
  
  // const toggleStyle = () =>{
  //  if(myStyle.color == 'black'){
  //   setStyle({
  //     color: 'white',
  //     backgroundColor: 'black'
  //   })
  //   setBtnText("Enable Light Mode");
  //   setBthColor('light');
  //   props.showAlert2('About has turned in dark!','success');
  //  }else{
  //   setStyle({
  //     color: 'black',
  //     backgroundColor: 'white'
  //   })
  //   setBtnText("Enable Dark Mode");
  //   setBthColor('dark');
  //   props.showAlert2('About has turned in light!','success');
  //  }
  // }


  return (
    <div className='container-fluid' style={myStyle}>

     <h1 className='my-3'>About us:</h1>

        <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>

    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it work, character count or much more.
      </div>
    </div>
  </div>


  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant character count & word count for a given text . TextUtils reports the number of words and characters. thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>


  <div className="accordion-item" style={myStyle}f>
    <h2 className="accordion-header" id="headingThree">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       This word counter web based software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel documents, pdf document, essays, etc.
      </div>
    </div>
  </div>
</div>
{/* <div className='container-fluid'>
<button onClick={toggleStyle} className={`my-4 btn btn-${btnColor}`}>{btnText}</button>
</div> */}
    </div>
  )

}

