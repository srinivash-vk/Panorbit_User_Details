import React from 'react'
import Avatar from './Avatar'
import Icon from './IconsStyle'

export default function MessageHeader({ clickDownArrow, onClickDown, onClickUp, onClickClose, chatUserName, chatUserImage }: { clickDownArrow: boolean, onClickDown: any, onClickUp: any, onClickClose: any, chatUserName: any, chatUserImage: string }) {

    return (
        <div className='flex text-white flex-row truncate text-ellipsis justify-between w-full items-center m-1 px-1 rounded-t-2xl'>
            <div className='flex flex-row gap-x-2 items-center justify-center'>
                <Avatar size='xs-small' imageURL={chatUserImage} />
                <span className='text-white font-normal  text-xl'>{chatUserName}</span>
            </div>
            <div className='flex flex-row justify-end items-center'>
                {clickDownArrow
                    ? <Icon className='cursor-pointer' icon="UP_ARROW" size='small' onClick={onClickUp} />
                    : <Icon className='cursor-pointer' icon="DOWN_ARROW" size='small' onClick={onClickDown} />
                }
                <Icon icon="CLOSE" size='large' className='cursor-pointer' onClick={onClickClose} />
            </div>
        </div>
    )
}
