import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Label from './Label';
import {Color} from '../utils/color';

const {width} = Dimensions.get('window');
export default class SideMenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
    };
  }
  render() {
    var imageStyle = {};
    var image = require('./../assets/Images/email.png');

    if (this.props.type === 'email') {
      imageStyle = {width: 21, height: 15};
      image = require('./../assets/Images/email.png');
    } else if (this.props.type === 'location') {
      imageStyle = {width: 15, height: 18};
      image = require('./../assets/Images/Location_black_pin.png');
    } else if (this.props.type === 'bio') {
      imageStyle = {width: 18, height: 17};
      image = require('./../assets/Images/profile.png');
    } else if (this.props.type === 'help') {
      imageStyle = {width: 17, height: 17};
      image = require('./../assets/Images/help.png');
    } else if (this.props.type === 'password') {
      imageStyle = {width: 17, height: 23};
      image = require('./../assets/Images/lock.png');
    } else if (this.props.type === 'notification') {
      imageStyle = {width: 18, height: 21};
      image = require('./../assets/Images/bell.png');
    } else if (this.props.type === 'transaction') {
      imageStyle = {width: 17, height: 16};
      image = require('./../assets/Images/transaction.png');
    }

    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <View style={styles.imageVStyle}>
          <Image style={imageStyle} source={image} />
        </View>
        <View style={styles.subViewStyle}>
          <Label font12 ProximaNova_Semibold>
            {this.props.title}
          </Label>

          <Label
            style={{color: Color.TXTGRAY}}
            ml={10}
            font12
            ProximaNova_Regular>
            {this.props.value}
          </Label>
          {this.props.title === 'Notifications' && (
            <Switch
              ios_backgroundColor={Color.ORANGE}
              trackColor={Color.ORANGE}
              value={this.state.switchValue}
              onValueChange={switchValue => this.setState({switchValue})}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  imageVStyle: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.8 - 70,
  },
});
