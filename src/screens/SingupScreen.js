import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SingupScreen = ({navigation}) =>{
    return(
    <>
        <Spacer>
            <Text h3>Sing Up for Tracker</Text>
        </Spacer>
        <Input label="Email"/>
        <Spacer/>
        <Input label="Password"/>
        <Spacer>
            <Button title="Sing Up"/>
        </Spacer>
    </>
    );
}

const styles = StyleSheet.create({

});

export default SingupScreen;