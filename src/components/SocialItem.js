import React, {Component} from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Label from './Label';
import {Color} from '../utils/color';
const {width} = Dimensions.get('window');

export default class SocialItem extends Component {
  render() {
    var imageStyle = {};
    var image = require('./../assets/Images/twitter.png');

    if (this.props.type === 'twitter') {
      imageStyle = {width: 22, height: 18};
      image = require('./../assets/Images/twitter.png');
    } else if (this.props.type === 'instagram') {
      imageStyle = {width: 22, height: 22};
      image = require('./../assets/Images/instagram.png');
    } else if (this.props.type === 'youtube') {
      imageStyle = {width: 22, height: 17};
      image = require('./../assets/Images/youtube.png');
    }

    return (
      <View style={styles.container}>
        <Image style={imageStyle} source={image} />
        <Label
          ml={10}
          style={{color: Color.INACTIVE}}
          font14
          ProximaNova_Semibold>
          {this.props.profileName}
        </Label>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginTop: 15},
  subView: {
    width: width - 40,
    marginLeft: 20,
  },
});
