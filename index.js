/**
 * @format
 */
import React from 'react';
import {AppRegistry, Image, Dimensions} from 'react-native';

import Login from './src/layouts/Login';
import Selection from './src/layouts/Selection';
import Filter from './src/layouts/Filter';
import EditProfile from './src/layouts/EditProfile';

import Home from './src/layouts/TabBar/Home/Home';
import Details from './src/layouts/TabBar/Home/Details';
import Details_Influencer from './src/layouts/TabBar/Home/Details_Influencer';
import Proposal from './src/layouts/Proposal';

import Chat from './src/layouts/TabBar/Chat/Chat';
import ChatDetails from './src/layouts/ChatDetails';

import Jobs from './src/layouts/TabBar/Jobs/Jobs';
import Jobs_Influencer from './src/layouts/TabBar/Jobs/Jobs_Influencer';

import Search from './src/layouts/TabBar/Search/Search';

import {name as appName} from './app.json';
import Label from './src/components/Label';
import {Color} from './src/utils/color';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createDrawerNavigator} from 'react-navigation-drawer';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';
import SideMenu from './src/components/SideMenu';

// Add Product ::

import AddProduct from './src/layouts/AddProduct';
import AddPhoto from './src/layouts/AddPhoto';
import Checkout from './src/layouts/Checkout';

/**********************************
 ********** Business **************
 *********************************/

// Product Navigation

const ProductNavigation = createStackNavigator(
  {
    AddProduct: {
      screen: AddProduct,
    },
    AddPhoto: {
      screen: AddPhoto,
    },
    Checkout: {
      screen: Checkout,
    },
    EditProfile: {
      screen: EditProfile,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
    backBehavior: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

ProductNavigation.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  let gesturesEnabled = false;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      console.log('route.routeName', route.routeName);

      if (route.routeName === 'Checkout') {
        tabBarVisible = false;
      } else if (route.routeName === 'AddPhoto') {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    gesturesEnabled,
  };
};

// Chat Navigation::

const ChatNavigation = createStackNavigator(
  {
    Chat: {
      screen: Chat,
    },
    ChatDetails: {
      screen: ChatDetails,
    },
    EditProfile: {
      screen: EditProfile,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
    backBehavior: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

ChatNavigation.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  let gesturesEnabled = false;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      console.log('route.routeName', route.routeName);

      if (route.routeName === 'ChatDetails') {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    gesturesEnabled,
  };
};

// Home Navigation ::

const HomeNav = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Details: {
      screen: Details,
    },
    Details_Influencer: {
      screen: Details_Influencer,
    },
    Proposal: {
      screen: Proposal,
    },
    EditProfile: {
      screen: EditProfile,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
    backBehavior: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

HomeNav.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  let gesturesEnabled = false;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      console.log('route.routeName', route.routeName);

      if (route.routeName === 'Details') {
        tabBarVisible = false;
      } else if (route.routeName === 'Details_Influencer') {
        tabBarVisible = false;
      } else if (route.routeName === 'Proposal') {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    gesturesEnabled,
  };
};

const HomeNavigation = createStackNavigator(
  {
    Home: HomeNav,
    Filter: Filter,
  },
  {
    headerMode: 'none',
    mode: 'modal',
    backBehavior: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

HomeNavigation.navigationOptions = ({navigation}) => {
  let tabBarVisible;
  let gesturesEnabled = false;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      console.log('route.routeName', route.routeName);

      if (route.routeName === 'Filter') {
        tabBarVisible = false;
      } else if (route.routeName === 'Details') {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible,
    gesturesEnabled,
  };
};

// Search Navigation ::

const SearchNavigation = createStackNavigator(
  {
    Search: {
      screen: Search,
    },
    EditProfile: {
      screen: EditProfile,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
    backBehavior: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

// Job Navigation

const JobsNavigation = createStackNavigator(
  {
    Jobs: {
      screen: Jobs,
    },
    EditProfile: {
      screen: EditProfile,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
    backBehavior: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const TabsNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigation,
      showLabel: true,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let image = !focused
            ? require('./src/assets/Images/home_inactive.png')
            : require('./src/assets/Images/home_active.png');
          return (
            <Image
              style={{
                width: 27,
                height: 24,
                marginTop: 5,
              }}
              source={image}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
          return (
            <Label
              style={{
                color: lblColor,
                textAlign: 'center',
              }}
              ProximaNova_Light
              font12>
              Home
            </Label>
          );
        },
      }),
    },

    Search: {
      screen: SearchNavigation,
      showLabel: true,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let image = !focused
            ? require('./src/assets/Images/search_inactive.png')
            : require('./src/assets/Images/search_active.png');
          return (
            <Image
              style={{width: 24, height: 24, marginTop: 5}}
              source={image}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
          return (
            <Label
              style={{color: lblColor, textAlign: 'center'}}
              ProximaNova_Light
              font12>
              Search
            </Label>
          );
        },
      }),
    },

    AddProduct: {
      screen: ProductNavigation,
      showLabel: false,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let image = !focused
            ? require('./src/assets/Images/search_inactive.png')
            : require('./src/assets/Images/search_active.png');
          return (
            <Image
              style={{
                width: 70,
                height: 70,
                marginBottom: 50,
                borderRadius: 35,
                borderWidth: 3,
                borderColor: Color.BGLIGHT,
              }}
              source={require('./src/assets/Images/add_round.png')}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          return null;
        },
      }),
    },

    // MultiBar: {
    //   screen: () => null,
    //   navigationOptions: ({navigation}) => ({
    //     tabBarIcon: () => (
    //       <MultiBarToggle
    //         navigation={navigation}
    //         actionSize={30}
    //         // routes={[
    //         //   {
    //         //     routeName: Routes.OtherScreen,
    //         //     color: '#FF8360',
    //         //     icon: <Icon name="rocket" color="#333333" size={15} />,
    //         //   },
    //         //   {
    //         //     routeName: Routes.OtherScreen,
    //         //     color: '#E8E288',
    //         //     icon: <Icon name="dashboard" color="#333333" size={15} />,
    //         //   },
    //         //   {
    //         //     routeName: Routes.OtherScreen,
    //         //     color: '#7DCE82',
    //         //     icon: <Icon name="gears" color="#333333" size={15} />,
    //         //   },
    //         // ]}
    //         icon={
    //           <Image
    //             style={{width: 70, height: 70}}
    //             source={require('./src/assets/Images/add_round.png')}
    //           />
    //         }
    //       />
    //     ),

    //     tabBarLabel: ({focused}) => {
    //       return null;
    //     },
    //   }),
    //   params: {
    //     navigationDisabled: true,
    //   },
    // },
    Jobs: {
      screen: JobsNavigation,
      showLabel: true,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let image = !focused
            ? require('./src/assets/Images/jobs_inactive.png')
            : require('./src/assets/Images/jobs_active.png');
          return (
            <Image
              style={{width: 28, height: 24, marginTop: 5}}
              source={image}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
          return (
            <Label
              style={{
                color: lblColor,
                textAlign: 'center',
              }}
              ProximaNova_Light
              font12>
              Jobs
            </Label>
          );
        },
      }),
    },
    Chat: {
      screen: ChatNavigation,
      showLabel: true,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let image = !focused
            ? require('./src/assets/Images/chat_inactive.png')
            : require('./src/assets/Images/chat_active.png');

          return (
            <Image
              style={{width: 26, height: 24, marginTop: 5}}
              source={image}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
          return (
            <Label
              style={{color: lblColor, textAlign: 'center'}}
              ProximaNova_Light
              font12>
              Chat
            </Label>
          );
        },
      }),
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: Color.WHITE,
        height: 50,
        borderTopWidth: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      },
    },
  },
);

