import React,{useState} from 'react'
import './index.css';
function App() {

  const [result,setResult]=useState("");

  const handleClick = (e)=>{
    setResult(result.concat(e.target.name))
  }

  const handleClear =()=>{
    setResult("")
  }


  const handleBack =()=>{
    setResult(result.slice(0,-1))
  }

  const calculate =()=>{
    try{

      setResult(eval(result).toString())

    }catch(err){
      setResult("Error")
    }
  }

  return (
    <div className='calc-container'>
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center align-items-center'>
              <div className='col-md-4 cards'>

                     <div className='mb-3 d-flex'>
                          <input className='form-control' type="text"  value={result}/>
                          <button className='btn cancel-btn' onClick={handleBack}><i class="fa-solid fa-delete-left"></i></button>
                     </div>
                     
                     <div className='btn-1'>      
                            <button className='btn clear' onClick={handleClear}>clear</button>
                            <button className='btn' name='9' onClick={handleClick}>9</button>
                            <button className='btn' name='8' onClick={handleClick}>8</button>
                            <button className='btn' name='7' onClick={handleClick}>7</button>
                            <button className='btn' name='6' onClick={handleClick}>6</button>
                            <button className='btn' name='5' onClick={handleClick}>5</button>
                            <button className='btn' name='4' onClick={handleClick}>4</button>
                            <button className='btn' name='3' onClick={handleClick}>3</button>
                            <button className='btn' name='2' onClick={handleClick}>2</button>
                            <button className='btn' name='1' onClick={handleClick}>1</button>
                            <button className='btn' name='0' onClick={handleClick}>0</button> 
                            <button className='btn' name='.' onClick={handleClick}>.</button>
                            <button className='btn' name='+' onClick={handleClick}>+</button>
                            <button className='btn' name='-' onClick={handleClick}>-</button>
                            <button className='btn' name='*' onClick={handleClick}>*</button>
                            <button className='btn' name='/' onClick={handleClick}>/</button>
                            <button className='btn' name='%' onClick={handleClick}>%</button>
                            <button className='btn equal' onClick={calculate}>=</button>
                      </div> 
                           

                     </div>
              </div>
            </div>
        </div>
  )
}

export default App