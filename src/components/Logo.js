import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends React.Component{

    render() {
        return(
            <View style={Styles.container}>
                <Image style={{width: 300, height: 200}}
                    source={require('../images/infinity.jpg')} />
                <Text style={Styles.logoText}>Welcome to my app..!</Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    }
});