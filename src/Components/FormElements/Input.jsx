import React from 'react'

const Input = ({label,id,type="text",...props}) => {
  console.log('props :>> ', props); 
   return (
    <div className='content-field'> 
      {label && <label htmlFor={id}>{label}</label>}
      <input  
        type={type} {...props} 
      ></input>
    </div>
  )
}

export default Input
