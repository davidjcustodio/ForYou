import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, Image} from 'react-native';
import {Color} from '../utils/color';
import Label from './Label';
const {width} = Dimensions.get('window');
export default class KButton extends React.PureComponent {
  render() {
    let stylesArray = [];
    stylesArray.push({
      marginTop: this.props.mt,
      marginBottom: this.props.mb,
      marginLeft: this.props.ml,
      marginRight: this.props.mr,
    });
    stylesArray.push(this.props.style);

    var icon = this.props.icon;
    var iconStyle = {};

    if (this.props.icon === 'mail') {
      icon = require('./../assets/Images/mail.png');
      iconStyle = {width: 25, height: 17, marginRight: 25};
    } else if (this.props.icon === 'google') {
      icon = require('./../assets/Images/google.png');
      iconStyle = {width: 22, height: 22, marginRight: 25};
    } else if (this.props.icon === 'facebook') {
      iconStyle = {width: 13, height: 25, marginRight: 25};
      icon = require('./../assets/Images/facebook.png');
    }

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.container,
          this.props.buttonStyle,
          {
            backgroundColor: this.props.bgColor,
            stylesArray,
          },
        ]}>
        {this.props.icon && <Image style={iconStyle} source={icon} />}
        <Label
          font15
          ProximaNova_Bold
          style={[
            {
              color: this.props.textColor,
            },
            this.props.textStyle,
          ]}>
          {this.props.title}
        </Label>
      </TouchableOpacity>
    );
  }
}

KButton.defaultProps = {
  bgColor: Color.WHITE,
  textColor: Color.BLACK,
};

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});
