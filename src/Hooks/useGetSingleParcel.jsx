import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';
import { ContextAuth } from '../Context/Context';

const useGetSingleParcel = (id) => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(ContextAuth)

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['single Parcel', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/singleparcel/?id=${id}&email=${user.email}`)
            return res.data
        }
    })
    return [data, isLoading, refetch]
};

export default useGetSingleParcel;