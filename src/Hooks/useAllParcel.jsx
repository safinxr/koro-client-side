import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import { ContextAuth } from '../Context/Context';

const useAllParcel = (route) => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(ContextAuth)

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['AllParcel'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/${route}/?email=${user.email}`)
            return res.data
        }
    })
    return [data, isLoading, refetch]
};

export default useAllParcel;