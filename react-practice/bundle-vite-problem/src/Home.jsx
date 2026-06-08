import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'

const Home = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div>Home
      <Link to="/dashboard">
      <Counter count={count} setCount={setCount}/>
      </Link>
    </div>
  )
}

export default Home