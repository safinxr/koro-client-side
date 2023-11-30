import { PulseLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';
import useUserType from '../Hooks/useUserType';

const DeliveryRoute = ({ children }) => {
    const location = useLocation()
    const [userInfo, shortLoading] = useUserType()


    if (shortLoading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PulseLoader color="#231F20" size={20} />
        </div>
    }

    if (userInfo.user_type === 'delivery man') {

        return children
    }
    else {
        return <Navigate state={location.pathname} to='/signin'></Navigate>
    }
};

export default DeliveryRoute;