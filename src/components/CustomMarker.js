import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Label from './Label';
import {Color} from '../utils/color';

class CustomMarker extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./../assets/Images/round.png')}
          resizeMode="contain"
        />
        <Label style={{color: Color.TXTGRAY}} ProximaNova_Bold font12 mt={10}>
          {this.props.title}
        </Label>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
  },
  container: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomMarker;
