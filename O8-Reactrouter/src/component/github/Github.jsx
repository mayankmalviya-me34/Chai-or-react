import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
   /* const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/mayankmalviya-me34')
        .then(res => res.json())
        .then(data => {console.log(data); setData(data)})
    }, [])
    */
  return (
    <div className=' text-white bg-gray-300 py-4 text-center '>
      Github Followers: {data.followers}
      <img className='w-36 h-40 ml-4 p-2 shadow-lg bg-slate-100 rounded-lg' src={data.avatar_url} alt='Github'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/mayankmalviya-me34')
    return response.json()
}