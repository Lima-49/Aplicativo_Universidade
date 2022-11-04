import React from 'react'
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import cadastra_historico from '../Historico/cadastra_historico'
import edita_historico  from '../Historico/edita_historico'
import apaga_historico from '../Historico/apaga_historico'

const Pilha = createNativeStackNavigator();

function TelaMenu(props){
    return(
      <View>
          <Text>Clique em um dos botões abaixo para ver o exercício desejado</Text>
  
          <Button
                  style = {{backgroundColor:'blue'}}
                  title = "CADASTRA HISTORICO"
                  onPress = {()=>props.navigation.navigate('cadastra_historico')} 
          />
  
          <Button
                  style = {{backgroundColor:'green'}}
                  title = "EDITA HISTORICO"
                  onPress = {()=>props.navigation.navigate('edita_historico')} 
          />
  
          <Button
                  style = {{backgroundColor:'blue'}}
                  title = "APAGA HISTORICO"
                  onPress = {()=>props.navigation.navigate('apaga_historico')} 
          />
    </View>
    )
}


export default function App(){
        return(
    
            <NavigationContainer independent={true}>
                <Pilha.Navigator>
                    <Pilha.Screen name='TelaMenu' component={TelaMenu} options={{title:'Home'}}/>
                    <Pilha.Screen name='cadastra_historico' component={cadastra_historico}/>
                    <Pilha.Screen name='edita_historico' component={edita_historico}/>
                    <Pilha.Screen name='apaga_historico' component={apaga_historico}/>
                </Pilha.Navigator>
            </NavigationContainer>
        )
    }