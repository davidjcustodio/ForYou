import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import Label from '../../components/Label';
import {Color} from '../../utils/color';
import CustomNavigation from '../../components/CustomNavigation';
import {fontX35} from './../../utils/theme';
import Card from '../../components/Card';

const {width, height} = Dimensions.get('window');

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomNavigation
          {...this.props}
          isBack={true}
          tintColorNav={Color.WHITE}
          navBackground={Color.TRANSPARENT}
        />

        <Label
          ProximaNova_Bold
          style={styles.titleStyle}
          ml={20}
          mt={10}
          mb={60}>
          Select Anyone
        </Label>

        <View style={styles.mainCardStyle}>
          <Card
            onPress={() => {
              console.log('onPress');
              global.selected = 'Influencer';
              this.props.navigation.navigate('DrawerNavInfluencer');
            }}
            cardStyle={[
              styles.subCardStyle,
              {
                backgroundColor: Color.ORANGE_LIGHT,
              },
            ]}>
            <Image
              style={styles.imgStyle}
              source={require('./../../assets/Images/influencer.png')}
            />

            <Label ProximaNova_Bold font18 style={{color: Color.WHITE}}>
              Influencer
            </Label>
          </Card>

          <Card
            onPress={() => {
              console.log('onPress');
              global.selected = 'Business';
              this.props.navigation.navigate('DrawerNavigator');
            }}
            cardStyle={[
              styles.subCardStyle,
              {
                backgroundColor: Color.WHITE,
              },
            ]}>
            <Image
              style={styles.imgStyle}
              source={require('./../../assets/Images/business.png')}
            />
            <Label ProximaNova_Bold font18>
              Business
            </Label>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.ORANGE,
  },
  titleStyle: {
    fontSize: fontX35,
    alignSelf: 'flex-start',
    color: Color.WHITE,
  },
  mainCardStyle: {
    flexDirection: 'row',
    width: width - 40,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  subCardStyle: {
    height: (width - 40) * 0.5 - 10 + 60,
    width: (width - 40) * 0.5 - 10,
    padding: 15,
    justifyContent: 'space-around',
  },
  imgStyle: {width: 60, height: 60},
});
