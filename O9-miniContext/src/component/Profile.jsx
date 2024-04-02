import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)

    if (!user) return <div className='w-screen fixed left-0 bottom-10 py-10  bg-sky-100'>Please login</div>

    return <div className='w-screen fixed left-0 bottom-10 py-10 bg-sky-100'>Welcome {user.username}</div>
}

export default Profile
