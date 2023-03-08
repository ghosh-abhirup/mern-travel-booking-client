import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'

const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(()=>{
    axios.get('/all-places').then(response=>{
      const {data} = response;
      // console.log(data);
      setPlaces(data);
    })
  },[])

  return (
    <div className='grid gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10'>
      {places.length >0 && places.map((place)=>(
        <Link to={'/visit/'+place._id} key={place._id}>
          <div className='rounded-2xl mb-2'>
          <img src={'http://127.0.0.1:8000/uploads/'+place.photos[0]} alt="photo" className='rounded-2xl object-cover aspect-square'/>
          </div>
          <h2 className='font-bold '>{place.address}</h2>
          <h2 className='text-sm  text-gray-500'>{place.title}</h2>
          <h2 className='text-lg '><span className='font-bold text-lg mr-1'>{'$'+place.price}</span>per night</h2>
        </Link>
      ))}
    </div>
  )
}

export default IndexPage