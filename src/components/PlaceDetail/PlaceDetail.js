import React from 'react';
import {View, Text, Button, Modal, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaceDetail = props => {
    return(
        <Modal>
            <Image source={props.place.image} style={{width: "100%", height: 200}} />
            <Text style={{textAlign: 'center', fontSize: 25}}>{props.place.value}</Text>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>
                    {
                        props.handleDeletePlace(props.place.key)
                    }
                    } >
                    <Icon name="trash" size={60} color="red" />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>props.handleHideModal()} >
                    <Icon name="times-circle" size={60} color="#4C6EF5" />
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default PlaceDetail;