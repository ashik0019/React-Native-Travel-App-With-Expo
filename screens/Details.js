import React, { Component } from 'react'
import { Text, View, Animated, ImageBackground, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("screen");

export default class Details extends Component {
    state = {
        data: {},
        alignment: new Animated.Value(height),
    }

    setInitalState = () => this.setState({data: this.props.route.params.card})

    componentDidMount() {
        this.setInitalState();
    }

    render() {
        return (
            <View>
                <Animated.View>
                    <ImageBackground
                        style={{width: "100%", height: "100%"}}
                        source={
                            this.state.data.image
                                ? this.state.data.image
                                : require('../assets/images/1.webp')
                        }
                    />
                </Animated.View>
            </View>
        )
    }
}
