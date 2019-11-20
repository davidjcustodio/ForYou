import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Label from './Label';
import {Dropdown} from 'react-native-material-dropdown';

export default class DropdownSelection extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Label ProximaNova_Semibold font14>
          {this.props.title}
        </Label>
        <Dropdown value="Select" data={this.props.data} />
      </View>
    );
  }
}
DropdownSelection.defaultProps = {
  width: Dimensions.get('window').width - 20,
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});
