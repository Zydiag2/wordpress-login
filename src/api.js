import axios from 'axios'
const BASE_URL = 'https://kuchkuch.000webhostapp.com'; // Replace with your actual WordPress site URL

export const signup = async (email, username, password) => {
    // const response = await axios.post(`${BASE_URL}/wp-json/custom-auth/v1/signup`,
    //    {
    //     email,
    //     username,
    //     password
    //    },
    //    {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   }
    // )
    // return response.data;

    const response = await fetch(`${BASE_URL}/wp-json/custom-auth/v1/signup`, {
        method: 'POST',
        body: JSON.stringify({ email, username, password }), // JSON.stringify ensures the body is correctly formatted
    });
    return response.json();
};

export const login = async (username, password) => {
    const response = await fetch(`${BASE_URL}/wp-json/custom-auth/v1/login`, {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
};

// export const getUserInfo = async (token) => {
//     const response = await fetch(`${BASE_URL}/wp-json/custom-auth/v1/user`, {
//         method: 'GET',
//         // headers: {
//         //     'Authorization': token,
//         //     'Content-Type': 'application/json',
//         // },
//     });
//     return response.json();
// };

export const getUserInfo = async (token) => {
    try {
        const url = `${BASE_URL}/wp-json/custom-auth/v1/user?token=${encodeURIComponent(token)}`;
        const response = await axios.get(url);
        return response.data;
        // const response = await axios.get(`${BASE_URL}/wp-json/custom-auth/v1/user`, {
        //     headers: {
        //         'Authorization': token,
        //         'Content-Type': 'application/json',
        //     }
        // });
        // return response.data;
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
};
