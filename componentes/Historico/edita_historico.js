import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';

export default function Home(){


    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri:"https://ibb.co/PwM9bm9"}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#27282D',
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    image:{
        width:500, 
        eight:500, 
        resizeMode:'contain',
        borderRadius:12,
    }
})