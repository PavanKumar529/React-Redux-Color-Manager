import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Color = () => {
    const color = useSelector((store) => store.ColorReducer)
    console.log(color);
    const dispatch = useDispatch()
    const [ textColor, setTextColor ] = useState('')
    const [ bgcolor, setBgcolor ] = useState({ red:0, green:0, blue:0 })

  return (
    <div>
      <div style={{padding:"20px"}}>
        <input type="text"  placeholder='Enter Color Name'
            onChange={(e)=>setTextColor(e.target.value)}/>
        <button onClick={()=>dispatch({type:"text", payload: textColor })}>Change the Text Color</button>
        <h1 style={{color: textColor}}>React is a Best UI</h1>
      </div>


      {/* <div style={{background: `rgb(${bgColor.red},${bgColor.green},${bgColor.blue})`}}> */}
      <div style={{background: `rgb(${color.bgColor.red},${color.bgColor.green},${color.bgColor.blue})`}}>
        <table>
            <tr>
                <td><label>Red :</label></td>
                <td><input type="text" placeholder='Enter a number 0-255'
                    onChange={(e)=>setBgcolor({...bgcolor, red:e.target.value})}/></td>
                    {/* /></td> */}
            </tr>
            <tr>
                <td><label>Green :</label></td>
                <td><input type="text" placeholder='Enter a number 0-255'
                    onChange={(e)=>setBgcolor({...bgcolor, green:e.target.value})}/></td>
            </tr>            
            <tr>
                <td><label>Blue :</label></td>
                <td><input type="text" placeholder='Enter a number 0-255'
                    onChange={(e)=>setBgcolor({...bgcolor, blue:e.target.value})}/></td>
            </tr>
            <tr>
            {/* <td><button style={{padding:"20px 10px", margine:"10px"}}>Change the Background Color</button></td> */}
                <td><button onClick={()=>dispatch({type:"bg", payload:bgcolor})}>Change the Background Color</button></td>
            </tr>
        </table>
      </div>
    </div>
  )
}

export default Color
