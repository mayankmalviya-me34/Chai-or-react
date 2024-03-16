import React from 'react'
import './App.css'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'
import Singin from './component/Singin'


function App() {

  return (
    <UserContextProvider>
      <h1 className='uppercase fixed  
                w-full h-56 top-0 left-0 font-bold text-gray-300 bg-gradient-to-r from-purple-400 to-pink-400 rounded  py-2 px-4 rounded-lgs'>SINGIN AND SINGUP</h1>
      <Singin/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
