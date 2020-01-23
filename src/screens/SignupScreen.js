import React,{  useContext } from 'react';
import { View,StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/navLink';

const SignupScreen = ({navigation}) =>{

    const {state,signup,clearErrorMessage} = useContext(AuthContext);

    return(
    <View style={styles.container}>
        <NavigationEvents
            onWillFocus={clearErrorMessage}        
        />
       <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup}
       />
       <NavLink 
            text="Already have an account? Sign in instead!" 
            routeName='Signin'/>
    </View>
    );
}

SignupScreen.navigationOptions= () =>{
    return {
        header:null
    };
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:200
    }
});

export default SignupScreen;