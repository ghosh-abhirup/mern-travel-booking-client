import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Perks from '../components/Perks';
import axios from 'axios';

const PlacesPage = () => {
  const {action} = useParams();

  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [addedPhoto, setAddedPhoto] = useState([]);
  const [photoLink, setPhotoLink] = useState('');
  const [desc, setDesc] = useState('');
  const [perks,setPerks] = useState([]);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guest, setGuest] = useState(1);
  const [extraInfo, setExtraInfo] = useState('');

  const addPhotoHandler = async(e)=>{
    e.preventDefault();
    const {data} = await axios.post('/upload-by-link', {link: photoLink});
    
    setAddedPhoto([...addedPhoto, data]);

    setPhotoLink('');
  }

  return (
    
    <div>
      {action !== 'new' && (
        <div className='text-center'>
        <Link className='inline-flex items-center gap-2 bg-primary text-white py-2 px-4 font-medium rounded-md' to={'/account/places/new'}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add new place
        </Link>
      </div>
      )}

      {action === 'new' && (
        <div className='mx-auto w-1/2'>
          <form action="">
            <h2 className='font-medium mt-2 text-lg'>Title</h2>
            <input type="text" name="title" id="title" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
            <h2 className='font-medium mt-2 text-lg'>Address</h2>
            <input type="text" placeholder='Address' value={address} onChange={e=>setAddress(e.target.value)}/>
            <h2 className='font-medium mt-2 text-lg'>Photos</h2>
            <div className='flex gap-2 items-center'>
              <input type="text" placeholder='Add photos using link' value={photoLink} onChange={e=>setPhotoLink(e.target.value)}/>
              <button className='py-2 px-4 rounded-lg font-medium' onClick={addPhotoHandler}>Grab&nbsp;Photo</button>
            </div>
            <div className='flex gap-2 justify-start'>
              {addedPhoto.length >0 && addedPhoto.map(link=> (
                <div className='w-1/4' >
                  <img src={`http://127.0.0.1:8000/uploads/${link}`} className='rounded-lg' />
                </div>
              ))}
              <button className='p-8 rounded-md font-medium bg-transparent border flex items-center flex-col'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
                Upload Photos
                </button>
            </div>
            <h2 className='font-medium mt-2 text-lg'>Description</h2>
            <textarea rows={5} className='' placeholder='Description of your place' value={desc} onChange={e=>setDesc(e.target.value)}/>
            <h2 className='font-medium mt-2 text-lg'>Perks</h2>
            <div className='grid gap-2 grid-cols-2 md:grid-cols-3 mt-2'>
              <Perks selected={perks} onChange={setPerks}/>
            </div>
            <div className='w-full flex gap-2'>
              <div>
                <h2 className='font-medium mt-4 text-lg'>Check in time</h2>
                <input type="text" placeholder='Ex. 14:00' value={checkIn} onChange={e=>setCheckIn(e.target.value)}/>
              </div>
              <div>
                <h2 className='font-medium mt-4 text-lg'>Checkout time</h2>
                <input type="text" placeholder='Ex. 14:00' value={checkOut} onChange={e=>setCheckOut(e.target.value)}/>
              </div>
              <div>
                <h2 className='font-medium mt-4 text-lg'>Max. guests</h2>
                <input type="text" placeholder='Ex. 2' value={guest} onChange={e=>setGuest(e.target.value)}/>
              </div>
            </div>
            <h2 className='font-medium mt-4 text-lg'>Extra Information</h2>
            <textarea rows={5} className='' placeholder='House rules, prohibitions etc.' value={extraInfo} onChange={e=>setExtraInfo(e.target.value)}/>

            <button className='primary my-4'>Save</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default PlacesPage