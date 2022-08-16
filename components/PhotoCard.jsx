import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text} from "react-native"

function PhotoCard ( { photo } ) { // passing through the photo prop
    return (
        <View>
            <Text>{photo.description}</Text>
        </View>
    )
}

export default PhotoCard