import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import { ContextAuth } from '../Context/Context';

const useAllParcel = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(ContextAuth)

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['AllParcel'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allparcel/?email=${user.email}`)
            return res.data
        }
    })
    return [data, isLoading, refetch]
};

export default useAllParcel;