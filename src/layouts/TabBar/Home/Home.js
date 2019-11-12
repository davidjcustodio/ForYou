import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import {Color} from '../../../utils/color';
import Label from '../../../components/Label';
import CustomNavigation from '../../../components/CustomNavigation';
import TopRatedInfluencers from '../../../components/TopRatedInfluencers';
const numColumns = 2;
const size = (Dimensions.get('window').width - 60) / numColumns;

export default class Home extends Component {
  renderHeaderItem = () => {
    return (
      <View style={styles.headerStyle}>
        <Label ProximaNova_Bold font18>
          Top-rated Influencers
        </Label>

        <Label style={{color: Color.ORANGE}} ProximaNova_Bold font16>
          View All
        </Label>
      </View>
    );
  };
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <CustomNavigation isSideMenu={true} title="Home" isFilter={true} />
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          extraData={this.state}
          ListHeaderComponent={this.renderHeaderItem}
          stickyHeaderIndices={[0]}
          renderItem={({item}) => <TopRatedInfluencers />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
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
  itemContainer: {
    width: size,
    height: size + 100,
    marginLeft: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  headerStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    backgroundColor: Color.BGLIGHT,
    marginLeft: 20,
    marginRight: 20,
  },
});
