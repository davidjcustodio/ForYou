import React from 'react';
import {TextInput, View, Dimensions, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Label from './Label';
import {fontX16, fontX14} from '../utils/theme';
import {Color} from '../utils/color';

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('====================================');
    console.log(this.props.value);
    console.log('====================================');
    return (
      <View
        style={[
          styles.container,
          {
            width: this.props.width,
          },
          this.props.mainStyle,
        ]}>
        <Label ProximaNova_Semibold font17>
          {this.props.title}
        </Label>
        <View style={styles.inputMainV}>
          <TextInput
            style={[
              {
                width: this.props.width - 40,
                fontFamily:
                  typeof this.props.value != undefined
                    ? 'ProximaNova-Regular'
                    : 'ProximaNova-Regular',

                fontSize:
                  typeof this.props.value != 'undefined' ? fontX14 : fontX14,
              },
              styles.textInput,
              this.props.style,
            ]}
            secureTextEntry={this.state.secureTextEntry}
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
            multiline={this.state.multiline}
            onEndEditing={this.props.onEndEditing}
            placeholder={this.props.placeholder}
          />
        </View>
        {this.props.children}
      </View>
    );
  }
}

TextField.defaultProps = {
  title: '',
  width: Dimensions.get('window').width - 40,
  multiline: false,
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
    paddingRight: 0,
    paddingLeft: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.TXTGRAY,
  },
  inputMainV: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    color: Color.BLACK,
    height: 35,
    marginTop: 5,
    padding: 0,
  },
});

export default TextField;
