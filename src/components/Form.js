import React , {useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState('Enter your text here');
    const changeUppercase = ()=>{
        console.log('clicked uppercase');
        let Str = text;
        Str = Str.toUpperCase();
        setText(Str);
        props.alertFun("Uppercase","success");

    }
    const onChangehandle = (event) =>{
    setText(event.target.value);

    }
    const reset = () =>{
        setText('');
    }
    const copy = ()=>{
      let vartext = document.getElementById('inputPassword5');
      vartext.select();
      navigator.clipboard.writeText(vartext.value);
    }
  return (
    <>
    <div className='container'>
      <label htmlFor="inputPassword5" className="form-label"><b>{props.heading}</b></label>
<input type="text" id="inputPassword5" rows="8" value={text} onChange={onChangehandle} className="form-control" aria-describedby="passwordHelpBlock"/>
<button disabled={text.length===0} className="btn btn-primary" onClick={changeUppercase}>Convert to uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2' type="reset" onClick={reset}>Reset</button>
<button disabled={text.length===0} className="btn btn-primary mx-2" onClick={copy}>Copy</button>

    </div>
    <div className="container my-3">
        {text.split(/\s+/).filter((element)=>{
          return element.length !== 0;
        }).length} words and {text.length} characters
        <div>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length * 0.008} minutes to read</div>
    </div>
    </>
  )
}
