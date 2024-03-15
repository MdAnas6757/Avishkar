import axios from 'axios';

// No need for API.create if you're using axios directly

export const signIn = (formData) => {
    return axios({
        method: 'post',
        url: 'http://localhost:5000/user/signin',
        data: formData
    });
};

export const signUp = (formData) => {
    return axios({
        method: 'post',
        url: 'http://localhost:5000/user/signup',
        data: formData
    });
};
