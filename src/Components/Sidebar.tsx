import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { getChatUser } from '../Reducer/UserReducer'
import { useAppSelector } from '../Store/hooks'
import ChatHeader from './ChatHeader'
import ChatUsersList from './ChatUsersList'
import MessageBody from './MessageBody'
import MessageHeader from './MessageHeader'
import PageIndicator from '../Assets/Images/Icons/Page_Indicator.svg'

export default function SideBar() {

    const [chatUserListVisible, setChatUserListVisible] = useState<boolean>(false)
    const [messageBoxVisible, setMessageBoxVisible] = useState<boolean>(false)
    const [clickDownArrow, setClickDownArrow] = useState<boolean>(false)
    const location = useLocation();
    const chatUser = useAppSelector(getChatUser);
    const sideBarTextStyle = {
        inActive: `py-5 text-gray-400 w-full font-light text-xl cursor-pointer`,
        active: `py-5 text-white w-full font-medium text-xl cursor-pointer`,
    }

    return (
        <div className='h-screen w-screen flex flex-row p-5 pr-16 overflow-hidden'>
            {/* sidebar content */}
            <section className='px-10 h-full w-[20rem] flex flex-col justify-center items-start rounded-3xl bg-gradient-to-t from-purple-700 to-blue-700'>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <NavLink to={`/s/profile`} className={(sideBarList) => sideBarList.isActive ? sideBarTextStyle.active : sideBarTextStyle.inActive}>Profile</NavLink>
                        <hr className="w-48 h-[0.01rem] bg-gray-100 border-0 rounded " />
                    </div>
                    {location.pathname.includes('profile') && <img src={PageIndicator} alt='profile' />}
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <NavLink to={`/s/posts`} className={(sideBarList) => sideBarList.isActive ? sideBarTextStyle.active : sideBarTextStyle.inActive}>Posts</NavLink>
                        <hr className="w-48 h-[0.01rem] bg-gray-200 border-0 rounded " />
                    </div>
                    {location.pathname.includes('posts') && <img src={PageIndicator} alt='posts' />}
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <NavLink to={`/s/gallery`} className={(sideBarList) => sideBarList.isActive ? sideBarTextStyle.active : sideBarTextStyle.inActive}>Gallery</NavLink>
                        <hr className="w-48 h-[0.01rem] bg-gray-200 border-0 rounded " />
                    </div>
                    {location.pathname.includes('gallery') && <img src={PageIndicator} alt='gallery' />}
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <NavLink to={`/s/todo`} className={(sideBarList) => sideBarList.isActive ? sideBarTextStyle.active : sideBarTextStyle.inActive}>ToDo</NavLink>
                        <div className='w-48' />
                    </div>
                    {location.pathname.includes('todo') && <img src={PageIndicator} alt='todo' />}
                </div>

            </section>
            {/* Pages */}
            <section className='w-full h-full py-5'>
                <Outlet />
            </section>
            {/* chatBox */}
            <div className={`absolute -bottom-0 ring-1 ring-blue-600 overflow-hidden right-16 ${chatUserListVisible ? 'h-1/2' : 'h-12'}  w-80 rounded-t-2xl bg-blue-600`}>
                <ChatHeader
                    chatUserListVisible={chatUserListVisible}
                    onClickUp={() => { setChatUserListVisible(true) }}
                    onClickDown={() => { setChatUserListVisible(false) }} />
                {
                    chatUserListVisible && <>
                        <div className='h-[27.25rem] w-full bg-white overflow-y-auto mostly-customized-scrollbar'>
                            <ChatUsersList messageBoxVisible={() => { setMessageBoxVisible(true); setClickDownArrow(false) }} />
                        </div>
                    </>
                }
            </div>
            {messageBoxVisible && <div className={`overflow-hidden absolute -bottom-0 right-1/4 ${!clickDownArrow ? 'h-2/5' : 'h-[3.8]'} w-[23rem] rounded-t-2xl border-t border-r border-l border-blue-600 bg-blue-600`}>
                <MessageHeader
                    clickDownArrow={clickDownArrow}
                    onClickDown={() => { setClickDownArrow(true) }}
                    onClickUp={() => { setClickDownArrow(false) }}
                    onClickClose={() => { setMessageBoxVisible(false) }}
                    chatUserName={chatUser?.name}
                    chatUserImage={chatUser?.profilepicture}
                />
                {!clickDownArrow && <div className='overflow-hidden h-[20.8rem] w-full bg-white'>
                    <MessageBody />
                </div>
                }
            </div>
            }
        </div>
    )
}
