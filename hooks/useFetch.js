import { useState, useEffect } from 'react';
import axios from 'axios';

import { useData,useProcessedData } from './useData'

const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: endpoint,
    }

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options);

            useData(response.data)
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error)
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, reFetch }
}

export default useFetch;