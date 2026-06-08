import React from 'react'

const Counter = ({count, setCount}) => {
    
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>counter {count}</button>
    </div>
  )
}

export default Counter