import * as api from '../api';

export const signin = (formData,navigate) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);

        dispatch({type:'AUTH',data });

        navigate.push('/Feed');
    } catch (error) {
        console.log(error.message);
    }
}

export const signup = (formData,navigate) => async (dispatch) => {
    try {
        console.log(formData);

        const {data} = await api.signUp(formData);

        dispatch({type:'AUTH',data });
        

        navigate.push('/Feed');
    } catch (error) {
        console.log(error.message);
    }
}