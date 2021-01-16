import * as type from "./loginActionTypes";
import axios from "axios";
const types = "Student";
export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

   
    const body = JSON.stringify({ email, password, type });

    await axios
        .post("url", body, config)
        .then(async res => {
            await dispatch({
                type: types.LOGIN_SUCCESS,
                payload: res.data,
            });
            // await dispatch(clearErrors());
        })
        .catch(err => {
            dispatch({
                type: types.LOGIN_FAILURE,
            });
            // dispatch(
            //     returnErrors(
            //         err.response.data,
            //         err.response.status,
            //         "LOGIN_FAILURE"
            //     )
            // );
        });
};

export const register = ({ email, name, department, password, date, month, year, rollno }) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ email, name, department, password, date, month, year, rollno, type });
    await axios
        .post("url", body, config)
        .then(async res => {
            await dispatch({
                type: types.REGISTER_SUCCESS,
                payload: res.data,
            });
            // await dispatch(clearErrors());
        })
        .catch(err => {
            // dispatch(
            //     // returnErrors(
            //     //     err.response.data,
            //     //     err.response.status,
            //     //     "REGISTER_FAILURE"
            //     // )
            // );
            dispatch({
                type: types.REGISTER_FAILURE,
                payload: err.response.data,
            });
        });
};
