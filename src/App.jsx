import React, { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'
import Result from './Components/Result/Result';
const init_temp_val={
  curr_temp:0,
  unit:'celsius',
  res_temp:0
}
const App = () => {
  const [tempData,setTempData]=useState(init_temp_val);
  const [showRes,setShowRes]=useState(false)
  const temp_input_setter=(e)=>{
    setShowRes(false)
    const {name,value}=e.target;
    setTempData({
      ...tempData,[name]:value
    })
  }
  const temp_converter=(e)=>{
    e.preventDefault();
    let t=+tempData.curr_temp
     if(typeof(t)==='number'){
       if(tempData.unit==='fahrenheit'){
         let celsius=(t-32)*(5/9);
         setTempData({
           ...tempData,res_temp:celsius
         })
       }else{
        let fahrenheit=(t*(9/5))+32;
        setTempData({
          ...tempData,res_temp:fahrenheit
        })
       }
       setShowRes(true)
     }
     else alert('Please Enter Valid Temperature')
  }
  return (
    <div className='App'>
      <h2>Temperature Converter</h2>
      <Form 
      tempData={tempData}
      temp_input_setter={temp_input_setter}
      temp_converter={temp_converter}
      />
    {showRes && <Result tempData={tempData} />}
    </div>
  )
}

export default App