import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Form extends React.Component {

    render() {
        return(
            <View style={Styles.container}>
                <TextInput style={Styles.inputBox}
                    placeholder="email"
                    placeholderTextColor = "#ffffff"    
                    keyboardType="email-address"
                />
                <TextInput style={Styles.inputBox}
                    placeholder="password"
                    placeholderTextColor = "#ffffff"
                    secureTextEntry={true}
                />
                <TouchableOpacity style={Styles.button}>
                    <Text style={Styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        marginVertical: 10,
        borderRadius: 25,
        width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        fontSize:16,
        color:'#ffffff',
        paddingHorizontal: 13,
        height: 40
    },
    button: {
        width: 300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 15,
        color: '#ffffff',
        textAlign: 'center'
    }
})