import {useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Singin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const { setUser } = useContext(UserContext) || {}; // Provide an empty object as default
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser && setUser({ username, password }) // Check if setUser is available before calling it
    }
  
    return (
        <div className='w-screen fixed top-16 left-0'>
           <div className=' grid grid-cols-1 justify-items-center py-6 inline-flex bg-white rounded gap-x-6 gap-y-8s'>
           <h2 className='uppercase font-bold mt-2 '>Login</h2>
           <div className='w-2/6 grid grid-cols-1 shadow-lg shadow-gray-900 mt-2 bg-white p-4 gap-y-4 py-12 rounded-2xl'>
           <input 
            className='h-9 px-1 border-2 border-black rounded'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
            />
            <input
                className='h-9 px-1 border-2 border-black rounded' 
                type="text" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' 
            />
            <button 
            className='bg-gradient-to-r shadow-lg shadow-gray-500/50 mt-2 uppercase text-gray-800 from-purple-300 to-pink-300'
            onClick={handleSubmit}>Submit</button>
           </div>
           </div>
        </div>
    )
}

export default Singin
