import React from 'react'

const Button = ({type,className,text}) => {
  return (
    <div>
      <button type={type}
      className={className}
      >{text}</button>
    </div>
  )
}

export default Button
