import { LOGIN, LOGOUT } from './Action_types'
import axios from 'axios'

const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}
const logout = () => {
    return {
        type: LOGOUT
    }
}

const loginUser = (data) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/auth/login',
            data: data
        })
            .then(res => {
                if (res.data.token) {
                    dispatch(login(res.data))
                }
            }
            )
            .catch(err=>alert("invalid username"))
    };
}

const signupUser = (data) => {
    return dispatch => {
        axios({
            method: "POST",
            url: "http://localhost:5000/auth/signup",
            data: data,
        })
            .then((res) => {
                alert("user suceessfully registered")
            })
            .catch((res) => {
                console.log("error")
            })
    }
}

const uploadFile = (data,token) =>{
    return dispatch =>{
        axios({
            method: "POST",
            url: 'http://localhost:5000/fileupload/files',
            headers: {
                'Authorization': token
            },
            data: data
        })
        .then((res)=>alert("successfully updated"))

    }
}

export {loginUser,signupUser,logout,uploadFile}