/************************************
 ********** Influencer **************
 ************************************/

// JOB INFLUENCER ::

const JobsInfuencerNav = createStackNavigator(
  {
    Jobs_Influencer: {
      screen: Jobs_Influencer,
    },
    EditProfile: {
      screen: EditProfile,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
    backBehavior: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const TabsNavigatorInfluencer = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigation,
      showLabel: true,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let image = !focused
            ? require('./src/assets/Images/home_inactive.png')
            : require('./src/assets/Images/home_active.png');
          return <Image style={{width: 27, height: 24}} source={image} />;
        },
        tabBarLabel: ({focused}) => {
          let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
          return (
            <Label
              style={{
                color: lblColor,
                textAlign: 'center',
              }}
              ProximaNova_Light
              font12>
              Home
            </Label>
          );
        },
      }),
    },

    Search: {
      screen: SearchNavigation,
      showLabel: true,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let image = !focused
            ? require('./src/assets/Images/search_inactive.png')
            : require('./src/assets/Images/search_active.png');
          return <Image style={{width: 24, height: 24}} source={image} />;
        },
        tabBarLabel: ({focused}) => {
          let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
          return (
            <Label
              style={{color: lblColor, textAlign: 'center'}}
              ProximaNova_Light
              font12>
              Search
            </Label>
          );
        },
      }),
    },

    Jobs: {
      screen: JobsInfuencerNav,
      showLabel: true,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let image = !focused
            ? require('./src/assets/Images/jobs_inactive.png')
            : require('./src/assets/Images/jobs_active.png');
          return <Image style={{width: 28, height: 24}} source={image} />;
        },
        tabBarLabel: ({focused}) => {
          let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
          return (
            <Label
              style={{
                color: lblColor,
                textAlign: 'center',
              }}
              ProximaNova_Light
              font12>
              Jobs
            </Label>
          );
        },
      }),
    },
    Chat: {
      screen: ChatNavigation,
      showLabel: true,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => {
          let image = !focused
            ? require('./src/assets/Images/chat_inactive.png')
            : require('./src/assets/Images/chat_active.png');

          return <Image style={{width: 26, height: 24}} source={image} />;
        },
        tabBarLabel: ({focused}) => {
          let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
          return (
            <Label
              style={{color: lblColor, textAlign: 'center'}}
              ProximaNova_Light
              font12>
              Chat
            </Label>
          );
        },
      }),
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: Color.WHITE,
        height: 50,
        borderTopWidth: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      },
    },
  },
);

const AuthNavigation = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Selection: {
      screen: Selection,
    },
  },
  {
    headerMode: 'none',
    mode: 'card',
    backBehavior: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    SideMenu: {
      screen: TabsNavigator,
    },
  },
  {
    contentComponent: SideMenu,
    drawerPosition: 'left',
    drawerWidth: Dimensions.get('window').width * 0.8,
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const DrawerNavInfluencer = createDrawerNavigator(
  {
    SideMenu: {
      screen: TabsNavigatorInfluencer,
    },
  },
  {
    contentComponent: SideMenu,
    drawerPosition: 'left',
    drawerWidth: Dimensions.get('window').width * 0.8,
    overlayColor: 'rgba(0, 0, 0, 0.8)',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const RootNavigation = createSwitchNavigator({
  AuthNavigation: AuthNavigation,
  DrawerNavigator: DrawerNavigator,
  DrawerNavInfluencer: DrawerNavInfluencer,
});

const RootNavigator = createAppContainer(RootNavigation);

AppRegistry.registerComponent(appName, () => RootNavigator);
