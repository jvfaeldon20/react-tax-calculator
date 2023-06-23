import React, { useState } from 'react'
import TaxRateSelector from './TaxRateSelector'

function TaxCalculator() {
const [income, setIncome]               =  useState(0)
const [errorMessage, setErrorMessage]   = useState("")
const [taxRate, setTaxRate]             = useState(0.10)
const [taxableIncome, setTaxableIncome] = useState(0)
const [showError, setShowError]         = useState(false)

// sets income input to income state
const handleIncomeInput = (e) => {
    setIncome(e.target.value )
}

// callback function for taxrate
const handleTaxChange = (value) => {
  setTaxRate(value)
}

// function for rounding value for income tax
const round = (num, decimalPlaces=0) =>{
  num = Math.round(num + "e" + decimalPlaces);
  return Number(num + "e" + -decimalPlaces);
}

// event function for income tax validation before computation 
const calculateIncomeTax = () => {
  if(isNaN(income)){
    setErrorMessage("Please input numbers only")
    setShowError(true) 
  }else if(income.length > 7){
    setErrorMessage("Please input 7 digits only")
    setShowError(true) 
  }else if(!income){
    setErrorMessage("Please input a valid income value")
    setShowError(true)
  }else{
    setShowError(false) 
    let val = income * taxRate
    setTaxableIncome(round(val, 2))
  }
}
  return (
    <div className='form-container'>
        <h1>Tax Calculator</h1>
        <h2>Tax Result: <span>P{taxableIncome}</span></h2>
        <label className='form-label'>Income</label>
        <input type="text" onChange={handleIncomeInput} className='form-input'/>
        <TaxRateSelector handleTaxChange={handleTaxChange}/>
        <p>
          <button onClick={calculateIncomeTax} className='form-button'>Calculate my Income Tax</button>
        </p>
        {showError && <span className='form-error-message'>{errorMessage}</span>}
    </div>
  )
}

export default TaxCalculator