import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Card from './Card';
import KButton from './KButton';
const numColumns = 2;
const size = Dimensions.get('window').width * 0.7;
import {Color} from './../utils/color';
import {fontX12} from './../utils/theme';
import Label from './Label';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default class JobOffering extends Component {
  render() {
    // const {item} = this.props.item;
    return (
      <Card onPress={this.props.onPress} cardStyle={styles.itemContainer}>
        <View style={styles.cardTopView}>
          <Image
            style={styles.userImage}
            source={{
              uri:
                'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
            }}
          />

          <View style={{width: size - 70}}>
            <Label
              style={styles.labMainTitle}
              font14
              ProximaNova_Regular
              numberOfLines={1}>
              Apple
            </Label>
            <Label font16 style={{color: Color.INACTIVE}} ProximaNova_Bold>
              Apple Airports
            </Label>
          </View>
        </View>

        <View style={styles.cardBottomV}>
          <View style={styles.viewGlobalStyle}>
            <Image
              style={styles.imageStyle}
              source={require('./../assets/Images/global.png')}
            />

            <Label font10 style={{color: Color.INACTIVE}} ProximaNova_Regular>
              Instagram | Google | YouTube
            </Label>
          </View>

          <View style={styles.viewGlobalStyle}>
            <Image
              style={styles.imageStyle}
              source={require('./../assets/Images/coin.png')}
            />

            <Label font10 style={{color: Color.INACTIVE}} ProximaNova_Regular>
              $ 120
            </Label>
          </View>

          <View style={styles.viewGlobalStyle}>
            <Image
              style={styles.imageStyle}
              source={require('./../assets/Images/clock.png')}
            />

            <Label font10 style={{color: Color.INACTIVE}} ProximaNova_Regular>
              48 Hours
            </Label>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    marginLeft: 20,
    marginBottom: 10,
    overflow: 'hidden',
  },
  cardTopView: {
    width: size,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labMainTitle: {
    width: size - 50,
    color: Color.INACTIVE,
  },
  cardBottomV: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: size - 20,
    marginLeft: 10,
    marginBottom: 20,
  },
  viewGlobalStyle: {
    alignItems: 'center',
    height: 20,
    flexDirection: 'row',
  },
  imageStyle: {
    width: 12,
    height: 12,
    marginRight: 8,
    marginLeft: 8,
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginLeft: 10,
    marginRight: 10,
  },
});
