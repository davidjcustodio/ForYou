import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Animated,
  Text,
  FlatList,
} from 'react-native';
import CustomNavigation from '../../components/CustomNavigation';
import {Color} from '../../utils/color';
import Label from '../../components/Label';
import KButton from '../../components/KButton';
import TextField from './../../components/TextField';
import PlatFormItems from '../../components/PlatFormItems';
import Accordion from 'react-native-collapsible/Accordion';
import {isIphoneX} from '../../utils/isIphone-x';

const {width} = Dimensions.get('window');

let checkOut = [
  {title: 'Details', btnTitle: 'Make Offer'},
  {title: 'Billing Information', btnTitle: 'Next'},
  {title: '', btnTitle: 'Complete Offer'},
  {title: '', btnTitle: 'Back to Home'},
];

const social = ['Instagram', 'Youtube', 'Twitter', 'Facebook'];
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: '',
      selectItem: '',
      animation: new Animated.Value(0),
      activeSections: [],
      selectedIndex: 0,
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

  renderBillingInfo = () => {
    return (
      <ScrollView style={styles.detailMainView}>
        <TextField
          title="Name"
          value="Street Fashion"
          mainStyle={styles.inputStyle}
        />
        <TextField
          title="Email Address"
          value="test@gmail.com"
          mainStyle={styles.inputStyle}
        />
        <TextField
          title="Mobile"
          value="+1625-324-154"
          mainStyle={styles.inputStyle}
        />

        <TextField
          title="Address"
          value="Street 15, New York , USA"
          mainStyle={styles.inputStyle}
        />
        <TextField
          title="City"
          value="New York"
          mainStyle={styles.inputStyle}
        />

        <TextField title="Country" value="USA" mainStyle={styles.inputStyle} />
      </ScrollView>
    );
  };

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = (section, index, isActive, sections) => {
    let selected = isActive
      ? require('./../../assets/Images/radio_btn_active.png')
      : require('./../../assets/Images/radio_btn_inactive.png');

    let imageCard =
      section == 'Credit Card'
        ? require('./../../assets/Images/credit_card.png')
        : require('./../../assets/Images/debit_card.png');

    return (
      <View
        style={[
          styles.headerSection,
          {
            borderBottomLeftRadius: isActive ? 0 : 15,
            borderBottomRightRadius: isActive ? 0 : 15,
          },
        ]}>
        <Image style={styles.cardImage} source={imageCard} />
        <Label ml={15} font14 ProximaNova_Semibold>
          {section}
        </Label>
        <Image style={styles.selectedCard} source={selected} />
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={{backgroundColor: Color.WHITE}}>
        <TextField
          placeholder="Type card number"
          title="Card Number"
          value="Apple"
          mainStyle={styles.inputStyle}
        />
        <View style={styles.doublePickerView}>
          <TextField
            placeholder="MM/YY"
            title="Expire Date"
            mainStyle={styles.categoryDropDown}
          />
          <TextField
            secureTextEntry={true}
            title="CVV"
            placeholder="***"
            mainStyle={[styles.categoryDropDown, {marginRight: 20}]}
          />
        </View>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };
  renderCredit = () => {
    return (
      <View
        style={[styles.detailMainView, {backgroundColor: Color.TRANSPARENT}]}>
        <Accordion
          underlayColor={Color.TRANSPARENT}
          sections={['Credit Card', 'Debit Card']}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    );
  };

  renderReady = () => {
    return (
      <View
        style={[
          styles.detailMainView,
          {
            backgroundColor: Color.TRANSPARENT,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Image
          style={styles.readyStyle}
          source={require('./../../assets/Images/readyOrder.png')}
        />

        <Label
          style={{textAlign: 'center'}}
          mt={40}
          mb={30}
          ml={20}
          mr={20}
          font24
          ProximaNova_Bold>
          Your order is ready to advertise on instagram
        </Label>

        <KButton
          onPress={() => {
            this.props.navigation.goBack();
          }}
          buttonStyle={{width: width - 120}}
          bgColor={Color.ORANGE}
          textColor={Color.WHITE}
          title={checkOut[this.state.selectedIndex].btnTitle}
        />
      </View>
    );
  };

  renderItem = ({item, index}) => {
    switch (this.state.selectedIndex) {
      case 0:
        return this.renderDetail();
      case 1:
        return this.renderBillingInfo();
      case 2:
        return this.renderCredit();
      case 3:
        return this.renderReady();

      default:
        return null;
    }
  };

  renderTopHeader() {
    return (
      <View style={styles.topMainView}>
        <View style={styles.subMainView}>
          <View style={styles.lineView}></View>

          <Image
            style={styles.imageProgressStyle}
            source={
              this.state.selectedIndex >= 1
                ? require('./../../assets/Images/process_done.png')
                : require('./../../assets/Images/inactive.png')
            }
          />

          <Image
            style={styles.imageProgressStyle}
            source={
              this.state.selectedIndex >= 2
                ? require('./../../assets/Images/process_done.png')
                : require('./../../assets/Images/inactive.png')
            }
          />
          <Image
            style={styles.imageProgressStyle}
            source={
              this.state.selectedIndex >= 3
                ? require('./../../assets/Images/process_done.png')
                : require('./../../assets/Images/inactive.png')
            }
          />
          <Image
            style={styles.imageProgressStyle}
            source={
              this.state.selectedIndex >= 4
                ? require('./../../assets/Images/process_done.png')
                : require('./../../assets/Images/inactive.png')
            }
          />
        </View>

        <View style={styles.subMainLbl}>
          <Label font12 ProximaNova_Regular>
            Details
          </Label>
          <Label font12 ProximaNova_Regular>
            Billing
          </Label>
          <Label font12 ProximaNova_Regular>
            Payment
          </Label>
          <Label font12 ProximaNova_Regular>
            Ready
          </Label>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomNavigation
          {...this.props}
          mainStyle={{justifyContent: 'flex-start'}}
          onBackHandle={() => {
            if (this.state.selectedIndex === 0) {
              this.props.navigation.goBack();
            } else if (this.state.selectedIndex === 3) {
              this.props.navigation.goBack();
            } else {
              this.setState({
                selectedIndex: this.state.selectedIndex - 1,
              });
            }
          }}
          isBack={true}
          navHeight={isIphoneX() ? 160 : 130}
          title="Checkout">
          {this.renderTopHeader()}
        </CustomNavigation>
        {/*Detail VIew*/}
        {this.state.selectedIndex !== 3 && this.state.selectedIndex !== 2 && (
          <Label ml={20} mt={20} font17 ProximaNova_Bold>
            {checkOut[this.state.selectedIndex].title}
          </Label>
        )}
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEnabled={false}
          extraData={this.state}
          data={checkOut}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.heightView}>
          {this.state.selectedIndex !== 3 && (
            <KButton
              onPress={() => {
                if (this.state.selectedIndex !== 3) {
                  this.setState({
                    selectedIndex: this.state.selectedIndex + 1,
                  });
                } else if (this.state.selectedIndex === 3) {
                  this.props.navigation.goBack();
                }
              }}
              buttonStyle={{width: width - 40}}
              bgColor={Color.ORANGE}
              textColor={Color.WHITE}
              title={checkOut[this.state.selectedIndex].btnTitle}
            />
          )}
        </View>
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
  headerSection: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: Color.WHITE,
  },
  selectedCard: {
    position: 'absolute',
    right: 15,
    alignItems: 'center',
    height: 20,
    width: 20,
  },
  cardImage: {
    height: 50,
    width: 50,
  },
  doublePickerView: {
    flexDirection: 'row',
    width: width - 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Color.WHITE,
  },
  categoryDropDown: {
    width: (width - 100) / 2,
    marginLeft: 20,
    marginBottom: 10,
  },
  readyStyle: {
    height: 180,
    width: 180,
    alignSelf: 'center',
  },
  topMainView: {
    height: 40,
    width: width - 40,
    alignSelf: 'center',
    marginTop: 10,
  },
  subMainView: {
    flexDirection: 'row',
    width: width - 100,
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  subMainLbl: {
    flexDirection: 'row',
    width: width - 80,
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  lineView: {
    height: 1,
    backgroundColor: Color.TXTGRAY,
    width: '100%',
    position: 'absolute',
  },
  imageProgressStyle: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
  },
});
