import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import {styles} from '../Styles/styles'

export default function Input({placeholder, onChangeText}){
    return (
        <>
            <View style={styles.inputContainer}>
                <FontAwesome5 style={{position: 'absolute',left:10, top: 17,color: '#aaa'}} name="search" size={20} />
                <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='#aaa' />
            </View>
        </>
    )
}

