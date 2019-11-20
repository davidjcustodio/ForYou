import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
import {Color} from '../../../utils/color';
import Label from '../../../components/Label';
import CustomNavigation from '../../../components/CustomNavigation';
import KButton from '../../../components/KButton';
import {fontX12, fontX17, fontX16} from '../../../utils/theme';
import ReviewItem from '../../../components/ReviewItem';
import SocialItem from '../../../components/SocialItem';
import PageControl from 'react-native-page-control';
import {Rating, AirbnbRating} from 'react-native-ratings';

const {width} = Dimensions.get('window');
let data = [
  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
];
export default class Details_Influencer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  handleScroll = event => {
    let currentPage = Math.round(event.nativeEvent.contentOffset.x / width);
    this.setState({
      currentPage: currentPage,
    });
  };

  renderProfile = () => {
    return (
      <View style={styles.reviewStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
          }}
        />

        <View style={styles.subViewStyle}>
          <Label style={{color: Color.BLACK}} font14 ProximaNova_Semibold>
            Street Fashion
          </Label>
          <AirbnbRating
            starContainerStyle={styles.starStyle}
            reviewColor="yellow"
            selectedColor="#FF630F"
            size={10}
            reviews={[]}
          />
        </View>
      </View>
    );
  };
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <CustomNavigation
          {...this.props}
          isBack={true}
          title=" "
          isShare={true}
          tintColorNav={Color.WHITE}
          navBackground={Color.TRANSPARENT}
          mainStyle={{position: 'absolute', zIndex: 1}}
        />

        <ScrollView>
          <ScrollView
            onScroll={this.handleScroll}
            pagingEnabled
            horizontal={true}>
            {data.map(item => {
              return (
                <Image
                  style={styles.imageScrollHorizontal}
                  source={{
                    uri: item,
                  }}
                />
              );
            })}
          </ScrollView>
          <View>
            <PageControl
              style={styles.pageControlStyle}
              numberOfPages={data.length}
              currentPage={this.state.currentPage}
              hidesForSinglePage
              pageIndicatorTintColor={Color.INACTIVE}
              currentPageIndicatorTintColor="white"
              indicatorStyle={{borderRadius: 5}}
              currentIndicatorStyle={styles.currentStyleIndicator}
              indicatorSize={{width: 8, height: 8}}
              onPageIndicatorPress={this.onItemTap}
            />
          </View>

          <View style={styles.subView}>
            <Label
              style={{width: width - 190}}
              font17
              ProximaNova_Bold
              numberOfLines={1}>
              Natasha Flecker
            </Label>
            <Label style={{color: Color.ORANGE}} font16 ProximaNova_Bold>
              $90.00
            </Label>

            <KButton
              buttonStyle={styles.btnStyle}
              textStyle={{fontSize: fontX16}}
              bgColor={'#FFEFE7'}
              title="Message"
              textColor={Color.ORANGE}
            />

            {this.renderProfile()}

            <Label
              mt={5}
              style={{color: Color.TXTGRAY}}
              font14
              ProximaNova_Regular>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sLorem ipsum
              dolor sit amet, consectetur adipiscing elit,
            </Label>

            {/* Reviews */}

            <View style={styles.reviewHeader}>
              <Label font16 ProximaNova_Semibold>
                Reviews
              </Label>

              <Label style={{color: Color.ORANGE}} font14 ProximaNova_Semibold>
                View All
              </Label>
            </View>

            <ReviewItem
              title="Apple"
              description="apple airpods consectetur adipiscing elit, sed do eiusmod
                  tempo apple airpods consectetur adipiscing elit, sed do
                  eiusmod tempo"
              image="https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg"
              reviewImage="https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg"
              date="6 Aug 2019"
            />

            <ReviewItem
              title="Apple"
              description="apple airpods consectetur adipiscing elit, sed do eiusmod
                  tempo apple airpods consectetur adipiscing elit, sed do
                  eiusmod tempo"
              image="https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg"
              reviewImage="https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg"
              date="6 Aug 2019"
            />
          </View>

          <KButton
            onPress={() => {
              this.props.navigation.navigate('Proposal');
            }}
            buttonStyle={styles.bottomButtonStyle}
            bgColor={Color.ORANGE}
            textColor={Color.WHITE}
            title="Send Proposal"
          />
        </ScrollView>

        {/* <View style={styles.heightView}>
          <KButton
            buttonStyle={{width: width - 40}}
            bgColor={Color.ORANGE}
            textColor={Color.WHITE}
            title="Select this Influencer "
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BGLIGHT,
  },
  subView: {
    width: width - 40,
    marginLeft: 20,
    marginTop: 20,
  },
  btnStyle: {
    position: 'absolute',
    right: 0,
    width: 140,
  },
  heightView: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 10,
  },
  bottomButtonStyle: {
    width: width - 40,
    marginTop: 20,
    marginBottom: 50,
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  imageScrollHorizontal: {
    width: width,
    height: width - 60,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  pageControlStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
  },
  currentStyleIndicator: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Color.ORANGE,
  },
  reviewStyle: {
    height: 60,
    width: width - 40,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Color.TXTGRAY,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  subViewStyle: {
    width: (width - 60) * 0.33,
    height: 60,
    justifyContent: 'center',
    marginLeft: 15,
  },
  starStyle: {
    alignSelf: 'flex-start',
  },
});
