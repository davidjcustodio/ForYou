import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
import {Color} from '../utils/color';
import {fontX17} from '../utils/theme';

const {width} = Dimensions.get('window');

export default class SearchBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.commonViewStyle,
            {
              marginLeft: 5,
            },
          ]}>
          <Image
            style={styles.imageStyle}
            source={require('./../assets/Images/search.png')}
          />
        </View>
        <TextInput
          onChangeText={this.props.onChangeText}
          style={styles.inputStyle}
        />
        <TouchableOpacity
          style={[
            styles.commonViewStyle,
            {
              marginRight: 5,
            },
          ]}>
          <Image
            style={styles.imageStyle}
            source={require('./../assets/Images/clear.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 25,
    height: 50,
    borderWidth: 1,
    borderColor: Color.ORANGE,
    backgroundColor: Color.WHITE,
    flexDirection: 'row',
  },
  commonViewStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  inputStyle: {
    height: 50,
    width: width - 150,
    fontFamily: 'ProximaNova-Regular',
    fontSize: fontX17,
  },
});
