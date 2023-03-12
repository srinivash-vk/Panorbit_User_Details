function CurrentUserCompanyDetails({ companyName, catchphrase, bs }: { companyName: string, catchphrase: string, bs: string }) {

    return (
        <div className='flex items-start justify-center gap-x-2'>
            <div className='flex flex-col gap-y-3'>
                <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1'>Name :</span>
                <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1 truncate'>catchphrase :</span>
                <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1 mt-8'>bs :</span>
            </div>
            <div className='flex flex-col gap-y-3'>
                <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{companyName}</span>
                <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{catchphrase}</span>
                <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{bs}</span>
            </div>
        </div>
    )
}

export default CurrentUserCompanyDetails;
