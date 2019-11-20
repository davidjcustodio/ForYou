import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Card from './Card';
import KButton from './KButton';
const numColumns = 2;
const size = (Dimensions.get('window').width - 60) / numColumns;
import {Color} from './../utils/color';
import {fontX12} from './../utils/theme';
import Label from './Label';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default class TopProducts extends Component {
  render() {
    // const {item} = this.props.item;
    return (
      <Card onPress={this.props.onPress} cardStyle={styles.itemContainer}>
        <Image
          style={styles.userImage}
          source={{
            uri:
              'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
          }}
        />

        <View style={styles.nameStyle}>
          <Label
            style={{width: size - 50}}
            font14
            ProximaNova_Bold
            numberOfLines={1}>
            Natasha Flecker 243242342
          </Label>
          <Label font14 style={{color: Color.ORANGE}} ProximaNova_Bold>
            $5.00
          </Label>
        </View>

        <AirbnbRating
          starContainerStyle={styles.starStyle}
          reviewColor="yellow"
          selectedColor="#FF630F"
          size={10}
          reviews={[]}
        />

        <View style={styles.bottomVStyle}>
          <View style={styles.socialIconV}>
            <Image
              style={styles.imageStyle}
              source={{
                uri:
                  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
              }}
            />

            <Label
              style={{width: size - 120}}
              font10
              ProximaNova_Bold
              numberOfLines={1}>
              Natasha Flecker
            </Label>
          </View>
          <KButton
            buttonStyle={styles.btnStyle}
            bgColor={'#FFEFE7'}
            title="Message"
            textColor={Color.ORANGE}
            textStyle={{fontSize: fontX12}}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: size,
    height: size + 90,
    marginLeft: 20,
    marginBottom: 10,
    overflow: 'hidden',
  },
  userImage: {
    height: size,
    width: size,
    overflow: 'hidden',
  },
  bottomVStyle: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    width: size - 10,
    justifyContent: 'space-between',
  },
  tagView: {
    backgroundColor: Color.TRANSPARENT,
    position: 'absolute',
    left: 10,
    top: size - 40,
  },
  socialIconV: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnStyle: {
    width: 80,
    height: 30,
  },
  starStyle: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 5,
  },
  nameStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  imageStyle: {width: 20, height: 20, borderRadius: 10, marginRight: 5},
});
