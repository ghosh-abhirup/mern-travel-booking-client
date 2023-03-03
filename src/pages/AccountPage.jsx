import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

const AccountPage = () => {
    const [redirect, setRedirect] = useState(false);
    const {user, ready, setUser} = useContext(UserContext);

    let {subpage} = useParams();

    if(subpage === undefined){
        subpage = 'profile';
    }

    const onLogoutHandler = async ()=>{
        await axios.post('/logout');
        setUser(null);
        setRedirect(true);
    }

    if(redirect){
        return <Navigate to={"/"}/>
    }

    if(!ready){
        return 'Loading ...';
    }

    if(ready && !user){
        return <Navigate to={"/login"}/>;
    }
    
    const linkClasses = (type=null)=>{
        let classes = 'py-2 px-4 font-medium';
        if(type === subpage){
            classes += ' bg-primary text-white rounded-md';
        }

        return classes;
    }

  return (
    <div>
        <nav className='w-full flex justify-center mt-8 gap-6 mb-8'>
            <Link className={linkClasses('profile')} to={'/account/'}>My Profile</Link>
            <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
            <Link className={linkClasses('places')} to={'/account/places'}>My Accomodations</Link>
        </nav>
        {subpage==='profile' && (
            <div className='flex flex-col justify-between items-center'>
                <h3 className='font-medium mb-4'>Logged in as {user.name} ({user.email})</h3>
                <button onClick={onLogoutHandler} className='py-2 px-4 font-medium bg-primary text-white rounded-md'>Logout</button>
            </div>
        )}
    </div>
  )
}

export default AccountPage