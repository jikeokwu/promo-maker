import React, { useState } from "react";


export default function SetNumbers({a,b,c,d,e,f,updateNum}){
    const [num1, setNum1] = useState(a)
    const [num2, setNum2] = useState(b)
    const [num3, setNum3] = useState(c)
    const [num4, setNum4] = useState(d)
    const [num5, setNum5] = useState(e)
    const [num6, setNum6] = useState(f)

    const increment =(func, val,e)=>{
        e.preventDefault()
        func(val = val + 1)

        updateNum(num1,num2,num3,num4,num5,num6)
    }

    const decrement =(func, val,e)=>{
        e.preventDefault()
        func(val = val - 1)

        updateNum(num1,num2,num3,num4,num5,num6)
    }

    const handleBlur = (func,val,e) =>{
        e.preventDefault()
        func(Number(e.target.value))
        console.log(typeof(e.target.value))

        updateNum(num1,num2,num3,num4,num5,num6)
    }

    const divStyle = {
        display: "inline-block",
        border: "2px solid black",
        padding: "10px",
        margin: "3px",
        borderRadius: "5px"
      };

    return(
        <form>
            <div style={divStyle}>
                <p>Image Left/Right</p>
                {num1}
                <input type="number" onBlur={(e) =>  handleBlur(setNum1, num1, e)}/>
                <button onClick={(e) =>  increment(setNum1, num1, e)}>Inc 1</button>
                <button onClick={(e) =>  decrement(setNum1, num1, e)}>Dec 1</button>
            </div>
            <div style={divStyle}>
                <p>Image Up/Down</p>
                {num2}
                <input type="number" onBlur={(e) =>  handleBlur(setNum2, num2, e)}/>
                <button onClick={(e) =>  increment(setNum2, num2, e)}>Inc 2</button>
                <button onClick={(e) =>  decrement(setNum2, num2, e)}>Dec 2</button>
            </div>
            <div style={divStyle}>
                <p>Circle Clip Roundness</p>
                {num3}
                <input type="number" onBlur={(e) =>  handleBlur(setNum3, num3, e)}/>
                <button onClick={(e) =>  increment(setNum3, num3, e)}>Inc 3</button>
                <button onClick={(e) =>  decrement(setNum3, num3, e)}>Dec 3</button>
            </div>
            <div style={divStyle}>
                <p>Image Roundness</p>
                {num4}
                <input type="number" onBlur={(e) =>  handleBlur(setNum4, num4, e)}/>
                <button onClick={(e) =>  increment(setNum4, num4, e)}>Inc 4</button>
                <button onClick={(e) =>  decrement(setNum4, num4, e)}>Dec 4</button>
            </div>
            <div style={divStyle}>
                <p>Name Left/Right</p>
                {num5} 
                <input type="number" onBlur={(e) =>  handleBlur(setNum5, num5, e)}/>
                <button onClick={(e) =>  increment(setNum5, num5, e)}>Inc 5</button>
                <button onClick={(e) =>  decrement(setNum5, num5, e)}>Dec 5</button>
            </div>
            <div style={divStyle}>
                <p>Number Left/Right</p>
                {num6}
                <input type="number" onBlur={(e) =>  handleBlur(setNum6, num6, e)}/>
                <button onClick={(e) =>  increment(setNum6, num6, e)}>Inc 6</button>
                <button onClick={(e) =>  decrement(setNum6, num6, e)}>Dec 6</button>
            </div>
        </form>
    )
}