import React,{  useContext } from 'react';
import { View,StyleSheet } from 'react-native';
import {NavigationEvents} from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/navLink';

const SigninScreen = ({navigation}) =>{

    const {state,signin,clearErrorMessage} = useContext(AuthContext);

    return(
    <View style={styles.container}>
        <NavigationEvents
            onWillFocus={clearErrorMessage}        
        />
       <AuthForm
            headerText="Sign In for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign In"
            onSubmit={signin}
       />
       <NavLink 
            text="Don't have an account? Sign up instead!" 
            routeName='Signup'/>
    </View>
    );
}

SigninScreen.navigationOptions= () =>{
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

export default SigninScreen;