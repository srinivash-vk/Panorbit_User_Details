import React from 'react'
import ComingSoonText from '../Components/ComingSoonText'
import NavBar from '../Components/NavBar'

export default function ToDoPage() {

    return (
        <div className='flex flex-col h-full w-full'>
            <NavBar pageTitle='ToDo' />
            <ComingSoonText />
        </div>
    )
}
