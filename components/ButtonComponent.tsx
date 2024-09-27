import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface ButtonComponentProps {
    title: string;
    isPressed: boolean;
    onPress: () => void;
}

const ButtonComponent:
React.FC<ButtonComponentProps> = ({ title, isPressed, onPress }) => {
return (
    <TouchableOpacity style={[ styles.button, { backgroundColor: isPressed ? 'darkgrey' : 'lightgrey'}]}
       onPress={onPress} >
        <Text style={styles.buttonText}>{ title }</Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 20,
        borderRadius: 10,
        margin: 10,
        width: 300,
      },
      buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
      }
});

export default ButtonComponent;