import { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { ContextAuth } from '../Context/Context';
import { useQuery } from 'react-query';

const useUserType = () => {
    const { user } = useContext(ContextAuth)
    const axiosPublic = useAxiosPublic()

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/?email=${user.email}`)
            return res.data
        }
    })
    return [data, isLoading, refetch]
    
};

export default useUserType;