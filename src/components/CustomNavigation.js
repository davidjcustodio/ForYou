import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Label from './Label';
import {isIphoneX} from './../utils/isIphone-x';
import {Color} from '../utils/color';
const HEADER_SIZE = isIphoneX() ? 140 : 70;
const {width, height} = Dimensions.get('window');

class CustomNavigation extends React.PureComponent {
  onPressClick = () => {
    console.log('====================================');
    console.log(this.props.title);
    console.log('====================================');
    if (this.props.title === 'Checkout') {
      this.props.onBackHandle();
    } else {
      this.props.isBack && this.props.navigation.goBack();
    }
    this.props.isSideMenu && this.props.navigation.openDrawer();
  };
  render() {
    return (
      <SafeAreaView
        style={[
          styles.container,
          {
            height: this.props.navHeight ? this.props.navHeight : HEADER_SIZE,
            backgroundColor: this.props.navBackground,
          },
          this.props.mainStyle,
        ]}>
        <View style={styles.subView}>
          {/* Back Button and Side Menu */}

          <TouchableOpacity
            onPress={this.onPressClick}
            style={styles.leftIconButton}>
            {/* Back */}
            {this.props.isBack && (
              <Image
                style={[
                  styles.imageBackStyle,
                  {
                    tintColor: this.props.tintColorNav,
                  },
                ]}
                source={require('./../assets/Images/back_white.png')}
              />
            )}
            {/* SideMenu */}
            {this.props.isSideMenu && (
              <Image
                style={[
                  styles.sideMenuStyle,
                  {
                    tintColor: this.props.tintColorNav,
                  },
                ]}
                source={require('./../assets/Images/menu.png')}
              />
            )}
          </TouchableOpacity>

          {/* title and Profile view */}

          <View style={styles.middleViewStyle}>
            {this.props.title && (
              <Label
                font17
                style={{
                  alignSelf: 'center',
                }}>
                {this.props.title}
              </Label>
            )}
          </View>

          {/* Share and More */}

          <TouchableOpacity
            onPress={this.props.rightClick}
            style={styles.rightIconButton}>
            {this.props.isFilter && (
              <Image
                style={[
                  styles.filterMenu,
                  {
                    tintColor: this.props.tintColorNav,
                  },
                ]}
                source={require('./../assets/Images/filter.png')}
              />
            )}

            {this.props.isShare && (
              <Image
                style={[
                  styles.shareMenu,
                  {
                    tintColor: this.props.tintColorNav,
                  },
                ]}
                source={require('./../assets/Images/share_white.png')}
              />
            )}
          </TouchableOpacity>
        </View>

        {this.props.children}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
  },
  subView: {
    flexDirection: 'row',
  },
  leftIconButton: {
    width: 40,
    marginLeft: 20,
    height: 50,
    justifyContent: 'center',
  },
  rightIconButton: {
    width: 40,
    marginRight: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  middleViewStyle: {
    width: width - 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  imageBackStyle: {
    width: 25,
    height: 20,
  },
  sideMenuStyle: {
    width: 18,
    height: 18,
  },
  filterMenu: {
    width: 18,
    height: 18,
  },
  shareMenu: {
    width: 18,
    height: 19,
  },
});

CustomNavigation.defaultProps = {
  navBackground: Color.WHITE,
  tintColorNav: Color.BLACK,
};

export default CustomNavigation;
