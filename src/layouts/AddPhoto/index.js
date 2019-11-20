import React, {Component} from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import KButton from './../../components/KButton';
import {Color} from '../../utils/color';
const {width} = Dimensions.get('window');

export default class index extends Component {
  render() {
    return (
      <SafeAreaView>
        <Image
          style={styles.container}
          resizeMode="cover"
          source={{
            uri:
              'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
          }}
        />
        <View style={styles.heightView}>
          <KButton
            onPress={() => {
              this.props.navigation.goBack();
            }}
            buttonStyle={styles.retakeStyle}
            bgColor={Color.BLACK}
            textColor={Color.WHITE}
            title="Retake"
          />
          <KButton
            onPress={() => {
              this.props.navigation.goBack();
            }}
            buttonStyle={{width: (width - 50) / 2}}
            bgColor={Color.ORANGE}
            textColor={Color.WHITE}
            title="Next"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  heightView: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  retakeStyle: {
    width: (width - 50) / 2,
    marginRight: 10,
    opacity: 0.6,
  },
});
