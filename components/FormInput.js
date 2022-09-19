import React from 'react'


function FormInput({index,current, header, placeholder, inputType}) {
  return (
            <div className={`${index===current ? "input active" : "input"}  transition transition-all border-none rounded-2xl drop-shadow-2xl bg-white w-full h-96  p-10  shrink-0`}>
                <h2 className="text-xl w-full text-left">{header}</h2>
                {inputType === "text" && (
                        <input className="mx-auto w-full bg-gray p-2.5 border-none outline-none rounded-md break-normal" type={inputType} placeholder={placeholder} required />
                )}

                {
                  inputType ==="textarea" && (
                    <textarea className="mx-auto w-full bg-gray p-2.5 rounded-md border-none outline-none break-normal" rows="4" type={inputType} placeholder={placeholder} required></textarea>
                  )

                }

                {inputType ==="checkbox" && (
                    <div className='mt-10'>
                        <input  className='mb-4' type="checkbox" id="<5" value="<5" />
                        <label htmlFor='<5'> Less than $5K</label><br/>

                        <input className='mb-4' type="checkbox" id="5-10" value="5-10" />
                        <label htmlFor='5-10'> $5K-$10K</label><br/>

                        <input className='mb-4' type="checkbox" id="10-20" value="10-20" />
                        <label htmlFor='10-20'> $10K-$20K</label><br/>

                        <input className='mb-4' type="checkbox" id="+20" value="+20" />
                        <label htmlFor='+20'> More than $20K</label><br/>
                    </div>
             )}
                

                    
                
            </div>
  )
}


export default FormInput