import React from 'react';
import {View, Text, Button, Modal, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlaceDetail = props => {
    return(
        <Modal>
            <Image source={props.place.image} style={{width: "100%", height: 200}} />
            <Text style={{textAlign: 'center', fontSize: 25}}>{props.place.value}</Text>
            <View>
                <Icon name="trash" size={30} color="red" />
                <Button title="Delete" color="red" onPress={()=>
                    {
                        props.handleDeletePlace(props.place.key)
                    }
                    } />
                <Button title="Close" onPress={()=>props.handleHideModal()} />
            </View>
        </Modal>
    )
}

export default PlaceDetail;