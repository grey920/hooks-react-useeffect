import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (options, page, axiosInstance = axios) => {
    if (!options.url) {
        throw Error("url 누락"); //에러처리 (return을 던졌을때 만약 useEffect위에 return을 던지면 에러가 뜬다. 에러처리로 하자)
    }



    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });

    const [trigger, setTrigger] = useState(0);


    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());//Date.now() : 시분초가 달라지기 때문에 트리거를 호출할 때마다  refetch하게 만든다 (refetch의 조건)

    };

    useEffect(() => {

        axiosInstance(options) //option안에 URL
            .then((data) => {
                setState({
                    ...state,
                    loading: false, // true -> false
                    data, // null -> 영화데이터
                });
                console.log(page);
            })
            .catch((error) => {
                setState({ ...state, loading: false, error });
            });

    }, [trigger]);
    return { ...state, refetch };
};

export default useAxios;