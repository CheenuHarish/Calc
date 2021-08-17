import React, { useState } from 'react'



function Panel(props){
    const [input,setInput] = useState(()=>(' '))
    const [answer,setAnswer] = useState(()=>(' '))

  const handlee = (e)=>{
      props.Data(e)
   }
   const handleAns = (e) =>{
       props.Ans(e)
   }

    return(
     <div className="justify-content-md-center d-flex">
        <div className="d-grid">
            <div className="d-flex flex-row ">
                <button className="btn border p-3 m-2 rounded fs-4 " onClick={(e)=>{setInput(input + e.target.value);handlee(input + e.target.value)}} value={7}>7</button>
                <button className="btn border p-3 m-2 rounded fs-4 " onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value)} } value={8}>8</button>
                <button className="btn border p-3 m-2 rounded fs-4 " onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value)} } value={9}>9</button>
            </div>
            <div className="d-flex flex-row ">
                <button className="btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={4}>4</button>
                <button className="btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={5}>5</button>
                <button className="btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={6}>6</button>
            </div>
           
            <div className="d-flex flex-row ">
                <button className="btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={1}>1</button>
                <button className="btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={2}>2</button>
                <button className="btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={3}>3</button>
            </div>
            <div className="d-flex flex-row ">
                <button className="btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={0}>0</button>
                <button className="btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={'.'}>.</button>
            
                <button className="btn border border-success p-3 m-2 rounded fs-4"
                onClick={(e) => {
                    try { 
                    handleAns(String(eval(input)));
                    } catch (e) {
                    console.log(e);
                    }
                   
                }}
                value="=">=
                </button>
            </div>
        </div>
        <div className="col-2 ">
                <button className="  col-4 btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(' ');setAnswer(' ');handlee(' ');handleAns(' ')}}  >AC</button>
                <button className=" col-4 btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input.substr(0,(input.length-1)));handlee(input.substr(0,(input.length-1)))}}>C</button>
                <button className=" col-9 btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={'+'}>+</button>
                <button className="col-4 btn border p-3 m-2 rounded fs-4"  onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={'-'}> {" "} -{" "}</button>
                <button className="col-4 btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={'/'}>{" "}/</button>
                <button className=" col-4 btn border p-3 m-2 rounded fs-4"  onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={'*'}> {" "} *</button>
                <button className=" col-4 btn border p-3 m-2 rounded fs-4" onClick={e=>{setInput(input + e.target.value);handlee(input + e.target.value) }} value={'%'}>%</button>
        </div>
        {console.log("input:"+input)}
        {console.log("answer"+answer)}
     </div>
    )
}
export default Panel;