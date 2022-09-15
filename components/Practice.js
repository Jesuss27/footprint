import React from 'react'
import { useState } from "react"

import FormInput from './FormInput'

function Practice() {
    var [current, setCurrent] = useState(0)
    var [active, setActive] = useState(false)
    var length = 3

    var nextInput = () => {
        setCurrent(current === length -1 ? 0 : current + 1)   
    }
    var prevInput = () => {
        setCurrent(current ===  0 ? 0 : current - 1)   
    }
    const inputs = [{
        header:"Name:",
        placeholder:"Full Name",
        inputType:"text"
    },
    {
        header:"What are you looking for?",
        placeholder:"I need...",
        inputType:"textarea"
    },
    {
        header:"What is your budget?",
        placeholder:"I need...",
        inputType:"checkbox"
    },
  

]
  return (
    <div className="w-full h-screen  mt-10 ">
                    <div className="w-full relative flex shrink-0">
                        <div className='w-full h-96 p-10  overflow-hidden'>

                       
                    {
                        inputs.map((input,index) => {
                            return (
                                <div key={index} className="w-full shrink-0 overflow-hidden">
                                    <FormInput  current={current} key={index} index={index} header={input.header} placeholder={input.placeholder} inputType={input.inputType} />
                                
                                </div>
                            )
                        }
                            
                        )
                    }
                     </div>
                    </div>
                <div className="mt-10 ">
                        <button 
                        onClick={prevInput} 
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white  md:py-4 md:text-lg md:px-10">
                            BACK
                        </button>
                        <button    
                        onClick={nextInput} 
                        className="w-full flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-white bg-black  md:py-4 md:text-lg md:px-10">
                            NEXT
                        </button>
                </div>
    </div>
  )
}

export default Practice