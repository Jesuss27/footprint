import React from 'react'

function FormInput() {
    var [current, setCurrent] = useState(0)
    var [active, setActive] = useState(false)
    var length = 3

    var nextInput = () => {
        setCurrent(current === length -1 ? 0 : current + 1)   
    }
    var prevInput = () => {
        setCurrent(current ===  0 ? 0 : current - 1)   
    }
    console.log(current)
    
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
        <div className="w-48 h-96 bg-white flex ">
            <div className="w-full h-full mr-10 p-10 bg-black shrink-0 rounded-md drop-shadow ">
                <h2 className="text-xl text-center">NAME</h2>
                <input className="mx-auto w-full" type="text" required />

                <div className="mt-10">

                    <button onClick={nextInput} className="w-full bg-white  border height-10">NEXT</button>
                    <button onClick={prevInput} className="w-full bg-white border height-10">BACK</button>
                </div>
                
            </div>
            <div className="w-full h-full p-10 mr-10 bg-black shrink-0">

            </div>
            <div className="w-full h-full p-10 mr-10 bg-black shrink-0">

            </div>
        </div>

    </div>
  )
}


export default FormInput