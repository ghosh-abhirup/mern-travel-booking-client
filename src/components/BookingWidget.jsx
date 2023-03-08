import React from 'react'

const BookingWidget = ({travelSite}) => {
  return (
    <div className='bg-white px-6 py-4 rounded-2xl shadow'>
                        <h1 className='font-semibold text-lg mb-2'>${travelSite.price} /per night</h1>
                        <div className='border mt-4 rounded-2xl overflow-hidden'>
                            <div className='flex justify-between border'>
                                <div className=' p-4'>
                                    <label>Check-in:</label>
                                    <input type="date" />
                                </div>
                                <div className=' p-4'>
                                    <label>Check-out:</label>
                                    <input type="date" />
                                </div>
                            </div>
                            <div className=' p-4'>
                                    <label>Max. guests:</label>
                                    <input type="number" value={1}/>
                            </div>
                        </div>
                        <button className='primary mt-4'>Reserve</button>
                    </div>
  )
}

export default BookingWidget