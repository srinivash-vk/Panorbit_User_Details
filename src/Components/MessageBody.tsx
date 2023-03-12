import React from 'react'
import Icon from './IconsStyle'

export default function MessageBody() {

    return (
        <>
            <div className="flex flex-col w-full h-full px-5 pt-2 bg-white gap-y-2">
                <div className="flex flex-wrap p-2 w-3/5 text-sm text-gray-600 bg-gray-100 rounded-b-lg rounded-tr-lg">
                    Lorem ipsum dolor sit amet, consectetue
                </div>
                <div className="flex flex-wrap p-2 w-3/5 text-sm text-gray-600 bg-gray-100 rounded-b-lg rounded-tr-lg">
                    Lorem ipsum dolor sit
                </div>
                <div className="flex self-center text-sm text-gray-400 font-medium">9:16 PM</div>
                <div className="flex flex-wrap p-2 h-15 w-60 text-sm text-gray-600 bg-gray-100 rounded-b-lg rounded-tl-lg self-end">
                    Lorem ipsum dolor
                </div>
                <div className="flex flex-wrap p-2 h-15 w-60 text-sm text-gray-600 bg-gray-100 rounded-b-lg rounded-tl-lg self-end">
                    Lorem ipsum
                </div>
            </div>
            <div className='flex flex-row items-center w-full border border-gray-300 justify-center absolute bottom-0'>
                <input className='py-2 px-3 w-full border-transparent outline-none' type='text' onChange={() => { }} />
                <Icon icon="SEND" size='medium' className='top-2 mx-2' onClick={() => { }} />
            </div>
        </>
    )
}
