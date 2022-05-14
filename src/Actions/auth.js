
import * as api from '../API;'
import { AUTH } from '../const/actTypes';

export const signin = (formData, history) => async (dispatch) => {
    
     try {
         //Allow for the user to Log in - Calls
         const { data } = await api.signin(formData);
         dispatch({ type: AUTH, data });

         history.push('/')
     } catch (error) {
         console.log(error);
     }
}; 

export const signup = (formData, history) => async (dispatch) => {
    try {
        // log in the user..
        history.push('/')
    } catch (error) {
        console.log(error);
    }
};