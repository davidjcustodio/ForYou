import React from 'react';
import {TextInput, View, Dimensions, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Label from './Label';
import {fontX17} from '../utils/theme';
import {Color} from '../utils/color';

class TextField extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[
          styles.container,
          {
            width: this.props.width,
          },
        ]}>
        <Label font15>{this.props.title}</Label>
        <View style={styles.inputMainV}>
          <TextInput
            style={[
              {
                width: this.props.width - 40,
              },
              styles.textInput,
              this.props.style,
            ]}
            secureTextEntry={false}
            returnKeyType={this.props.returnKeyType}
            maxLength={this.props.maxLength}
            value={this.props.value}
            onChangeText={this.props.onChangeText}
            autoCorrect={false}
            autoCapitalize={this.props.autoCapitalize}
            keyboardType={this.props.keyboardType}
            editable={this.props.editable}
            ref={this.props.refInner}
            onSubmitEditing={this.props.onSubmitEditing}
            onFocus={this.props.onFocus}
            onEndEditing={this.props.onEndEditing}
            placeholder={this.props.placeholder}
          />
        </View>
      </View>
    );
  }
}

TextField.defaultProps = {
  title: '',
  width: Dimensions.get('window').width - 40,
};
TextField.propTypes = {
  title: PropTypes.string,
  sideImage: PropTypes.any,
  isError: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    backgroundColor: Color.WHITE,
    marginTop: 15,
    alignSelf: 'center',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.BLACK,
  },
  inputMainV: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: fontX17,
    fontFamily: 'ProximaNova-Regular',
    color: Color.BLACK,
    height: 35,
    padding: 0,
  },
});

export default TextField;
