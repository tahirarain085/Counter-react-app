import React, { useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1)
    }

    const decrement = ()=>{
        if(count > 0){
        setCount(count - 1)

        }else{
            alert("Number Ended")
            setCount(0)
        }
    }
    return (
        <div className="main_div">
            <div className="center_div">
                <h1>{count}</h1>
                <div className="btn_div">
                    <button onClick={()=> increment()}>Increment</button>
                    <button onClick={()=> decrement()}>Decrement</button>


                </div>

            </div>
            
        </div>
    )
}

export default Counter
