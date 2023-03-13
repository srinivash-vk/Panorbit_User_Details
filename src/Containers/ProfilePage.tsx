import AddressDetails from '../Components/AddressDetails'
import Avatar from '../Components/Avatar'
import CurrentUserCompanyDetails from '../Components/CurrentUserCompanyDetails'
import CurrentUserDetails from '../Components/CurrentUserDetails'
import NavBar from '../Components/NavBar'
import UserMapCoordinates from '../Components/UserMapCoordinates'
import { getCurrentUser } from '../Reducer/UserReducer'
import { useAppSelector } from '../Store/hooks'

export default function ProfilePage() {

    const currentUser = useAppSelector(getCurrentUser);
    const mapImage = require('../Assets/Images/MapImage.png')

    return (
        <>
            <div className='flex flex-col overflow-hidden h-full w-full'>
                <NavBar pageTitle='Profile' />
                <div className='flex flex-row pt-10 h-full w-full'>
                    <div className='flex flex-col border-r-2 items-center p-5 gap-y-5 h-full w-[50rem]'>
                        {/* Current user details*/}
                        <Avatar size='large' imageURL={currentUser?.profilepicture} />
                        <span className='text-3xl font-medium text-gray-700'>{currentUser?.name}</span>
                        <div className='self-center w-full border-b-2 pb-5'>
                            <CurrentUserDetails userName={currentUser?.name} e_mail={currentUser?.email} phone={currentUser?.phone} website={currentUser?.website} />
                        </div>
                        {/* Company details of current user */}
                        <>
                            <span className='text-3xl font-normal text-gray-400'>Company</span>
                            <div className='self-center w-full'>
                                <CurrentUserCompanyDetails companyName={currentUser?.company?.name} catchphrase={currentUser?.company?.catchPhrase} bs={currentUser?.company?.bs} />
                            </div>
                        </>
                    </div>
                    <div className='h-full w-full px-20 relative flex flex-col'>
                        <div className='flex flex-col items-start'>
                            {/* Address details of current user */}
                            <span className='text-3xl font-medium text-gray-400'>
                                Address
                            </span>
                            <div className='h-6' />
                            <div className='w-full'>
                                <AddressDetails street={currentUser?.address?.street} suite={currentUser?.address?.suite} city={currentUser?.address?.city} zipCode={currentUser?.address?.zipcode} />
                            </div>
                            <div className='h-6' />
                            {/* Map coordinates details of current user */}
                            <img alt='map' src={mapImage} className='w-full h-96 rounded-2xl' />
                            <UserMapCoordinates
                                latitude={currentUser?.address?.geo?.lat}
                                longitude={currentUser?.address?.geo?.lng}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
