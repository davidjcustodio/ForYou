import React, {Component} from 'react';
import {Dimensions, View, Image, StyleSheet} from 'react-native';
import Card from './Card';
import Label from './Label';
import {Color} from '../utils/color';
const {width} = Dimensions.get('window');
export default class ChatListComp extends Component {
  render() {
    return (
      <Card onPress={this.props.onPress} cardStyle={styles.cardStyle}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: this.props.image,
            }}
          />
          {this.props.isOnline && <View style={styles.badgeStyle}></View>}
        </View>

        <View style={{justifyContent: 'center'}}>
          <View style={styles.middleViewStyle}>
            <Label
              color={Color.BLACK}
              font20
              numberOfLines={1}
              ProximaNova_Semibold
              style={styles.nameWidth}>
              {this.props.name}
            </Label>

            <Label
              color={Color.TXTGRAY}
              font14
              numberOfLines={1}
              ProximaNova_Regular
              style={styles.timeStyle}>
              {this.props.time}
            </Label>
          </View>

          <Label
            color={Color.TXTGRAY}
            font14
            numberOfLines={1}
            ProximaNova_Semibold
            style={styles.messageStyle}>
            {this.props.message}
          </Label>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 90,
    flexDirection: 'row',
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
  middleViewStyle: {
    width: width - 130,
    flexDirection: 'row',
  },
  nameWidth: {
    width: width - 200,
  },
  timeStyle: {
    width: 70,
    textAlign: 'center',
  },
  messageStyle: {
    width: width - 130,
  },
  badgeStyle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Color.ORANGE,
    borderWidth: 2,
    borderColor: Color.BGLIGHT,
    position: 'absolute',
    right: 15,
    bottom: 20,
  },
});
