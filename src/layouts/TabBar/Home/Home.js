import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  SectionList,
  Text,
} from 'react-native';
import {Color} from '../../../utils/color';
import Label from '../../../components/Label';
import CustomNavigation from '../../../components/CustomNavigation';
import TopRatedInfluencers from '../../../components/TopRatedInfluencers';
import TopProducts from '../../../components/TopProducts';
import JobOffering from '../../../components/JobOffering';

const numColumns = 2;

const size = (Dimensions.get('window').width - 60) / numColumns;
const DATABUSINESS = [
  {
    title: 'Top-rated Influencers',
    data: ['1'],
  },
];

const DATAINFLUENCER = [
  {
    title: 'Top Products',
    data: ['1'],
  },
  {
    title: 'Open Job Offering',
    data: ['1'],
  },
];
export default class Home extends Component {
  renderHeaderItem = title => {
    return (
      <View style={styles.headerStyle}>
        <Label ProximaNova_Bold font16>
          {title}
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
        <CustomNavigation
          {...this.props}
          isSideMenu={true}
          title="Home"
          isFilter={true}
          rightClick={() => {
            this.props.navigation.navigate('Filter');
          }}
        />

        <SectionList
          sections={
            global.selected === 'Business' ? DATABUSINESS : DATAINFLUENCER
          }
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index, section}) => {
            console.log('===== index ====', index);
            console.log('===== global.selected ====', global.selected);
            console.log('===== section ====', section);

            if (
              global.selected === 'Influencer' &&
              section.title === 'Open Job Offering'
            ) {
              return (
                <FlatList
                  data={['1', '2', '3', '4']}
                  stickyHeaderIndices={[0]}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({item}) => {
                    return (
                      <JobOffering
                        onPress={() => {
                          this.props.navigation.navigate('Details');
                        }}
                      />
                    );
                  }}
                  keyExtractor={(item, index) => index.toString()}
                />
              );
            } else {
              return (
                <FlatList
                  data={['Pizza', 'Burger', 'Risotto']}
                  stickyHeaderIndices={[0]}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => {
                    if (global.selected === 'Business') {
                      return (
                        <TopRatedInfluencers
                          onPress={() => {
                            this.props.navigation.navigate('Details');
                          }}
                        />
                      );
                    } else {
                      return (
                        <TopProducts
                          onPress={() => {
                            this.props.navigation.navigate(
                              'Details_Influencer',
                            );
                          }}
                        />
                      );
                    }
                  }}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={numColumns}
                />
              );
            }
          }}
          renderSectionHeader={({section: {title}}) => {
            console.log('==== title ====', title);
            return this.renderHeaderItem(title);
          }}
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
    height: 50,
    flexDirection: 'row',
    backgroundColor: Color.BGLIGHT,
    marginLeft: 20,
    marginRight: 20,
  },
});
