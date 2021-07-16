import {useState, useEffect} from 'react';
import axios from "axios";

axios.defaults.baseURL = `http://localhost:5000/api/v1/stores`;

const useAxios = (axiosParams) => {
    const [state, setState] = useState({
        response: [],
        error: "",
        // loading: true
    })

    const fetchData = async (params) => {
        try {
            const res = await axios.request(params);
            setState({
                response: res.data.data.products
            })
        } catch (err) {
            setState({
                error: err
            })
        }
    }

    useEffect(() => {
        fetchData(axiosParams);
    }, []);

    const {response, error} = state;
    return { response, error};
}

export default useAxios;
