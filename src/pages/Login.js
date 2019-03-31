import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';

const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        {children}
    </TouchableWithoutFeedback>
);

export default class Login extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView style={Styles.container} behavior="padding" enabled>
                <Logo />
                <Form type="Login"/>
                <View style={Styles.signupTextCont}>
                    <Text style={Styles.signupText}>Don't have an account..!</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}><Text style={Styles.signupButton}>Signup</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#455a64',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    },
    signupTextCont: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    signupText: {
        color:'rgba(255,255,255,0.6)',
        fontSize:16
    },
    signupButton: {
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
})