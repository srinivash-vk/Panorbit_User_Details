function AddressDetails({ street, suite, city, zipCode }: { street: string, suite: string, city: string, zipCode: string }) {

    return (
        <>
            <div className='flex items-start justify-start gap-x-2'>
                <div className='flex flex-col gap-y-3'>
                    <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1'>Street :</span>
                    <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1'>Suite :</span>
                    <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1'>City :</span>
                    <span className='justify-end text-2xl font-normal text-gray-400 flex flex-1'>ZipCode :</span>
                </div>
                <div className='flex flex-col gap-y-3'>
                    <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{street}</span>
                    <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{suite}</span>
                    <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{city}</span>
                    <span className='justify-start text-2xl font-medium text-gray-700 flex flex-1'>{zipCode}</span>
                </div>
            </div>
        </>
    )
}

export default AddressDetails
