import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Card from './Card';
import Label from './Label';
import {Color} from '../utils/color';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');

export default class JobListComp extends Component {
  render() {
    return (
      <Card cardStyle={styles.cardStyle}>
        <View style={styles.cardTopViewStyle}>
          <View style={styles.commonViewStyle}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: this.props.userImage,
              }}
            />
          </View>

          <Label
            color={Color.BLACK}
            font14
            numberOfLines={2}
            ProximaNova_Semibold
            style={{width: width - 145}}>
            {this.props.tag}
          </Label>

          <TouchableOpacity
            onPress={this.props.closeClick}
            style={[styles.commonViewStyle]}>
            <Image
              style={styles.imageStyle}
              source={require('./../assets/Images/close.png')}
            />
          </TouchableOpacity>
        </View>

        <Label
          ml={15}
          mt={15}
          mb={10}
          mr={15}
          color={Color.BLACK}
          font16
          ProximaNova_Bold>
          {'Andrew.G is one of the top influencer'}
        </Label>

        <Label ml={15} mb={15} mr={15} color={Color.BLACK} font16>
          {'Andrew is doing a great job’s pastly, we recommend to you!'}
        </Label>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  cardTopViewStyle: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Color.INACTIVE,
  },
  commonViewStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
});
