import React, {Component} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'; 

export default class LoginForm extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    placeholder="Enter username"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                /> 
                <TextInput 
                    style={styles.input} 
                    underlineColorAndroid='transparent'
                    placeholder="Enter password"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                /> 
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 15,
        color: 'white',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    }
});