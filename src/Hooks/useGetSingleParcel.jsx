import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useGetSingleParcel = (id) => {
    const axiosSecure = useAxiosSecure()

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['single Parcel', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/singleparcel/?id=${id}`)
            return res.data
        }
    })
    return [data, isLoading, refetch]
};

export default useGetSingleParcel;