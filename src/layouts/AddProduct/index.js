import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import CustomNavigation from '../../components/CustomNavigation';
import {Color} from '../../utils/color';
import Label from '../../components/Label';
import KButton from '../../components/KButton';
import TextField from './../../components/TextField';
import DropdownSelection from '../../components/DropdownSelection';

const {width} = Dimensions.get('window');
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      title: '',
    };
  }

  renderPhotoView = () => {
    return (
      <View style={styles.containerPhotoView}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddPhoto')}
          style={styles.addPhotoBtn}>
          <Image
            style={styles.iconImage}
            source={require('./../../assets/Images/camera_gray.png')}
          />
        </TouchableOpacity>

        <FlatList
          style={styles.listStyle}
          horizontal={true}
          data={[
            'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
            'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
          ]}
          renderItem={({item}) => {
            return (
              <View>
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri:
                      'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
                  }}
                />

                <Label style={styles.titleStyle} font14 ProximaNova_Semibold>
                  Cloth
                </Label>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  render() {
    let data = [
      {
        value: 'Fashion Influencer',
      },
      {
        value: 'Fashion Influencer 1',
      },
      {
        value: 'Fashion Influencer 2',
      },
    ];
    return (
      <View style={styles.container}>
        <CustomNavigation
          {...this.props}
          isSideMenu={true}
          title="Product Details"
        />
        <ScrollView>
          {/* Business Name*/}

          {this.renderPhotoView()}

          <TextField
            title="Title"
            placeholder="Type what are you selling"
            mainStyle={{backgroundColor: Color.TRANSPARENT}}
            onChangeText={text => {
              this.setState(
                {
                  title: text,
                },
                () => {
                  console.log('this title', this.state.title);
                },
              );
            }}
            value={this.props.title}
          />

          <Label font14 ProximaNova_Semibold ml={20} mt={30}>
            Description
          </Label>
          <View style={styles.aboutUs}>
            <TextInput
              maxLength={1500}
              onChangeText={text => {
                this.setState({
                  description: text,
                });
              }}
              style={styles.txtStyle}
              placeholder="Description what you're selling, indetail"
            />
            <Label font14 ProximaNova_Light style={styles.lblCountStyle}>
              {this.state.description.length + '/' + 1500}
            </Label>
          </View>

          <TextField
            title="Location"
            value="Street 15, New York, USA"
            mainStyle={{backgroundColor: Color.TRANSPARENT}}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image
                style={styles.locationStyle}
                source={require('./../../assets/Images/location.png')}
              />
            </TouchableOpacity>
          </TextField>

          <View style={styles.doublePickerView}>
            <DropdownSelection
              style={styles.categoryDropDown}
              data={data}
              title="Select a Category"
            />
            <DropdownSelection
              style={styles.widthStyle}
              data={data}
              title="Price"
            />
          </View>

          <DropdownSelection data={data} title="Platform" />
        </ScrollView>
        <View style={styles.heightView}>
          <KButton
            onPress={() => this.props.navigation.navigate('Checkout')}
            buttonStyle={{width: width - 40}}
            bgColor={Color.ORANGE}
            textColor={Color.WHITE}
            title="Post"
          />
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
  locationStyle: {
    width: 40,
    height: 40,
  },
  aboutUs: {
    flexDirection: 'row',
    width: width - 40,
    borderBottomColor: Color.TXT_GRY_COLOR,
    borderBottomWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 10,
  },
  txtStyle: {
    width: width - 120,
    height: 40,
  },
  lblCountStyle: {
    width: 80,
    textAlign: 'right',
  },

  doublePickerView: {
    flexDirection: 'row',
    width: width - 40,
    alignSelf: 'center',
  },
  categoryDropDown: {
    width: (width - 60) / 2,
    marginLeft: 0,
    marginRight: 0,
  },
  widthStyle: {
    width: (width - 60) / 2,
  },
  containerPhotoView: {
    height: 100,
    width: width - 40,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  addPhotoBtn: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
    borderRadius: 15,
  },
  listStyle: {
    width: width - 140,
    height: 100,
  },
  imageStyle: {
    width: width - 150,
    height: 100,
    marginLeft: 10,
    borderRadius: 15,
  },
  iconImage: {
    width: 30,
    height: 27,
  },
  titleStyle: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    color: Color.WHITE,
  },
});
