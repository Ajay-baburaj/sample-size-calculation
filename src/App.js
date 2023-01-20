import './App.css';
import React,{useState} from 'react';

function App() {

  const [m1,setM1] = useState(0)
  const [m2,setM2] = useState(0)
  const [sd1,setSd1] = useState(0)
  const [sd2,setSd2] = useState(0)

  const [sdSquare,setSdSquare] = useState('')
  const [sampleSizeN,setSampleSizeN] = useState('')


  const handleCalculation =()=>{
    console.log(m1,m2,sd1,sd2)
    let sdSquareVal = (((sd1*sd1)+ (sd2*sd2))/2).toFixed(2)
    setSdSquare((sdSquareVal))
    let sampleSizeNVal = ((7.84*2*sdSquareVal)/((m1-m2)*(m1-m2))).toFixed(2)
    setSampleSizeN(sampleSizeNVal)
  }

  return (
    <div className="App">
      <h1 className='header'>Sample size N caculator</h1>
      <form>
      <div className="inputContainer">
          <label htmlFor="sd1">Enter M1 value</label>
          <input type='number' name='m1'className='form-input' onChange={(e)=>{
            setM1(e.target.value)
            console.log(e.target.value) }}/>
        </div>
        <div className="inputContainer">
          <label htmlFor="sd1">Enter M2 value</label>
          <input type='number' name='m2'className='form-input'onChange={(e)=>setM2(e.target.value)}/>
        </div>
        <div className="inputContainer">
          <label htmlFor="sd1">Enter SD1 value</label>
          <input type='number' name='sd1'className='form-input'onChange={(e)=>setSd1(e.target.value)}/>
        </div>
        <div className="inputContainer">
          <label htmlFor="sd1">Enter SD2 value</label>
          <input type='number' name='sd2' className='form-input'onChange={(e)=>setSd2(e.target.value)}/>
        </div>
       
      </form>
      <div className="answerContainer">
        <button onClick={handleCalculation} className="submit-button">calculate</button>
        { 
          sdSquare &&
          <h2 className='header'><span className="span">Sd square : </span>{sdSquare}</h2>
        }
        {
          sampleSizeN &&
        <h2 className='header'><span className="span">Sample size N : </span>{sampleSizeN}</h2>
        }
      </div>
    </div>
  );
}

export default App;
