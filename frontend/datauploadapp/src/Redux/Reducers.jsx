import { LOGIN, LOGOUT } from './Action_types'

let initialState = {
    loginStatus: false,
    user: "",
    token: ""
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

export {userReducers}