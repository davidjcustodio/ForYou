import React from 'react';
import {Text} from 'react-native';
import {Color} from '../utils/color';
import {
  fontX10,
  fontX12,
  fontX14,
  fontX16,
  fontX17,
  fontX18,
  fontX20,
  fontX22,
  fontX24,
} from './../utils/theme';
import PropTypes from 'prop-types';

class Label extends React.Component {
  onClick = () => {
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  render() {
    let stylesArray = [];

    // Font Size for Label ::
    if (this.props.font10) {
      stylesArray.push({fontSize: fontX10});
    } else if (this.props.font12) {
      stylesArray.push({fontSize: fontX12});
    } else if (this.props.font14) {
      stylesArray.push({fontSize: fontX14});
    } else if (this.props.font16) {
      stylesArray.push({fontSize: fontX16});
    } else if (this.props.font18) {
      stylesArray.push({fontSize: fontX18});
    } else if (this.props.font17) {
      stylesArray.push({fontSize: fontX17});
    } else if (this.props.font20) {
      stylesArray.push({fontSize: fontX20});
    } else if (this.props.font22) {
      stylesArray.push({fontSize: fontX22});
    } else if (this.props.font24) {
      stylesArray.push({fontSize: fontX24});
    } else {
      stylesArray.push({fontSize: fontX17});
    }

    // Font Family ::

    if (this.props.ProximaNova_Black) {
      stylesArray.push({fontFamily: 'ProximaNova-Black'});
    } else if (this.props.ProximaNova_Bold) {
      stylesArray.push({fontFamily: 'ProximaNova-Bold'});
    } else if (this.props.ProximaNova_Light) {
      stylesArray.push({fontFamily: 'ProximaNova-Light'});
    } else if (this.props.ProximaNova_Regular) {
      stylesArray.push({fontFamily: 'ProximaNova-Regular'});
    } else if (this.props.ProximaNova_Semibold) {
      stylesArray.push({fontFamily: 'ProximaNova-Semibold'});
    } else {
      stylesArray.push({fontFamily: 'ProximaNova-Regular'});
    }

    // Extra Props

    stylesArray.push({
      color: this.props.color,
      marginTop: this.props.mt,
      marginBottom: this.props.mb,
      marginLeft: this.props.ml,
      marginRight: this.props.mr,
      textAlign: this.props.align,
      textDecorationLine: this.props.textDecorationLine,
    });
    stylesArray.push(this.props.style);

    return (
      <Text
        numberOfLines={this.props.numberOfLines}
        style={stylesArray}
        onPress={this.props.onPress ? this.onClick : null}>
        {this.props.children}
      </Text>
    );
  }
}

Label.defaultProps = {
  font10: false,
  font12: false,
  font14: false,
  font16: false,
  font17: false,
  font18: false,
  font20: false,
  font22: false,
  font24: false,

  ProximaNova_Black: false,
  ProximaNova_Bold: false,
  ProximaNova_Light: false,
  ProximaNova_Regular: false,
  ProximaNova_Semibold: false,

  color: Color.GREY_DARK,
  mt: 0,
  mb: 0,
  ml: 0,
  mr: 0,
  textDecorationLine: 'none',
};
Label.propTypes = {
  font10: PropTypes.bool,
  font12: PropTypes.bool,
  font14: PropTypes.bool,
  font16: PropTypes.bool,
  font17: PropTypes.bool,
  font18: PropTypes.bool,
  font20: PropTypes.bool,
  font22: PropTypes.bool,
  font24: PropTypes.bool,

  ProximaNova_Black: PropTypes.bool,
  ProximaNova_Bold: PropTypes.bool,
  ProximaNova_Light: PropTypes.bool,
  ProximaNova_Regular: PropTypes.bool,
  ProximaNova_Semibold: PropTypes.bool,

  color: PropTypes.string,

  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  align: PropTypes.string,
};
export default Label;
