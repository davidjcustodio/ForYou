import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Card from './Card';
import KButton from './KButton';
const numColumns = 2;
const size = (Dimensions.get('window').width - 60) / numColumns;
import {Color} from './../utils/color';
import {fontX12} from './../utils/theme';
import Label from './Label';

export default class TopRatedInfluencers extends Component {
  render() {
    // const {item} = this.props.item;
    return (
      <Card cardStyle={styles.itemContainer}>
        <Image
          style={styles.userImage}
          source={{
            uri:
              'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
          }}
        />
        <Image
          style={styles.imageStar}
          source={require('./../assets/Images/star_round.png')}
        />

        <View style={styles.tagView}>
          <View style={styles.tagViewTransparent}></View>

          <Label style={styles.lblTag} font14 ProximaNova_Bold>
            Fashion
          </Label>
        </View>

        <Label
          font14
          ProximaNova_Bold
          numberOfLines={1}
          ml={10}
          mt={10}
          mr={5}
          mb={5}>
          Natasha Flecker
        </Label>
        <Label style={{color: Color.ORANGE}} ml={10} font14 ProximaNova_Bold>
          $5.00
          <Label style={{color: Color.INACTIVE}} font12 ProximaNova_Bold>
            /10k views
          </Label>
        </Label>

        <View style={styles.bottomVStyle}>
          <View style={styles.socialIconV}>
            <Image
              style={{width: 15, height: 12, marginRight: 5}}
              source={require('./../assets/Images/twitter.png')}
            />

            <Image
              style={{width: 15, height: 11, marginRight: 5}}
              source={require('./../assets/Images/youtube.png')}
            />

            <Image
              style={{width: 15, height: 15}}
              source={require('./../assets/Images/instagram.png')}
            />
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
    height: size + 100,
    marginLeft: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  userImage: {
    height: size,
    width: size,
    overflow: 'hidden',
  },
  imageStar: {
    position: 'absolute',
    width: 25,
    height: 25,
    top: 10,
    right: 10,
  },
  bottomVStyle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    width: size - 20,
    justifyContent: 'space-between',
  },
  tagView: {
    backgroundColor: Color.TRANSPARENT,
    position: 'absolute',
    left: 10,
    top: size - 40,
  },
  tagViewTransparent: {
    backgroundColor: Color.BLACK,
    opacity: 0.5,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    borderRadius: 15,
  },
  lblTag: {
    color: Color.WHITE,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  socialIconV: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnStyle: {
    width: 80,
    height: 25,
  },
  iconStyle: {
    height: 12,
    width: 15,
    marginRight: 5,
  },
});
