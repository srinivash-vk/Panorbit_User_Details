function CurrentUserDetails({ userName, e_mail, phone, website }: { userName: string, e_mail: string, phone: string, website: string }) {

    return (
        <div className='flex items-start justify-center gap-x-2'>
            <div className='flex flex-col gap-y-3'>
                <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1'>Username :</span>
                <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1'>e-mail :</span>
                <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1'>Phone :</span>
                <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1'>Website :</span>
            </div>
            <div className='flex flex-col gap-y-3'>
                <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{userName}</span>
                <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{e_mail}</span>
                <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{phone}</span>
                <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{website}</span>
            </div>
        </div>
    )
}

export default CurrentUserDetails;