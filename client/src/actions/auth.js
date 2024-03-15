import { AUTH } from '../constants/actionTypes';
import { message } from "antd";
import * as api from '../api/index.js';
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        navigate('/');
    } catch (error) {
        message.error(error.message);

    }
}
export const signup = (formData, navigate) => async (dispatch) => {
    try {
        
        const { data }  = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        navigate('/');
    } catch (error) {
        console.log(error);
        message.error(error.message);

    }
}