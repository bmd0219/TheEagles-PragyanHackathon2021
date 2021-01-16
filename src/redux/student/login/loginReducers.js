import * as type from "./loginActionTypes";

const initialState = {
    name: null,
    email: null,
    department: null,
    date: null,
    month: null,
    year: null,
    address: null,
    rollno:null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case type.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
            };

        case type.REGISTER_SUCCESS:
            return {
                ...state,
                registerMessage: action.payload.msg,
            };

        
        case type.LOGIN_FAILURE:

        case type.REGISTER_FAILURE:
            return {
                ...state,
                token: null,
                user: null,
                class: null,
                isAuthenticated: false,
                registerMessage: null,
                resend: action.payload.resend,
            };

        default: 
            return state;
    }
}
