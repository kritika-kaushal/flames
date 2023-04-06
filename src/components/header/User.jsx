import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiImageAddLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrHelp } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';



const User = () => {
    const user = true

    const [profileOpen, setProfileOpen] = useState(true)
        
        const close = () => {
            setProfileOpen(false)
        }
  return (
    <>
    <div className="profile">
        {user ? (
         <>
        <button className='img' onClick={() =>setProfileOpen(!profileOpen)}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4bP1gBKfj-YgEstclXtEPBnt71aqx9c2kw&usqp=CAU' alt='images' />
        </button>

        {profileOpen && (
            <div className="openProfile boxItems" onClick={close}>
            <Link to="account">
                <div className="image">
                    <div className="img">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4bP1gBKfj-YgEstclXtEPBnt71aqx9c2kw&usqp=CAU' alt='images' />
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
            <button className='box'>
                <IoSettingsOutline className='icon'/>
                <h4>My Account</h4>
            </button>
            <button className='box'>
                <BsBagCheck className='icon'/>
                <h4>My Order</h4>
            </button>
            <button className='box'>
                <AiOutlineHeart className='icon'/>
                <h4>Wishlist</h4>
            </button>
            <button className='box'>
                <GrHelp className='icon'/>
                <h4>Help</h4>
            </button>
            <button className='box'>
                <BiLogOut className='icon'/>
                <h4>Log Out</h4>
            </button>
        </div>
        )}
        </>
        ) : (
            <Link to = "/login">
            <button>My Account</button>
            </Link>
        )}
    </div>
    </>
  )
}

export default User
