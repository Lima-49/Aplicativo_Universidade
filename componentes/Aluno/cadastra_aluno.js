import React, {useState} from 'react'
import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native'
import {getFirestore, collection, getDocs, addDoc, doc} from 'firebase/firestore'
import db from '../../config'
import ListaVertical from '../FlatList/ListaVertical'

export default function App(){

    const [nome, setNome] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [matricula, setMatricula] = useState("");
    const [foto, setFoto] = useState("");
    const [vetor, setVetor] = useState([]);

    const sendData = async() => {
        await addDoc(collection(db, 'Aluno'),{
            matricula: parseInt(matricula),
            nome:nome,
            cidade:cidade,
            endereco:endereco,
            foto:foto
        });
    }

    const populateVetor = () =>{
        //Adiciona os dados insiridos pelo usuario no vetor
        const auxVex = {matricula:matricula, nome:nome}
        vetor.push(auxVex)
        const copyVetor = [...vetor]
        setVetor(copyVetor)

        //Salva os dados informados no banco de dados
        sendData()
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>CADASTRA ALUNO</Text>

            <TextInput placeholder='Informe o numero da sua matricula' style={styles.textInput} onChangeText={(text) => {setMatricula(text)}}/>
            <TextInput placeholder='Informe seu nome' style={styles.textInput} onChangeText={(text) => {setNome(text)}}/>
            <TextInput placeholder='Informe sua cidade' style={styles.textInput} onChangeText={(text) => {setCidade(text)}}/>
            <TextInput placeholder='Informe seu endereço' style={styles.textInput} onChangeText={(text) => {setEndereco(text)}}/>
            <TextInput placeholder='Link da sua foto de matricula' style={styles.textInput} onChangeText={(text) => {setFoto(text)}}/>
            
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