import React from 'react'

const Form = ({onSubmit,children,className}) => {
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default HTML form behavior
        onSubmit(e);
    };
  return (
    <div>
        <form onSubmit={handleSubmit}
            className={className}
        >
            {children}
        </form>
    </div>
  )
}

export default Form
