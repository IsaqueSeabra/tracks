import React from 'react';
import {View,StyleSheet,Button} from 'react-native';
import {Text} from 'react-native-elements';

const TrackListScreen = ({navigation}) =>{
    return(
        <>
            <Text h1>TrackListScreen</Text>        
            <Button title="Go To Track Detail" onPress={ () => navigation.navigate('TrackDetail')}/>
        </>
    );
}

const styles = StyleSheet.create({

});

export default TrackListScreen;