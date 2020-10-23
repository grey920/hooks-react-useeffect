import { useEffect, useState } from 'react';

import axios from 'axios';



const useAxios = (options, axiosInstance = axios) => {



    if (!options.url) {

        throw Error('url 누락');

    }

    const [state, setState] = useState({

        loading: true,

        error: null,

        data: null

    });



    useEffect(() => {

        axiosInstance(options)

            .then(data => {

                setState({

                    ...state,

                    loading: false,

                    data

                });

            })

            .catch(error => {

                setState({ ...state, loading: false, error })

            });

    }, []);



    return state;

};



export default useAxios; 