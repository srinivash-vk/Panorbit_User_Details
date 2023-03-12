import { useNavigate } from 'react-router-dom';
import SignInUsersList from '../Components/SignInUsersList'
import WaveBackGround from '../Assets/Images/Icons/Wave.svg'
import { useGetUsersQuery } from '../Services/UserApi';
import { useEffect } from 'react';
import { UserModel } from '../Model/User.Model';
import { setCurrentUser, usersList } from '../Reducer/UserReducer';
import React from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../Components/Loading';

export default function LandingPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { data: usersDetails, isSuccess: usersSuccess, isLoading: usersLoading } = useGetUsersQuery();

    useEffect(() => {
        if (usersSuccess) dispatch(usersList(usersDetails?.users));
    }, [usersSuccess, dispatch, usersDetails]);

    if (usersLoading) {
        return <Loading />
    }

    return (
        <>
            <div className='flex h-screen items-center justify-center ' style={{ backgroundImage: `url(${WaveBackGround})`, objectFit: 'cover', backgroundSize: '100%' }}>
                <div className='bg-white w-1/3 h-3/5 rounded-3xl shadow-2xl'>
                    <div className="flex bg-slate-100 p-10 rounded-t-3xl justify-center">
                        <div className='text-2xl text-gray-700 font-medium'>Select an account</div>
                    </div>
                    <div className='flex flex-col mt-4 w-full h-3/4 gap-y-4 items-start pl-10 overflow-y-auto mostly-customized-scrollbar'>
                        {
                            React.Children.toArray(usersDetails?.users.map((user: UserModel, index: number) => {
                                console.log("object", usersDetails.length - 1)
                                return <>
                                    <SignInUsersList
                                        key={user.id}
                                        onClick={() => { dispatch(setCurrentUser(user)); navigate('/s/profile'); }}
                                        userImage={user.profilepicture}
                                        userName={user.name}
                                    />
                                    {index === usersDetails.users.length - 1 ? '' : <hr className='bg-black w-full' />}
                                </>
                            }))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
