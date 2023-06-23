import React from 'react'

function TaxRateSelector({handleTaxChange}) {
const handleOnChange = (e) => {
    handleTaxChange(e.target.value)
}

  return (
    <div className='tax-rate'>
      <label className='form-label'>Tax Rate</label>
      <select className='form-dropdown' onChange={handleOnChange}>
          <option value="0.10">10%</option>
          <option value="0.15">15%</option>
          <option value="0.20">20%</option>
          <option value="0.30">30%</option>
      </select>
    </div>
  )
}

export default TaxRateSelector