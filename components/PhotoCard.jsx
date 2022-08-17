import { View, Image, Text } from "react-native"
import { photoCardStyles } from "../assets/styles";

import { Avatar, Icon } from 'react-native-elements'

function PhotoCard ( { photo } ) { // passing through the photo prop
    const BASE_URL = 'https://source.unsplash.com/random?sig='
    

    return (
        <>
            <View style={photoCardStyles.cardContainer}>
                <View style={photoCardStyles.cardHeader}>
                    {/* avatar */}
                    <Avatar rounded size='small' source={{uri:`https://randomuser.me/api/portraits/men/${photo.id}.jpg`}}/>

                    <View style={photoCardStyles.cardHeaderText}>
                        <Text> header text </Text>
                        <Text style={photoCardStyles.cardLocation}> location </Text>
                    </View>
                </View>
                    <Icon name='code' />
            </View>
            
            <Image source={{ uri: BASE_URL + photo.id}} style={photoCardStyles.cardImage} />

            <Text style={photoCardStyles.cardText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis molestiae quod, at odio minus magni culpa! Numquam aut iure magnam pariatur, accusamus quia, voluptatem natus deleniti voluptate necessitatibus perspiciatis!
            </Text>

        </>
    )
}

export default PhotoCard