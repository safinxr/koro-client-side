import { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { ContextAuth } from '../Context/Context';
import { useQuery } from 'react-query';

const useAllDeliveryMan = () => {
    const { user } = useContext(ContextAuth)
    const axiosPublic = useAxiosPublic()

    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['deliveryMan'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/alldeliveryman/?email=${user.email}`)
            return res.data
        }
    })
    return [data, isLoading, refetch]
};

export default useAllDeliveryMan;