import React from 'react'

interface _UserMapCoordinates {
    latitude: string
    longitude: string
}

export default function UserMapCoordinates(props: _UserMapCoordinates) {

    const { latitude, longitude } = props

    return (
        <div className='flex flex-row self-end mt-5 gap-x-3'>
            {/* latitude */}
            <div className='flex flex-row gap-x-2'>
                <span className='text-base font-medium text-gray-400'>
                    Lat :
                </span>
                <span className='text-base font-medium text-gray-700'>
                    {latitude}
                </span>
            </div>
            {/* longtitude */}
            <div className='flex flex-row gap-x-2'>
                <span className='text-base font-medium text-gray-400'>
                    long :
                </span>
                <span className='text-base font-medium text-gray-700'>
                    {longitude}
                </span>
            </div>
        </div>
    )
}
