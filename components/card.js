import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import { styles } from '../Styles/styles'

export default function Card({ title, description, location, onPress, image }) {

    const alignment = new Animated.Value(400)

    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.card}>
                <Animated.View style={[{flexDirection: "row"}]}>
                    <View style={styles.cardImage}>
                        <Image style={{width: '100%', height: '100%', borderRadius:20}} source={image} />
                    </View>
                    <View style={{flex: 0.6, marginHorizontal: 12, overflow: 'hidden',}}>
                        <Text style={styles.cardTitle}>{title}</Text>
                        <Text style={styles.cardLocation}>{location}</Text>
                        <Text style={styles.cardDescription}>{description}</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </>
    )
}
