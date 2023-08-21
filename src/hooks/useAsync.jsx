import { useEffect, useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                data: null,
                error: null,
                loading: true
            };
        case 'ERROR':
            return {
                data: null,
                error: action.error,
                loading: false
            };
        case 'SUCCESS':
            return {
                data: action.data,
                error: null,
                loading: false
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback, deps=[], skip=false) {
    const [state, dispatch] = useReducer(reducer,{
        data: null,
        error: false,
        loading: false
    });

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({type:'SUCCESS',data: data});
        } catch (error) {
            dispatch({type:'ERROR',error: error});
        }
    }
    
    useEffect(() => {
        if(skip) return;
        fetchData();
        // eslint-disable-next-line
    }, deps);

    return [state, fetchData, dispatch];
}

export default useAsync;