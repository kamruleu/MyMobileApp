import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = props => {
    return(
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styless.listItem}>
                <Image source={props.image} style={{height: 50, width:50}} />
                <Text style={{marginLeft: 15}}>{props.placeName}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styless = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5,
        flexDirection: "row"
    }
})

export default ListItem;