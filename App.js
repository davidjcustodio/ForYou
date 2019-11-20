import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Label from './src/components/Label';

export default class App extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Label font22>"This is Tesing."</Label>
      </View>
    );
  }
}
