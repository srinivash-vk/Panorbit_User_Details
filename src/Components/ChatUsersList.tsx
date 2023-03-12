import React from 'react';
import { UserModel } from '../Model/User.Model';
import { getCurrentUser, getAllUser, setChatUser } from '../Reducer/UserReducer';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import Avatar from './Avatar'

export default function ChatUsersList({ messageBoxVisible }: { messageBoxVisible: any }) {

    const currentUser = useAppSelector(getCurrentUser);
    const allUsers = useAppSelector(getAllUser);
    const dispatch = useAppDispatch();
    const otherUsers = allUsers?.filter(user => {
        return user.id !== currentUser.id;
    });

    return (
        <>
            {React.Children.toArray(otherUsers.map((users: UserModel, index: number) => {
                return <>
                    <div onClick={() => {
                            dispatch(setChatUser(users))
                    }} key={index} className='flex flex-row items-center justify-between cursor-pointer mt-1'>
                        <div onClick={messageBoxVisible} className='flex flex-row items-center gap-x-4 mx-5 my-1'>
                            <Avatar size='xs-small' imageURL={users?.profilepicture} />
                            <span className='text-gray-700 font-normal text-md'>{users.name}</span>
                        </div>
                        {(users.id % 2 === 0)
                            ? <div className='h-2.5 w-2.5 rounded-full bg-green-600' />
                            : <div className='h-2.5 w-2.5 rounded-full bg-gray-400' />
                        }
                    </div>
                </>
            })
            )}
        </>
    )
}


