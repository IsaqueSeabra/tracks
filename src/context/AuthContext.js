import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContex';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state,action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage:action.payload};
        case 'signin':
            return { errorMessage:'', token:action.payload };
        case 'remove_error':
            return {...state,errorMessage:''};
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return async ({email,password}) =>{
        try {
            const response = await trackerApi.post('/signup',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload: response.data.token});
            navigate('TrackList');
        } catch (error) {
            dispatch({type:'add_error',payload:'Something went wrong with sign up'});
        }
    }
}


const signin = (dispatch) => {
    return async ({email,password}) =>{
        try{
            const response = await trackerApi.post('/signin',{email,password});
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload: response.data.token});
            navigate('TrackList');
        }catch(error){
            dispatch({type:'add_error',payload:'Something went wrong with sign up'});
        }
    }
}


const sigout = (dispatch) => {
    return () =>{
        
    }
}

const clearErrorMessage =(dispatch) =>{
    return () =>{
        dispatch({type:'remove_error',payload:''});        
    }
}
export const {Provider,Context} = createDataContext(
    authReducer,
    {signup,signin,sigout,clearErrorMessage},
    { token:null,errorMessage:'' }
);