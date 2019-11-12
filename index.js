/**
 * @format
 */
import React from 'react';
import {AppRegistry, Image, View} from 'react-native';

import Login from './src/layouts/Login';
import Selection from './src/layouts/Selection';

import Home from './src/layouts/TabBar/Home/Home';
import Chat from './src/layouts/TabBar/Chat/Chat';
import Jobs from './src/layouts/TabBar/Jobs/Jobs';
import Search from './src/layouts/TabBar/Search/Search';

import {name as appName} from './app.json';
import Label from './src/components/Label';
import {Color} from './src/utils/color';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {MultiBar, MultiBarToggle} from 'react-native-multibar';

const TabsNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
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
      screen: Search,
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

    MultiBar: {
      screen: () => null,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: () => (
          <MultiBarToggle
            navigation={navigation}
            actionSize={30}
            // routes={[
            //   {
            //     routeName: Routes.OtherScreen,
            //     color: '#FF8360',
            //     icon: <Icon name="rocket" color="#333333" size={15} />,
            //   },
            //   {
            //     routeName: Routes.OtherScreen,
            //     color: '#E8E288',
            //     icon: <Icon name="dashboard" color="#333333" size={15} />,
            //   },
            //   {
            //     routeName: Routes.OtherScreen,
            //     color: '#7DCE82',
            //     icon: <Icon name="gears" color="#333333" size={15} />,
            //   },
            // ]}
            icon={
              <Image
                style={{width: 70, height: 70}}
                source={require('./src/assets/Images/add_round.png')}
              />
            }
          />
        ),

        tabBarLabel: ({focused}) => {
          return null;
        },
      }),
      params: {
        navigationDisabled: true,
      },
    },
    Jobs: {
      screen: Jobs,
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
      screen: Chat,
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
        height: 60,
        borderTopWidth: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      },
    },
  },
);

// const TabBarNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//       showLabel: true,
//       navigationOptions: () => ({
//         tabBarIcon: ({focused}) => {
//           let image = !focused
//             ? require('./src/assets/Images/home_inactive.png')
//             : require('./src/assets/Images/home_active.png');
//           return <Image style={{width: 27, height: 24}} source={image} />;
//         },
//         tabBarLabel: ({focused}) => {
//           let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
//           return (
//             <Label
//               ml={5}
//               style={{
//                 color: lblColor,
//               }}
//               ProximaNova_Light
//               font12>
//               Home
//             </Label>
//           );
//         },
//       }),
//     },

//     Search: {
//       screen: Search,
//       showLabel: true,
//       navigationOptions: () => ({
//         tabBarIcon: ({focused}) => {
//           let image = !focused
//             ? require('./src/assets/Images/search_inactive.png')
//             : require('./src/assets/Images/search_active.png');
//           return <Image style={{width: 24, height: 24}} source={image} />;
//         },
//         tabBarLabel: ({focused}) => {
//           let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
//           return (
//             <Label style={{color: lblColor}} ProximaNova_Light font12>
//               Search
//             </Label>
//           );
//         },
//       }),
//     },

//     // Our plus button
//     Adding: {
//       screen: () => null, // Empty screen
//       showLabel: false,
//       navigationOptions: () => ({
//         tabBarIcon: ({focused}) => {
//           let image = !focused
//             ? require('./src/assets/Images/chat_inactive.png')
//             : require('./src/assets/Images/chat_active.png');

//           return (
//             <View
//               style={{
//                 backgroundColor: 'yellow',
//                 height: 200,
//                 position: 'absolute',
//                 width: 60,
//                 height: 60,
//                 borderRadius: 30,
//                 backgroundColor: '#ee6e73',
//                 position: 'absolute',
//                 bottom: 10,
//                 right: 10,
//               }}>
//               <Image style={{width: 26, height: 24}} source={image} />
//             </View>
//           );
//         },
//       }),
//     },
//     Jobs: {
//       screen: Jobs,
//       showLabel: true,
//       navigationOptions: () => ({
//         tabBarIcon: ({focused}) => {
//           let image = !focused
//             ? require('./src/assets/Images/jobs_inactive.png')
//             : require('./src/assets/Images/jobs_active.png');
//           return <Image style={{width: 28, height: 24}} source={image} />;
//         },
//         tabBarLabel: ({focused}) => {
//           let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
//           return (
//             <Label style={{color: lblColor}} ProximaNova_Light font12>
//               Jobs
//             </Label>
//           );
//         },
//       }),
//     },

//     Chat: {
//       screen: Chat,
//       showLabel: true,
//       navigationOptions: () => ({
//         tabBarIcon: ({focused}) => {
//           let image = !focused
//             ? require('./src/assets/Images/chat_inactive.png')
//             : require('./src/assets/Images/chat_active.png');

//           return <Image style={{width: 26, height: 24}} source={image} />;
//         },
//         tabBarLabel: ({focused}) => {
//           let lblColor = !focused ? Color.INACTIVE : Color.ORANGE_LIGHT;
//           return (
//             <Label style={{color: lblColor}} ProximaNova_Light font12>
//               Chat
//             </Label>
//           );
//         },
//       }),
//     },
//   },
//   {
//     tabBarOptions: {
//       style: {
//         zIndex: -1,
//         paddingVertical: 0,
//         height: 50,
//         backgroundColor: Color.WHITE,
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         overflow: 'hidden',
//         borderTopWidth: 0,
//       },
//       tabStyle: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         overflow: 'hidden',
//       },
//       labelStyle: {
//         marginLeft: 0,
//       },
//     },
//     navigationOptions: {
//       gesturesEnabled: false,
//     },
//     initialRouteName: 'Home',
//   },
// );

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

const RootNavigattion = createSwitchNavigator({
  AuthNavigation: AuthNavigation,
  TabsNavigator: TabsNavigator,
});

const RootNavigator = createAppContainer(RootNavigattion);

AppRegistry.registerComponent(appName, () => RootNavigator);
