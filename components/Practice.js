import React from 'react'
import FormInput from './FormInput'

function Practice() {
    const inputs = [{
        header:"ENTER NAME",
        placeholder:"Full Name",
        inputType:"text"
    },
    {
        header:"What are you looking for?",
        placeholder:"I need...",
        inputType:"textarea"
    },
    {
        header:"What are you looking for?",
        placeholder:"I need...",
        inputType:"textarea"
    },
  

]
  return (
    <div>
        {
            inputs.map((input,index) => (
                <FormInput key={index}  />
            ))
        }
    </div>
  )
}

export default Practice