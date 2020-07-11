import {useEffect, useState} from 'react';
import axios from 'axios';

// Custom Hook yang juga menerapkan lifecycle melalui useEffect

export function useAxiosGet(url){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url)
            .then(response => {
               setRequest({
                   loading: false,
                   data: response.data.teams,
                   error: false
               }) 
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                }) 
            })
    }, [url])

    return request;
}