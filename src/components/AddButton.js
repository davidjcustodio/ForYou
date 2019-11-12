import React, {Component} from 'react';
import {Animated, TouchableHighlight, View, Image} from 'react-native';
import ViewOverflow from 'react-native-view-overflow';
const SIZE = 80;
class AddButton extends Component {
  mode = new Animated.Value(0);
  toggleView = () => {
    Animated.timing(this.mode, {
      toValue: this.mode._value === 0 ? 1 : 0,
      duration: 300,
    }).start();
  };
  render() {
    const firstX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [20, -40],
    });
    const firstY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30],
    });
    const secondX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 20],
    });
    const secondY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -55],
    });
    const thirdX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 80],
    });
    const thirdY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30],
    });
    const opacity = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });
    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });
    return (
      <ViewOverflow
        style={{
          //   position: 'relative',
          alignItems: 'center',
          top: -60,
          backgroundColor: 'red',
          height: 100,
          bottom: 30,
        }}>
        <TouchableHighlight
          onPress={this.toggleView}
          underlayColor="#2882D8"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            backgroundColor: '#48A2F8',
          }}>
          <Animated.View
            style={{
              transform: [{rotate: rotation}],
            }}>
            <Image
              style={{width: 80, height: 80}}
              source={require('./../assets/Images/add_round.png')}
            />
          </Animated.View>
        </TouchableHighlight>
      </ViewOverflow>
    );
  }
}
export {AddButton};
