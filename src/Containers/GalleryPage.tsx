import React from 'react'
import ComingSoonText from '../Components/ComingSoonText'
import NavBar from '../Components/NavBar'

export default function GalleryPage() {

    return (
        <div className='flex flex-col h-full w-full'>
            <NavBar pageTitle='Gallery' />
            <ComingSoonText />
        </div>
    )
}
