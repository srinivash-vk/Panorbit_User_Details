import Avatar from './Avatar'

export default function SignInUsersList({ userName, userImage, onClick }: { userName: string, userImage: string, onClick?: React.MouseEventHandler<HTMLDivElement> | undefined }) {

    return (
        <>
            <div onClick={onClick} className='flex flex-row items-center gap-x-5 justify-start text-2xl font-light text-gray-600 cursor-pointer'>
                <Avatar
                    size='small'
                    imageURL={userImage}
                />
                <span className=''>{userName}</span>
            </div>
        </>
    )
}
