import React from 'react';
import { View, Text,TextInput, StyleSheet } from 'react-native';

const Input = ({placeholder,label, value, onChangeText, secureTextEntry}) => {
    const {inputStyle,labelStyle, containerStyle} = styles
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
             secureTextEntry={secureTextEntry}
             placeholder={placeholder}
             autoCorrect={false}
             style={inputStyle} 
             value={value}
             onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 3,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height: 20,
        width: 100
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 25,
        flex: .9
    },
    containerStyle: {
        flexDirection: 'row',
        height: 40,
        flex: 1,
        alignItems: 'center'
    }
})

export {Input};
