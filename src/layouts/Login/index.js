import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import Label from '../../components/Label';
import {Color} from '../../utils/color';
import KButton from '../../components/KButton';
import {fontX35} from './../../utils/theme';

const FBSDK = require('react-native-fbsdk');
const {LoginManager, GraphRequest, GraphRequestManager, AccessToken} = FBSDK;

export default class index extends Component {
  // Constructor And LifeCycle ::

  // Click Events ::
  onSignClick = () => {
    console.log('onSignClick');
  };
  onTermsClick = () => {
    console.log('onTermsClick');
  };

  // Facebook Login ::

  facebookLogin = () => {
    //LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(result => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      result => {
        {
          console.log(result);
        }
        if (result.isCancelled) {
          // alert('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            let accessToken = data.accessToken;
            const responseInfoCallback = (error, result) => {
              if (error) {
                console.log(error);
                alert('Error fetching data: ' + error.toString());
              } else {
                if (result != null) {
                  console.log('redult data is', result);
                  alert(JSON.stringify(result));
                }
              }
            };

            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken: accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,first_name,middle_name,last_name',
                  },
                },
              },
              responseInfoCallback,
            );

            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      function(error) {
        alert('Login failed with error: ' + error);
      },
    );
  };

  // Render Main View ::
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollStyle}>
          <Image
            resizeMode="stretch"
            style={styles.imageStyle}
            source={require('./../../assets/Images/loginHeader.jpg')}
          />
          <Image
            style={styles.logoStyle}
            source={require('./../../assets/Images/forYouLogo.png')}
          />
          <Label
            ProximaNova_Bold
            style={styles.titleStyle}
            ml={30}
            mt={20}
            mb={10}>
            {'The simple way to \nbuy and sell \nlocally'}
          </Label>
          <KButton
            onPress={() => this.props.navigation.navigate('Selection')}
            icon="mail"
            buttonStyle={styles.marginTP}
            bgColor={Color.ORANGE}
            textColor={Color.WHITE}
            title="Continue with email"
          />
          <KButton
            icon="google"
            buttonStyle={styles.marginTP}
            bgColor={Color.WHITE}
            textColor={Color.BLACK}
            title="Continue with email"
          />
          <KButton
            onPress={this.facebookLogin}
            icon="facebook"
            buttonStyle={styles.marginTP}
            bgColor={Color.BLUECOLOR}
            textColor={Color.WHITE}
            title="Continue with facebook"
          />

          <Label mt={10} font14>
            Already have an account{' '}
            <Label
              onPress={this.onSignClick}
              color={Color.ORANGE}
              font14
              ProximaNova_Bold>
              Sign in!
            </Label>
          </Label>

          <Label
            mt={30}
            mb={20}
            ml={20}
            mr={20}
            color={Color.TXT_GRY_COLOR}
            style={styles.centerText}
            font12>
            By signing up or logging in, you agree to our{' '}
            <Label
              onPress={this.onTermsClick}
              color={Color.ORANGE}
              textDecorationLine="underline"
              font12
              ProximaNova_Bold>
              Terms & Condition
            </Label>{' '}
            and{' '}
            <Label
              color={Color.ORANGE}
              textDecorationLine="underline"
              font12
              ProximaNova_Bold>
              Privacy Policy.
            </Label>
          </Label>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// Styles ::

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BGLIGHT,
  },
  imageStyle: {
    width: Dimensions.get('window').width,
    height: 250,
  },
  logoStyle: {
    width: 151,
    height: 60,
    marginTop: 20,
    marginLeft: 30,
    alignSelf: 'flex-start',
  },
  scrollStyle: {
    backgroundColor: Color.BGLIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginTP: {
    marginTop: 20,
  },
  titleStyle: {
    fontSize: fontX35,
    alignSelf: 'flex-start',
  },
  centerText: {
    textAlign: 'center',
  },
});
