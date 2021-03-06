import { LOGIN, LOGOUT, GET_UPLOADED_DATA, REQUESTSENT, DATA_UPLOADED } from './Action_types'
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
const gettingdata = (Data) => {
    return {
        type: GET_UPLOADED_DATA,
        payload: Data
    }
}
const requestSent = () => {
    return {
        type: REQUESTSENT
    }
}
const dataUploaded = () => {
    return {
        type: DATA_UPLOADED
    }
}

// request for user login

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
            .catch(err => alert("invalid username"))
    };
}

// request for user signup

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


//  uploading file

const uploadFile = (data, token) => {
    return dispatch => {
        dispatch(requestSent())
        axios({
            method: "POST",
            url: 'http://localhost:5000/fileupload/files',
            headers: {
                'Authorization': token
            },
            data: data
        })
            .then((res) => {
                alert("successfully updated")
                dispatch(dataUploaded())
            }
            )

    }
}

// get uploaded data

const getData = (token) => {
    return dispatch => {
        dispatch(requestSent())
        axios({
            method: "GET",
            url: 'http://localhost:5000/fileupload/data',
            headers: {
                'Authorization': token
            }
        })
            .then((res) => dispatch(gettingdata(res.data)))
    }
}

export { loginUser, signupUser, logout, uploadFile, getData }