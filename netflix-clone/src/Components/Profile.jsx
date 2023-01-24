import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const user = useSelector(selectUser)
const navigate = useNavigate()

    

    return (
        <div className='profile'>
            <Navbar />
            <div className="profile_body">
                <h1>Edit Profile</h1>
                <div className="profile_info">
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                        alt='logo' />
                        <div className="profile_details">
                            <h2>{user.email}</h2>
                            <div className="profile_plan">
                                <h3>Plans</h3>
                                <button
                                onClick={()=>auth.signOut()}
                                 className='profile_signOut'>Sign Out</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
