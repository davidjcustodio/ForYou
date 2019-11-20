import React, {Component} from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Label from './Label';

export default class PlatFormItems extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.data.map(item => {
          let image =
            this.props.selectedValue == item
              ? require('./../assets/Images/radio_btn_active.png')
              : require('./../assets/Images/radio_btn_inactive.png');
          return (
            <TouchableOpacity
              key={item}
              onPress={() => {
                this.props.onPress(item);
              }}
              style={styles.buttonStyle}>
              <Image style={styles.imgStyle} source={image} />
              <Label ml={10} font14 ProximaNova_Semibold>
                {item}
              </Label>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
PlatFormItems.defaultProps = {
  selectedValue: '',
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    height: 30,
  },
  imgStyle: {
    width: 20,
    height: 20,
  },
});
