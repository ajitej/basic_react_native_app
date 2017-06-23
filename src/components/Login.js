import React, {Component} from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import LoginForm from './LoginForm';

export default class Login extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require('../../images/cat.png')} style={styles.image} />
                    <Text style={styles.title}>A very basic app using react native.</Text>
                </View> 
                <View style={styles.formContainer}>
                    <LoginForm></LoginForm>
                </View>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    image: {
        width: 150,
        height: 150
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer: {

    },
    title: {
        color: 'white'
    }
});