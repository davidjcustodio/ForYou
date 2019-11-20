import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {Color} from './../../utils/color';
import {fontX16, fontX14} from '../../utils/theme';
import CustomNavigation from '../../components/CustomNavigation';
import Label from '../../components/Label';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import KButton from '../../components/KButton';

const {width} = Dimensions.get('window');
export default class index extends React.Component {
  state = {
    messages: [],
    isOpenEmoji: false,
    sendText: '',
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Accept',
          boldTitle: 'Street Fashion Offer You !!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],

      alterMessage: false,
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  renderBottomTextInput = () => {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.addMoreTouch}>
          <Image
            style={styles.addBtnStyle}
            source={require('./../../assets/Images/add_round.png')}
          />
        </TouchableOpacity>

        <View style={styles.middleView}>
          <TextInput
            placeholder="Type Something"
            style={styles.textInputStyle}
            onChangeText={text => {
              this.setState(
                {
                  sendText: text,
                },
                () => {
                  console.log('----', this.state.sendText);
                },
              );
            }}
            value={this.state.sendText}
            onFocus={() => {
              this.setState({
                isOpenEmoji: false,
              });
            }}
          />

          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              this.setState({
                isOpenEmoji: true,
              });
            }}
            style={styles.emojiStyle}>
            <Image
              style={styles.emoji}
              source={require('./../../assets/Images/emoji.png')}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.onSend({
              _id: 2,
              text: this.state.sendText,
              createdAt: new Date(),
              boldTitle: '',
              user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            });
            this.setState({alterMessage: true, sendText: ''});
          }}
          style={styles.sendStyle}>
          <Image
            style={styles.emoji}
            source={require('./../../assets/Images/sent.png')}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  emojiSelected = emoji => {
    this.setState({
      sendText: this.state.sendText + emoji,
    });
  };

  renderBubble = props => {
    console.log('====================================');
    // console.log(props.currentMessage);
    console.log('====================================');
    return (
      <View
        style={[
          styles.bubbleContainer,
          {
            justifyContent:
              props.position === 'left' ? 'flex-start' : 'flex-end',
          },
        ]}>
        {props.position === 'left' ? (
          props.currentMessage.text === 'Accept' ? (
            this.renderAcceptCounter(props)
          ) : (
            <View style={[styles.messageText, {borderTopLeftRadius: 0}]}>
              <Label font16 ProximaNova_Regular>
                {props.currentMessage.text}
              </Label>
            </View>
          )
        ) : (
          <View style={[styles.messageText, {borderBottomRightRadius: 0}]}>
            <Label font16 ProximaNova_Regular>
              {props.currentMessage.text}
            </Label>
          </View>
        )}
      </View>
    );
  };

  renderAcceptCounter = temp => {
    return (
      <View style={[styles.messageText, {borderTopLeftRadius: 0}]}>
        <Label font18 ProximaNova_Semibold>
          {temp.currentMessage.text}
        </Label>
        <Label font16 ProximaNova_Regular>
          {temp.currentMessage.text}
        </Label>

        <View style={styles.acceptStyle}>
          <KButton
            buttonStyle={styles.accept}
            textStyle={{fontSize: fontX14}}
            bgColor={Color.ORANGE}
            textColor={Color.WHITE}
            title="Accept"
          />

          <KButton
            buttonStyle={styles.counterStyle}
            textStyle={{fontSize: fontX14}}
            bgColor={Color.WHITE}
            textColor={Color.ORANGE}
            title="Counter"
          />
        </View>
      </View>
    );
  };

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.mainContainer}>
        <CustomNavigation {...this.props} isBack={true} title="Chat Details" />
        <GiftedChat
          renderBubble={this.renderBubble}
          messages={this.state.messages}
          minInputToolbarHeight={100}
          renderInputToolbar={this.renderBottomTextInput}
          renderFooter={() => {
            return (
              <KButton
                buttonStyle={styles.offerStyle}
                textStyle={{fontSize: fontX14}}
                bgColor={Color.ORANGE}
                textColor={Color.WHITE}
                title="Offer Proposal"
              />
            );
          }}
          // onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {this.state.isOpenEmoji && (
          <SafeAreaView>
            <EmojiSelector
              style={{height: 216}}
              showSearchBar={false}
              category={Categories.symbols}
              onEmojiSelected={emoji => this.emojiSelected(emoji)}
            />
          </SafeAreaView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.BGLIGHT,
  },
  container: {
    height: 100,
    backgroundColor: Color.WHITE,
    alignItems: 'center',
    flexDirection: 'row',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
  },
  addMoreTouch: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleView: {
    width: width - 120,
    height: 50,
    backgroundColor: Color.BGLIGHT,
    borderRadius: 25,
    flexDirection: 'row',
  },
  textInputStyle: {
    width: width - 170,
    height: 50,
    overflow: 'hidden',
    paddingLeft: 20,
    fontFamily: 'ProximaNova-Regular',
    fontSize: fontX16,
  },
  emojiStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendStyle: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnStyle: {
    width: 23,
    height: 23,
  },
  bubbleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 60,
  },
  messageText: {
    backgroundColor: Color.WHITE,
    padding: 15,
    margin: 5,
    borderRadius: 15,
  },
  emoji: {
    width: 22,
    height: 22,
  },
  acceptStyle: {
    height: 45,
    width: 190,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  counterStyle: {
    width: 90,
    height: 40,
    borderWidth: 1,
    borderColor: Color.ORANGE,
  },
  accept: {
    width: 90,
    height: 40,
  },
  offerStyle: {
    width: 140,
    height: 50,
    marginBottom: 10,
  },
});
