import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiImageAddLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';
import profile from "../../assets/images/profile.jpg"


const User = () => {
    const user = true
    const [profileOpen, setProfileOpen] = useState(false)
        
        const close = () => {
            setProfileOpen(false)
        }
  return (
    <>
    <div className="profile">
        {user ? (
         <>
        <button className='img' onClick={() =>setProfileOpen(!profileOpen)}>
        <img src={profile} alt='images' />
        </button>

        {profileOpen && (
            <div className="openProfile boxItems" onClick={close}>
            <Link to="/account">
                <div className="image">
                    <div className="img">
                    <img src={profile} alt='images' />
                    </div>
                    <div className="text">
                        <h4>Zayn Malik</h4>
                        <p>Bradford, UK</p>
                    </div>
                </div>
            </Link>
            <Link to='/create'>
            <button className='box'>
                <RiImageAddLine className='icon'/>
                <h4>Create Post</h4>
            </button>
            </Link>
            <Link to="/account">
            <button className='box'>
                <IoSettingsOutline className='icon'/>
                <h4>My Account</h4>
            </button>
            </Link>
            <button className='box'>
                <BiLogOut className='icon'/>
                <h4>Log Out</h4>
            </button>
        </div>
        )}
        </>
        ) : (
            <Link to = "/account">
            <button>My Account</button>
            </Link>
        )}
    </div>
    </>
  )
}

export default User
