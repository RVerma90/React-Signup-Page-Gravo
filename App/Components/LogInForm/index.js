import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginForm extends React.Component {
    render() {
        return (
            <View style={styles.loginFormContainer}>
                <TextInput underlineColorAndroid='transparent' placeholder='Email' style={styles.texInput} />
                <TextInput underlineColorAndroid='transparent' placeholder='Password' style={styles.texInput} />

                <TouchableOpacity style={styles.loginButton}>
                    <Text>Login In</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.registerButton}>
                    <Text>Sign Up</Text>
                 </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPasswordButton}>
                    <Text>Forgot Password</Text>
                 </TouchableOpacity>                                  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginFormContainer: {
        alignItems: 'center',
    },
    texInput: {
        color: '#fff',
        alignSelf: 'stretch',
        padding: 12,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255, 0.4)',
        borderColor: '#fff',
    },
    loginButton: {
        backgroundColor: 'rgba(255,255,255, 0.6)',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 14,
        marginTop: 10,
    },
    registerButton: {
        backgroundColor: 'rgba(205,205,205, 0.6)',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 14,
        marginTop: 10,
    },
    forgotPasswordButton: {
        backgroundColor: 'rgba(255,100,100, 0.8)',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 14,
        marginTop: 10,
    }    
})