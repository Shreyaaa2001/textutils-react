import React,{useState} from 'react'

export default function TextForm(props) {
     const handleUpClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to UpperCase","success")

    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText);
    }
    const handleReverse=()=>{
        let newText=text.replace("I","We")
        setText(newText);

    }
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
    }
    function countWords(text){
      let wc = text.split(" ").length;
      text.split(" ").forEach((word) => {
          if(!word.length){
              wc -= 1;  
          }
      });

      return wc;
  }

    const[text,setText]=useState('');
    //setText("newText");
  return (
<>
  <div className="mb-3" style={{color:props.Mode==='dark'?'white':'black'}}>
    <h3>{props.heading}</h3>
    <textarea className="form-control" id="exampleInputEmail1" value={text} style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:props.Mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"/>
     {/* <textarea value={text}></textarea>  */}  
  </div>
  <div>
       <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
       <button type="submit" className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lowecase</button>
       <button type="submit" className="btn btn-danger mx-2" onClick={handleReverse}>I to we</button>
       <button className='btn btn-secondary mx-2' onClick={downloadTxtFile}>Download Text</button>
  </div>
    <div className='container my-2' style={{color:props.Mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{countWords(text)} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} seconds required</p>
        <h2>
            Preview
        </h2>
        <p>{text.length>0?text:"Enter something in the above box to preview it here"}</p>


    </div>
    </>
  )
}
