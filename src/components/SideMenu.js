import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Label from './Label';
import SideMenuItem from './SideMenuItem';
import KButton from './KButton';
import {Color} from '../utils/color';
const {height, width} = Dimensions.get('window');
export default class SideMenu extends Component {
  renderTopView = () => {
    return (
      <SafeAreaView style={styles.topViewContainer}>
        <View style={styles.topSubViewContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('EditProfile');
            }}
            style={styles.btnStyle}>
            <Image
              style={styles.imageStyle}
              source={require('./../assets/Images/edit.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.closeDrawer();
            }}
            style={styles.btnStyle}>
            <Image
              style={styles.imageStyle}
              source={require('./../assets/Images/menu_orange.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.profileVstyle}>
          <View
            style={[
              styles.profileImage,
              {
                marginLeft: 20,
              },
            ]}>
            <Image
              style={styles.profileImage}
              source={{
                uri:
                  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
              }}
            />

            <Image
              style={styles.verifyStyle}
              source={require('./../assets/Images/verify.png')}
            />
          </View>

          <View>
            <Label font17 ProximaNova_Semibold ml={15}>
              Street Fashion
            </Label>
            <View style={styles.locationImage}>
              <Image
                style={{height: 10, width: 8}}
                source={require('./../assets/Images/location_pin.png')}
              />

              <Label
                style={{color: Color.TXTGRAY}}
                font10
                ProximaNova_Regular
                ml={5}>
                Street15,Nweyork,USA
              </Label>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  renderVerificationCode = () => {
    return (
      <View style={styles.verificationContainer}>
        <View style={styles.verificationMain}>
          <Label ProximaNova_Bold font14 ml={20}>
            Verification Score
          </Label>

          <Label ProximaNova_Regular font12 mr={20}>
            How to earn points?
          </Label>
        </View>

        <Label ProximaNova_Light font12 ml={20} mt={5} mr={20}>
          Get faster resonses! Earn 10 points to get the Gold verificatio
        </Label>

        {global.selected === 'Influencer' && this.renderProgress()}
      </View>
    );
  };

  renderProgress = () => {
    return (
      <View style={styles.mainProgress}>
        <View style={styles.progressYellow} />

        <View style={styles.progressOrange} />

        <View style={styles.yellowStyle}>
          <Image
            style={styles.imageVerify}
            source={require('./../assets/Images/verify.png')}
          />
          <Label style={{color: Color.YELLOWCOLOR}} font10 ProximaNova_Semibold>
            50
          </Label>
        </View>

        <View style={styles.orangeStyle}>
          <Image
            style={styles.imageVerify}
            source={require('./../assets/Images/verify_orange.png')}
          />
          <Label style={{color: Color.ORANGE}} font10 ProximaNova_Semibold>
            100
          </Label>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderTopView()}
        <ScrollView style={styles.scrollStyle}>
          {global.selected !== 'Business' && this.renderVerificationCode()}
          <Label font14 ProximaNova_Semibold ml={20} mt={30}>
            More about me
          </Label>

          <SideMenuItem
            onPress={() => {
              console.log('Apple');
            }}
            type="transaction"
            title="All Transaction"
            value=""
          />
          <SideMenuItem type="email" title="Email" value="test@gmail.com" />
          <SideMenuItem
            type="location"
            title="Location"
            value="Street15,Newyork,USA"
          />
          <SideMenuItem type="bio" title="Bio/About me" value="" />
          <SideMenuItem type="notification" title="Notifications" value="" />
          <SideMenuItem type="password" title="Change password" value="" />
          <SideMenuItem type="help" title="help" value="" />
        </ScrollView>

        <Label ProximaNova_Light font12 mb={15} style={{alignSelf: 'center'}}>
          V 1.0
        </Label>

        <KButton
          onPress={() => {
            this.props.navigation.navigate('AuthNavigation');
          }}
          buttonStyle={{width: (width - 50) * 0.65, marginBottom: 10}}
          bgColor={Color.ORANGE}
          textColor={Color.WHITE}
          title="Logout"
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Color.ORANGE,
  },
  topViewContainer: {
    height: 150,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  topSubViewContainer: {
    height: 40,
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  profileVstyle: {
    height: 90,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollStyle: {
    height: height - 250,
    marginTop: 150,
  },
  btnStyle: {
    width: 40,
    height: 40,
  },
  imageStyle: {
    width: 18,
    height: 18,
  },
  locationImage: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  verifyStyle: {
    position: 'absolute',
    bottom: 0,
    width: 18,
    height: 18,
    right: 0,
  },
  verificationContainer: {
    height: 100,
    width: '100%',
  },
  verificationMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  mainProgress: {
    backgroundColor: Color.TXTGRAY,
    borderRadius: 15,
    height: 8,
    marginLeft: 20,
    marginRight: 20,
    width: width * 0.8 - 40,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 0,
    flexDirection: 'row',
  },
  yellowStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
    width: 25,
    marginTop: -3,
    position: 'absolute',
    right: (width * 0.8 - 40) / 2 - 4,
    zIndex: 2,
  },
  orangeStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
    width: 25,
    marginTop: -3,
    position: 'absolute',
    right: -4,
    zIndex: 2,
  },
  progressYellow: {
    backgroundColor: Color.YELLOWCOLOR,
    borderRadius: 15,
    height: 8,
    width: '50%',
  },
  progressOrange: {
    backgroundColor: Color.ORANGE,
    borderRadius: 15,
    height: 8,
    width: '50%',
  },
  imageVerify: {width: 20, height: 20},
});
