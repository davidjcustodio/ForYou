import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import CustomNavigation from '../../components/CustomNavigation';
import {Color} from '../../utils/color';
import Label from '../../components/Label';
import KButton from '../../components/KButton';
import TextField from './../../components/TextField';

const {width} = Dimensions.get('window');
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: '',
    };
  }

  renderPhoto = () => {
    return (
      <TouchableOpacity style={styles.mainPhtoView}>
        <Image
          style={styles.profileImage}
          source={{
            uri:
              'https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg',
          }}
        />

        <Image
          style={styles.cameraIcon}
          source={require('./../../assets/Images/camera.png')}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomNavigation {...this.props} isBack={true} title="Business" />
        <ScrollView>
          {/* Business Name*/}

          {this.renderPhoto()}

          <TextField
            title="Business Name"
            value="Street Fashion"
            mainStyle={{backgroundColor: Color.TRANSPARENT}}
          />
          <TextField
            title="Email Address"
            value="test@gmail.com"
            mainStyle={{backgroundColor: Color.TRANSPARENT}}
          />

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

          <Label font16 ProximaNova_Semibold ml={20} mt={30}>
            Bio / About Me
          </Label>
          <View style={styles.aboutUs}>
            <TextInput
              maxLength={1500}
              onChangeText={text => {
                this.setState({
                  about: text,
                });
              }}
              style={styles.txtStyle}
              placeholder="Small Description About your self"
            />
            <Label font14 ProximaNova_Light style={styles.lblCountStyle}>
              {this.state.about.length + '/' + 1500}
            </Label>
          </View>
        </ScrollView>
        <View style={styles.heightView}>
          <KButton
            buttonStyle={{width: width - 40}}
            bgColor={Color.ORANGE}
            textColor={Color.WHITE}
            title="Update"
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
    borderBottomColor: Color.TXTGRAY,
    borderBottomWidth: 0.5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 20,
  },
  txtStyle: {
    width: width - 120,
    height: 40,
  },
  lblCountStyle: {
    width: 80,
    textAlign: 'right',
  },
  mainPhtoView: {
    width: 150,
    height: 150,
    borderRadius: 75,
    padding: 5,
    borderColor: Color.ORANGE,
    borderWidth: 0.5,
    alignSelf: 'center',
    margin: 30,
  },
  cameraIcon: {
    position: 'absolute',
    right: 5,
    bottom: 5,
    height: 40,
    width: 40,
  },
  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
});
