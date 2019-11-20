import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import {Color} from '../../../utils/color';
import CustomNavigation from '../../../components/CustomNavigation';
import {fontX14} from '../../../utils/theme';
import SegmentControl from 'react-native-animated-segment-control';
import JobListComp from '../../../components/JobListComp';

const data = [
  'Apple',
  'Apple Pvt Ltd',
  'Apple Company',
  'Apple Shares',
  'Apple Products',
];

export default class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  renderItem = ({item}) => {
    return (
      <JobListComp
        closeClick={() => {
          console.log('Close Click');
        }}
        tag="Suggesting Influencer"
        userImage="https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg"
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <CustomNavigation {...this.props} isSideMenu={true} title="Jobs" />

        <SegmentControl
          values={['Offers', 'Notifications']}
          onChange={currentIndex => {}}
          disable={false}
          selectedIndex={0}
          // segmentControlStyle={{backgroundColor: Color.WHITE}}
          selectedTextStyle={styles.selectedText}
          unSelectedTextStyle={styles.unselectedText}
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
  listStyle: {
    marginTop: 0,
    marginBottom: 20,
  },
  selectedText: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: fontX14,
    color: Color.WHITE,
  },
  unselectedText: {
    fontFamily: 'ProximaNova-Bold',
    fontSize: fontX14,
  },
});
