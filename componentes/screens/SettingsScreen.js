import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

export default function DetailsScreen({ navigation }) {

    const DisplayAnImage = () => {
        return (
          <View style={styles.container}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
        );
      }

    return (
        <View style={styles.container}>
            <Text style={styles.font}>
                Vitor Augusto de Lima Soares
            </Text>
            <Text style={styles.font}>
                200327
            </Text>
            <DisplayAnImage/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#27282D',
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    font:{
        fontSize: 26, 
        fontWeight: 'bold',
    },
    tinyLogo: {
        width: 200,
        height: 200,
    },
    logo: {
        width: 66,
        height: 58,
    },
})