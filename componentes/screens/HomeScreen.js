import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {


    const [dados, setDados] = useState([]);

    const getDados = async ()=>{

        try{
        const resposta = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/1");
        const dados = await resposta.json()
        console.log(dados);
        console.log(dados.image_link)
        setDados(dados);
        }catch(error){
        console.log('Ferrou! Deu um erro.')
        }
    }

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

            <DisplayAnImage/>

            <Text style={styles.font}>
                Vitor Augusto 200327
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#27282D',
        alignItems:'center',
        justifyContent:'center',
        padding:40
    },
    font:{
        fontSize: 22, 
        fontWeight: 'bold',
        color:'white',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
})