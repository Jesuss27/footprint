import React from 'react'
import { useState } from "react"
import Progress from "./Progress"
import FormInput from './FormInput'

function Practice() {
    var [current, setCurrent] = useState(0)
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
    <div className="w-full h-screen  mt-5 ">
        <Progress current={current} />
                    <div className="w-full relative flex ">
                        {/* form contianer */}
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
                <div className="mt-10 md:flex w-full">
                        <button 
                        onClick={prevInput} 
                        className={`${current===0 ? "opacity-25 transition" : "opacity-100 transition" } w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white md:mr-5 md:py-4 md:text-lg md:px-10`}>
                            BACK
                        </button>

                          
                        {current === 2 ?   
                        <button    
                        
                        className="w-full flex items-center justify-center  px-8 py-3 transition text-base font-medium rounded-md text-white bg-submit  md:py-4 md:text-lg md:px-10">
                            SUBMIT
                        </button>  
                    :         
                        <button    
                        onClick={nextInput} 
                        className="w-full flex items-center justify-center px-8 py-3 transition   text-base font-medium rounded-md text-white bg-black  md:py-4 md:text-lg md:px-10">
                            NEXT
                        </button>
                    }
                </div>
    </div>
  )
}

export default Practice