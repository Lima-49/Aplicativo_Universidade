import React, {useState} from 'react'
import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native'
import {getFirestore, collection, getDocs, addDoc, doc} from 'firebase/firestore'
import db from '../../config'
import ListaVertical from '../FlatList/ListaVertical'

export default function App(props){

    const [professor, setProfessor] = useState("");
    const [nome, setNome] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [vetor, setVetor] = useState([]);

    const sendData = async(table_name) => {
        await addDoc(collection(db, table_name),{
            cod_prof: parseInt(professor),
            nome:nome,
            cidade:cidade,
            endereco: endereco,
        });
    }

    const populateVetor = () =>{
        //Adiciona os dados insiridos pelo usuario no vetor
        const auxVex = {professor:professor, nome:nome}
        vetor.push(auxVex)
        const copyVetor = [...vetor]
        setVetor(copyVetor)

        //Salva os dados informados no banco de dados
        sendData('Professor')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>CADASTRA PROFESSOR</Text>

            <TextInput placeholder='Informe o codigo do professor' style={styles.textInput} onChangeText={(text) => {setProfessor(text)}}/>
            <TextInput placeholder='Informe o nome do professor' style={styles.textInput} onChangeText={(text) => {setNome(text)}}/>
            <TextInput placeholder='Informe sua cidade' style={styles.textInput} onChangeText={(text) => {setCidade(text)}}/>
            <TextInput placeholder='Informe seu endereço' style={styles.textInput} onChangeText={(text) => {setEndereco(text)}}/>
            
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