import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { ContextAuth } from '../Context/Context';
import { useQuery } from 'react-query';

const useBookedParcel = () => {
    const { user } = useContext(ContextAuth)
    const axiosSecure = useAxiosSecure()

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['bookedParcel'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookedparcel/?email=${user.email}`)
            return res.data
        }
    })
    return [data, isLoading, refetch]
};

export default useBookedParcel;