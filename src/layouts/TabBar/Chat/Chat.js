import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import {Color} from '../../../utils/color';
import CustomNavigation from '../../../components/CustomNavigation';
import ChatListComp from '../../../components/ChatListComp';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }
  renderItem = ({item}) => {
    return (
      <ChatListComp
        onPress={() => this.props.navigation.navigate('ChatDetails')}
        message={'Hey whatsapp Steve!!.....'}
        name={'Andrew Glover'}
        time="2h ago"
        isOnline={true}
        image="https://www.celebtattler.com/wp-content/uploads/2018/12/Jessica-Arantes.jpg"
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <CustomNavigation {...this.props} isSideMenu={true} title="Chat" />
        <FlatList
          style={styles.listStyle}
          data={['1', '2', '3', '4']}
          extraData={this.state}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
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
  listStyle: {
    marginTop: 0,
    marginBottom: 20,
  },
});
