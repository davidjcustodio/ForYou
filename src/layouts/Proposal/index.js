import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Animated, FlatList} from 'react-native';
import CustomNavigation from '../../components/CustomNavigation';
import {Color} from '../../utils/color';
import Label from '../../components/Label';
import KButton from '../../components/KButton';
import TextField from '../../components/TextField';
import PlatFormItems from '../../components/PlatFormItems';
const {width} = Dimensions.get('window');

const social = [
  'Instagram',
  'Youtube',
  'Twitter',
  'Facebook',
  'TikTok',
  'Pintrest',
];
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: '',
      selectItem: '',
    };
  }

  renderDetail = () => {
    return (
      <View style={styles.detailMainView}>
        <TextField title="Views" value="5000" mainStyle={styles.inputStyle} />
        <TextField
          title="Total Payment Amount"
          value="$50"
          mainStyle={styles.inputStyle}
        />
        <Label ml={20} mt={10} font14 ProximaNova_Semibold>
          Platform
        </Label>

        <PlatFormItems
          onPress={item => {
            this.setState({
              selectItem: item,
            });
          }}
          selectedValue={this.state.selectItem}
          data={social}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomNavigation {...this.props} isBack={true} title="Proposal" />
        {this.renderDetail()}
        <KButton
          onPress={() => {
            this.props.navigation.goBack();
          }}
          buttonStyle={styles.btnStyle}
          bgColor={Color.ORANGE}
          textColor={Color.WHITE}
          title={'Offer Proposal'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BGLIGHT,
  },
  heightView: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 0,
    top: 10,
  },

  detailMainView: {
    borderRadius: 15,
    backgroundColor: Color.WHITE,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    width: width - 40,
  },
  inputStyle: {
    backgroundColor: Color.TRANSPARENT,
    width: width - 80,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  btnStyle: {
    width: width - 40,
    position: 'absolute',
    bottom: 20,
  },
});
