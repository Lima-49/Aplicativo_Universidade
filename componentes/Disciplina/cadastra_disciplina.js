import React, {useState} from 'react'
import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native'
import {getFirestore, collection, getDocs, addDoc, doc} from 'firebase/firestore'
import db from '../../config'
import ListaVertical from '../FlatList/ListaVertical'

export default function App(props){
    
    const [cod_disc, setDisciplina] = useState("");
    const [nome, setNome] = useState("");
    const [carga_horaria, setHora] = useState("");
    const [vetor, setVetor] = useState([]);

    const sendData = async(table_name) => {
        await addDoc(collection(db, table_name),{
            cod_disc: parseInt(cod_disc),
            nome:nome,
            carga_horaria:parseInt(carga_horaria)
        });
    }

    const populateVetor = () =>{
        //Adiciona os dados insiridos pelo usuario no vetor
        const auxVex = {cod_disc:cod_disc, nome:nome}
        vetor.push(auxVex)
        const copyVetor = [...vetor]
        setVetor(copyVetor)

        //Salva os dados informados no banco de dados
        sendData('Disciplina')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>CADASTRA DISCIPLINA</Text>

            <TextInput placeholder='Informe o código da disciplina' style={styles.textInput} onChangeText={(text) => {setDisciplina(text)}}/>
            <TextInput placeholder='Informe o nome da disciplina' style={styles.textInput} onChangeText={(text) => {setNome(text)}}/>
            <TextInput placeholder='Informe a carga horaria da disciplina' style={styles.textInput} onChangeText={(text) => {setHora(text)}}/>

            <Button 
                title="Cadastrar"
                color='#11C7F5'
                onPress = {populateVetor}
            />

            <ListaVertical data={vetor}/>

        </View>
    )
}


const styles = StyleSheet.create({
    title:{
        color:'#11C7F5',
        fontSize:20,
    },
    container:{
        flex:1,
        backgroundColor:'#27282D',
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    textInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:10,
        marginBottom:15,
    }
})