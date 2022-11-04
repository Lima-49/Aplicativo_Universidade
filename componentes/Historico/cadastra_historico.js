import React, {useState} from 'react'
import {View, Text, FlatList, TextInput, Button, StyleSheet} from 'react-native'
import {getFirestore, collection, getDocs, addDoc, doc} from 'firebase/firestore'
import db from '../../config'
import ListaVertical from '../FlatList/ListaVertical'

export default function App(props){

    const [cod_historico, setCodigo] = useState("")
    const [matricula, setMatricula] = useState("")
    const [cod_turma, setTurma] = useState("")
    const [frequencia, setFrequencia] = useState("")
    const [nota, setNota] = useState("")

    const [vetor, setVetor] = useState([]);

    const sendData = async(table_name) => {
        await addDoc(collection(db, table_name),{
            cod_historico: parseInt(cod_historico),
            cod_turma: parseInt(cod_turma),
            frequencia: parseInt(frequencia),
            matricula: parseInt(matricula),
            nota: parseInt(nota)
        });
    }

    const populateVetor = () =>{
        //Adiciona os dados insiridos pelo usuario no vetor
        const auxVex = {cod_historico:cod_historico, cod_turma:cod_turma, frequencia:frequencia, matricula:matricula}
        vetor.push(auxVex)
        const copyVetor = [...vetor]
        setVetor(copyVetor)

        //Salva os dados informados no banco de dados
        sendData('Historico')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>CADASTRA ALUNO</Text>

            <TextInput placeholder='Informe o numero relacionado ao historico' style={styles.textInput} onChangeText={(text) => {setCodigo(text)}}/>
            <TextInput placeholder='Informe o codigo da turma' style={styles.textInput} onChangeText={(text) => {setTurma(text)}}/>
            <TextInput placeholder='Informe a frequencia do aluno' style={styles.textInput} onChangeText={(text) => {setFrequencia(text)}}/>
            <TextInput placeholder='Informe o numero da matricula' style={styles.textInput} onChangeText={(text) => {setMatricula(text)}}/>
            <TextInput placeholder='Informe a nota nessa materia' style={styles.textInput} onChangeText={(text) => {setNota(text)}}/>
            
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