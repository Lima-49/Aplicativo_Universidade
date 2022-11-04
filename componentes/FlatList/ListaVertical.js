import React from "react";
import { FlatList, View, StyleSheet, Text} from "react-native";

const renderiza = ({item}) =>{
    return(
        <View style={styles.list}>
            <Text style={styles.item}> {item.matricula} </Text> 
            <Text style={styles.item}> {item.nome} </Text> 
        </View>
    )
}

const ListaVertical = ({data}) => {
    return (
        <FlatList>
            data = {data}
            keyExtractor = {(item) => String(item)}
            renderItem = {renderiza}
        </FlatList>
    )
}
const styles  = StyleSheet.create({
    list:{
        backgroundColor:'#11C7F5',
    },
    item:{
        flex:1, 
        color:'white'
    }
})

export default ListaVertical