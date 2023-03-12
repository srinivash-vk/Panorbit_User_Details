import React from 'react'
import Icon from './IconsStyle'

export default function ChatHeader({chatUserListVisible,onClickUp,onClickDown }: {chatUserListVisible:boolean,onClickUp: any,onClickDown:any}) {
    
    return (
        <div className='flex text-white flex-row justify-between items-center m-3'>
        <div className='flex flex-row gap-x-2 items-center'>
            <Icon icon="MESSAGE" size='medium' />
            <span className='text-white font-normal text-xl'> Chats</span>
        </div>
        {chatUserListVisible===true ? <Icon className='cursor-pointer' icon="DOWN_ARROW" size='small' onClick={onClickDown} /> : <Icon className='cursor-pointer' icon="UP_ARROW" size='small' onClick={onClickUp } />}
    </div>
    )
}
