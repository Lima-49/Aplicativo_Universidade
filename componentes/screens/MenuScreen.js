import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import menu_aluno from '../Aluno/cadastra_aluno'
import menu_disciplina from '../Disciplina/cadastra_disciplina'
import menu_historico from '../Historico/menu_historico'
import menu_professor from '../Professor/cadastra_professor'
import menu_turma from '../Turma/cadastra_turma'

const Pilha = createNativeStackNavigator();

function MenuSelector(props){

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                style = {{backgroundColor:'blue'}}
                title = "ALUNO"
                onPress = {()=>props.navigation.navigate('menu_aluno')} 
            />

            <Button
                style = {{backgroundColor:'green'}}
                title = "DISCIPLINA"
                onPress = {()=>props.navigation.navigate('menu_disciplina')} 
            />

            <Button
                style = {{backgroundColor:'blue'}}
                title = "HISTORICO"
                onPress = {()=>props.navigation.navigate('menu_historico')} 
            />

            <Button
                style = {{backgroundColor:'green'}}
                title = "PROFESSOR"
                onPress = {()=>props.navigation.navigate('menu_professor')} 
            />


            <Button
                style = {{backgroundColor:'blue'}}
                title = "TURMA"
                onPress = {()=>props.navigation.navigate('menu_turma')} 
            />

        </View>
    );
}

export default function MenuScreen() {
    return (
        <NavigationContainer independent={true}>
            <Pilha.Navigator>
                <Pilha.Screen name='MenuSelector' component={MenuSelector} options={{title:'Menu'}}/>
                <Pilha.Screen name='menu_aluno' component={menu_aluno}/>
                <Pilha.Screen name='menu_disciplina' component={menu_disciplina}/>
                <Pilha.Screen name='menu_historico' component={menu_historico}/>
                <Pilha.Screen name='menu_professor' component={menu_professor}/>
                <Pilha.Screen name='menu_turma' component={menu_turma}/>
            </Pilha.Navigator>
        </NavigationContainer>
    ); 
}