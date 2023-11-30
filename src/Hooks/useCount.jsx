import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from 'react-query';

const useCount = (url, keyName) => {
    const axiosPublic = useAxiosPublic()
    const { data = {}, isLoading, refetch } = useQuery({
        queryKey: [keyName],
        queryFn: async () => {
            const res = await axiosPublic.get(url)
            return res.data
        }
    })
    return [data, isLoading, refetch]
};

export default useCount;