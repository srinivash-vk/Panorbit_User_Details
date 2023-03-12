import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserModel } from "../Model/User.Model";
import { getAllUser, getCurrentUser, setCurrentUser } from "../Reducer/UserReducer";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import Avatar from "./Avatar";
import DetectOutsideClick from "./DetectOutsideClick";
import SignInUsersList from "./SignInUsersList";

function NavBar({ pageTitle }: { pageTitle: string }) {

    const currentUser = useAppSelector(getCurrentUser);
    const allUsers = useAppSelector(getAllUser);
    const dispatch = useAppDispatch()
    const [dropDown, SetDropDown] = useState<boolean>(false)
    const impactRef = useRef<any>();
    const navigate = useNavigate();
    const otherUsers = allUsers?.filter(user => {
        return user.id !== currentUser.id;
    });

    //Change my dropdown state to close when clicked outside
    DetectOutsideClick(impactRef, () => SetDropDown(false));

    // on ESC key press drop down hide
    const escFunction = useCallback((event: any) => {
        if (event.key === "Escape") {
            SetDropDown(false)
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return (
        <div ref={impactRef} className='flex mx-10 h-20 flex-row justify-between relative items-center border-b-2'>
            <div className='text-2xl font-semibold text-gray-500'>
                {pageTitle}
            </div>
            <SignInUsersList onClick={() => { SetDropDown(true) }} userImage={currentUser.profilepicture} userName={currentUser.name} />
            {
                dropDown &&
                <>
                    <div className="absolute z-40 w-1/4 right-0 top-20 flex flex-col py-3 px-3 items-center bg-white rounded-3xl shadow-cover">
                        <Avatar size="medium" imageURL={currentUser?.profilepicture} />
                        <span className="font-light text-2xl text-gray-700">{currentUser?.name}</span>
                        <span className="font-light text-lg text-gray-400">{currentUser?.email}
                        </span>
                        <div className="flex flex-col w-5/6 h-[10rem] items-center overflow-y-auto invisible-scrollbar" onClick={() => { SetDropDown(false) }}>
                            {React.Children.toArray(otherUsers?.map((users: UserModel, index: number) => {
                                return <>
                                    <div key={index} onClick={() => dispatch(setCurrentUser(users))} className={`cursor-pointer flex-row flex items-center gap-x-3 px-8 py-3 ${index === otherUsers.length - 1 ? 'border-none' : 'border-b'} w-full`}>
                                        <Avatar size="xs-small" imageURL={users?.profilepicture} />
                                        <span className="flex-1 font-light text-md text-gray-700">{users?.name}</span>
                                    </div>
                                </>
                            }))}
                        </div>
                        <div onClick={() => navigate('/')} className="cursor-pointer px-6 py-2 bg-red-600 items-center justify-center rounded-full font-normal text-white text-2xl my-2">
                            Sign out
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
export default NavBar;