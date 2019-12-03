import React, {Component} from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
import Label from './Label';
import {Color} from '../utils/color';
const {width} = Dimensions.get('window');
import {Rating, AirbnbRating} from 'react-native-ratings';

export default class ReviewItem extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.mainStyle]}>
        <Image
          style={styles.leftImage}
          source={{
            uri: this.props.image,
          }}
        />

        <View style={{width: width - 140}}>
          <Label ml={10} font16 ProximaNova_Semibold>
            {this.props.title}
          </Label>
          <AirbnbRating
            starContainerStyle={styles.starStyle}
            reviewColor="yellow"
            selectedColor="#FF630F"
            size={10}
            reviews={[]}
          />
          <Label
            style={{color: Color.INACTIVE}}
            ml={10}
            mt={5}
            mr={10}
            mb={10}
            font14
            ProximaNova_Regular>
            {this.props.description}
          </Label>
        </View>
        <View style={styles.viewRight}>
          <Label
            style={{color: Color.INACTIVE}}
            numberOfLines={1}
            font10
            ProximaNova_Regular>
            {this.props.date}
          </Label>

          <Image
            style={styles.rightImage}
            source={{
              uri: this.props.reviewImage,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    borderBottomColor: Color.TXT_GRY_COLOR,
    borderBottomWidth: 1,
  },
  leftImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  viewRight: {
    width: 60,
    height: 70,
    alignItems: 'flex-end',
  },
  rightImage: {
    height: 60,
    width: 60,
    borderRadius: 8,
    marginTop: 5,
  },
  starStyle: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 5,
  },
});
