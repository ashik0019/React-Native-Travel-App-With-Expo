import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    textView: {
        position: 'absolute',
        left: width / 10,
        bottom: height / 20,
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    description: {
        color: 'white',
        marginVertical: 10,
    },
   

})