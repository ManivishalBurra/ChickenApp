import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
 
export default function TextInput({ text, onPress,width, height}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={[styles.button,{width: width, height: height}]}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        margin:5
    },
    buttonText: {
        color:"white",
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
});
