// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './Component/Util/Header'
import { Outlet } from 'react-router-dom'
import './Global.css';

const App = () => {
  return (
    <div>
      {/* <h1 className='font-bold  flex justify-center align-middle'>Hello World</h1> */}
      <Header/>
      <Outlet/>
    </div>
    

  )
}

export default App
