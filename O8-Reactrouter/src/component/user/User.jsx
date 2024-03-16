import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-white bg-gray-700 py-6 font-bold uppercase border-lime-500 rounded-r-lg'>
      User: {userid}
    </div>
  )
}

export default User
