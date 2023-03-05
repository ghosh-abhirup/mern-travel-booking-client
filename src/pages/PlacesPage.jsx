import React from 'react'
import { Link } from 'react-router-dom'
import AccountNav from '../components/AccountNav';

const PlacesPage = () => {

  return (
    
    <div>
      <AccountNav />
        <div className='text-center'>
        <Link className='inline-flex items-center gap-2 bg-primary text-white py-2 px-4 font-medium rounded-md' to={'/account/places/new'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add new place
        </Link>
      </div>
    </div>
  )
}

export default PlacesPage