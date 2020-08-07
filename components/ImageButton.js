import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { styles } from '../Styles/styles'

const ImageButton = ({title, desctiption, onPress}) => {
    return (
        <>
            <TouchableOpacity onPress={onPress} style={styles.imageButton}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{desctiption}</Text>
            </TouchableOpacity>
        </>
    )
}

export default ImageButton
