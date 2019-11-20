import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Dimensions, Image} from 'react-native';
import {Color} from '../../../utils/color';
import Label from '../../../components/Label';
import CustomNavigation from '../../../components/CustomNavigation';
import KButton from '../../../components/KButton';
import {fontX16} from '../../../utils/theme';
import ReviewItem from '../../../components/ReviewItem';
import SocialItem from '../../../components/SocialItem';
import PageControl from 'react-native-page-control';

const {width} = Dimensions.get('window');
let data = [
  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
  'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
];
export default class Details extends Component {
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

  renderFollow = () => {
    return (
      <View style={styles.reviewStyle}>
        <View style={styles.subViewStyle}>
          <Label style={{color: Color.BLACK}} font20 ProximaNova_Bold>
            1200
          </Label>
          <Label style={{color: Color.BGCOLOR}} font14 ProximaNova_Semibold>
            Posts
          </Label>
        </View>

        <View style={styles.subViewStyle}>
          <Label style={{color: Color.BLACK}} font20 ProximaNova_Bold>
            1200
          </Label>
          <Label style={{color: Color.BGCOLOR}} font14 ProximaNova_Semibold>
            Followers
          </Label>
        </View>

        <View
          style={[
            styles.subViewStyle,
            {borderRightColor: Color.TRANSPARENT, borderWidth: 0},
          ]}>
          <Label style={{color: Color.BLACK}} font20 ProximaNova_Bold>
            1200
          </Label>
          <Label style={{color: Color.BGCOLOR}} font14 ProximaNova_Semibold>
            Jobs Done
          </Label>
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
              $5.00
              <Label
                style={{color: Color.INACTIVE}}
                font14
                ProximaNova_Semibold>
                /10k views
              </Label>
            </Label>

            <KButton
              buttonStyle={styles.btnStyle}
              textStyle={{fontSize: fontX16}}
              bgColor={'#FFEFE7'}
              title="Message"
              textColor={Color.ORANGE}
            />

            {this.renderFollow()}

            <Label mt={20} font16 ProximaNova_Semibold>
              Personal Information
            </Label>

            <Label
              mt={10}
              style={{color: Color.INACTIVE}}
              font14
              ProximaNova_Semibold>
              Model | Fashion Influencer
            </Label>

            <Label
              mt={5}
              style={{color: Color.TXTGRAY}}
              font14
              ProximaNova_Regular>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sLorem ipsum
              dolor sit amet, consectetur adipiscing elit,
            </Label>

            {/* Social  */}

            <Label mt={20} font16 ProximaNova_Semibold>
              Social Media Platform
            </Label>

            <SocialItem profileName="@Andrew SYM" type="twitter" />
            <SocialItem profileName="@Andrew SYM" type="youtube" />
            <SocialItem profileName="@Andrew SYM" type="instagram" />

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
            buttonStyle={styles.bottomButtonStyle}
            bgColor={Color.ORANGE}
            textColor={Color.WHITE}
            title="Select this Influencer "
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
    height: 100,
    width: width - 60,
    flexDirection: 'row',
  },
  subViewStyle: {
    borderRightWidth: 1,
    borderRightColor: Color.TXTGRAY,
    width: (width - 60) * 0.33,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
