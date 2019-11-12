import React from 'react';
import {PixelRatio, Platform, Dimensions, StyleSheet} from 'react-native';
import {Color} from './color';
import {relativeWidth} from './dimensions';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');
const realWidth = height > width ? width : height;

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
export const NAV_HEIGHT = APPBAR_HEIGHT + STATUSBAR_HEIGHT;
const TAB_HEIGHT = 49;

const fontBaseX10 = 10;
const fontBaseX12 = 12;
const fontBaseX14 = 14;
const fontBaseX16 = 16;
const fontBaseX17 = 17;
const fontBaseX18 = 18;
const fontBaseX20 = 20;
const fontBaseX22 = 22;
const fontBaseX24 = 24;
const fontBaseX35 = 35;

const isTablet = () => {
  if (DeviceInfo.isTablet()) {
    return true;
  } else {
    return false;
  }
};

const responsiveHeight = height => {
  if (!isTablet()) return height;
  else return height + height * 0.25;
};

const drawerWidth = () => {
  if (!isTablet()) return relativeWidth(75);
  else return relativeWidth(60);
};

const responsiveFontSize = fontSize => {
  let divider = isTablet() ? 600 : 375;
  return Math.round((fontSize * realWidth) / divider);
};
const fontX10 = responsiveFontSize(fontBaseX10);
const fontX12 = responsiveFontSize(fontBaseX12);
const fontX14 = responsiveFontSize(fontBaseX14);
const fontX16 = responsiveFontSize(fontBaseX16);
const fontX17 = responsiveFontSize(fontBaseX17);
const fontX18 = responsiveFontSize(fontBaseX18);
const fontX20 = responsiveFontSize(fontBaseX20);
const fontX22 = responsiveFontSize(fontBaseX22);
const fontX24 = responsiveFontSize(fontBaseX24);
const fontX35 = responsiveFontSize(fontBaseX35);

const largeCutoff = 800;
const mediumCutoff = 640;

export {
  fontX10,
  fontX12,
  fontX14,
  fontX16,
  fontX17,
  fontX18,
  fontX20,
  fontX22,
  fontX24,
  fontX35,
  drawerWidth,
  responsiveHeight,
  width,
  height,
  mediumCutoff,
  largeCutoff,
};
