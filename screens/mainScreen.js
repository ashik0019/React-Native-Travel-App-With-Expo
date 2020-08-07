import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import { styles } from "../Styles/styles"
import InputField from "../components/Input"
import ImageButton from '../components/ImageButton';
import Animated, { Easing } from 'react-native-reanimated';

const {height} = Dimensions.get('screen')

export default class MainScreen extends Component {
    state = {
        alignment: new Animated.Value(height)
    }

    AnimateHeader = () => {
        Animated.timing(this.state.alignment, {
            toValue: 200,
            duration: 700,
            easing: Easing.linear,
            //useNativeDriver: true
        }).start();
    }

    componentDidMount() {
        this.AnimateHeader();
    }


    render() {

        const AnimateHeader = {
            height: this.state.alignment
        }

        return (
            <View>
                <Animated.View style={[styles.header, AnimateHeader]}>
                    <View style={{ flex: 0.6, paddingTop: 40, }}>
                        <Text style={styles.headerText}>Find Your Next Trip!</Text>
                    </View>
                    <View style={{ flex: 0.35, alignItems: 'flex-end', paddingTop: 40, }}>
                        <Image source={require('../assets/images/profile2.png')} style={styles.headerImage} />
                    </View>

                </Animated.View>
               
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <InputField placeholder='search' />
                    </View>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageView}>
                            <Image source={require('../assets/images/1.webp')} style={styles.image} />
                            <ImageButton onPress={() => this.props.navigation.navigate('Luxury')} title="Luxury" desctiption="Stunning Places" />
                        </View>
                        <View style={styles.imageView}>
                            <Image source={require('../assets/images/2.webp')} style={styles.image} />
                            <ImageButton title="Family" desctiption="Love Everywhere" />
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <View style={styles.imageView}>
                            <Image source={require('../assets/images/3.webp')} style={styles.image} />
                            <ImageButton title="Backpacking" desctiption="Near River" />
                        </View>
                        <View style={styles.imageView}>
                            <Image source={require('../assets/images/4.webp')} style={styles.image} />
                            <ImageButton title="Spring" desctiption="Love Spring" />
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}


