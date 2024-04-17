import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './action/countAction'
// import {  } from './'

const Child = () => {
    const count = useSelector((store) => store.CountReducer)
    const dispatch = useDispatch()

  return (
    <div>
        <h1>This is Our Redux Consumer</h1>
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>

        </div>

    </div>
  )
}

export default Child
