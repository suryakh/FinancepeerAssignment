import { LOGIN, LOGOUT, REQUESTSENT, GET_UPLOADED_DATA, DATA_UPLOADED } from './Action_types'

let initialState = {
    loginStatus: false,
    user: "",
    token: "",
}
let datastate = {
    requestStatus: false,
    userData: [],
    dataUploaded: false
}

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                loginStatus: true,
                user: action.payload.username,
                token: action.payload.token
            }
        }
        case LOGOUT: {
            return {
                ...state,
                loginStatus: false,
                user: "",
                token: ""
            }
        }
        default: {
            return state
        }
    }
}

const dataReducers = (state = datastate, action) => {
    switch (action.type) {
        case REQUESTSENT: {
            return {
                ...state,
                requestStatus: false,
                dataUploaded: true
            }
        }
        case GET_UPLOADED_DATA: {
            return {
                ...state,
                userData: action.payload,
                requestStatus: true,
                dataUploaded: false
            }
        }
        case DATA_UPLOADED: {
            return {
                ...state,
                requestStatus: true,
                dataUploaded: false
            }
        }
        default:
            return state
    }
}

export { userReducers, dataReducers }