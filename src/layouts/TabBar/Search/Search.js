import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import {Color} from '../../../utils/color';
import CustomNavigation from '../../../components/CustomNavigation';
import SearchBox from '../../../components/SearchBox';
import Label from '../../../components/Label';
import {fontX17} from '../../../utils/theme';
const {width} = Dimensions.get('window');

const data = [
  'Apple',
  'Apple Pvt Ltd',
  'Apple Company',
  'Apple Shares',
  'Apple Products',
];

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  renderItem = ({item}) => {
    return (
      <View style={styles.itemMainV}>
        <View
          style={[
            styles.commonViewStyle,
            {
              marginLeft: 5,
            },
          ]}>
          <Image
            style={styles.imageStyle}
            source={require('./../../../assets/Images/search_inactive.png')}
          />
        </View>

        <Label
          color={Color.BLACK}
          font16
          ProximaNova_Regular
          style={{width: width - 150}}>
          {this.state.searchText}
          <Label
            color={Color.INACTIVE}
            font16
            ProximaNova_Regular
            style={{width: width - 150}}>
            {item.slice(this.state.searchText.length)}
          </Label>
        </Label>

        <View
          style={[
            styles.commonViewStyle,
            {
              marginRight: 5,
            },
          ]}>
          <Image
            style={styles.imageStyle}
            source={require('./../../../assets/Images/arrow_orange.png')}
          />
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <CustomNavigation isSideMenu={true} title="Search" />
        <SearchBox
          onChangeText={text => {
            console.log('Text', text);
            this.setState({
              searchText: text,
            });
          }}
        />
        <FlatList
          style={styles.listStyle}
          data={data}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
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
  commonViewStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    height: 50,
    width: width - 150,
    fontFamily: 'ProximaNova-Regular',
    fontSize: fontX17,
    alignSelf: 'center',
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  listStyle: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 0,
    marginBottom: 20,
  },
  itemMainV: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 0.5,
  },
});
