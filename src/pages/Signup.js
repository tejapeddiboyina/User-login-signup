import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        {children}
    </TouchableWithoutFeedback>
);

export default class Singup extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Logo/>
                <Form type="Signup"/>
                <View style={styles.loginTextCont}>
                    <Text style={styles.loginText}>Already having account..!</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.loginButton}>Login</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#455a64'
    },
    loginTextCont: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginText: {
        fontSize: 13,
        color: 'rgba(255,255,255,0.6)'
    },
    loginButton: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: '500'
    }
})