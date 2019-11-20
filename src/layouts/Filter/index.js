import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import DropdownSelection from '../../components/DropdownSelection';
import CustomNavigation from '../../components/CustomNavigation';
import {Color} from '../../utils/color';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomMarker from '../../components/CustomMarker';
import Label from '../../components/Label';
import KButton from '../../components/KButton';
import TextField from './../../components/TextField';

const {width} = Dimensions.get('window');
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiSliderValue: [3, 7],
    };
  }
  multiSliderValuesChange = values => {
    this.setState({
      multiSliderValue: values,
    });
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
        <CustomNavigation {...this.props} isBack={true} title="Filter" />
        <ScrollView>
          <DropdownSelection data={data} title="Select a category" />
          <DropdownSelection data={data} title="Platform" />
          <DropdownSelection data={data} title="Sort by" />

          <TextField
            title="Location"
            mainStyle={{backgroundColor: Color.TRANSPARENT}}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image
                style={styles.locationStyle}
                source={require('./../../assets/Images/location.png')}
              />
            </TouchableOpacity>
          </TextField>

          <Label font14 ProximaNova_Semibold ml={20} mt={20}>
            Price Per 1000 Views
          </Label>

          <MultiSlider
            selectedStyle={{backgroundColor: Color.ORANGE}}
            unselectedStyle={{backgroundColor: Color.TXTGRAY}}
            isMarkersSeparated={true}
            values={[
              this.state.multiSliderValue[0],
              this.state.multiSliderValue[1],
            ]}
            touchDimensions={{
              height: 40,
              width: 40,
              borderRadius: 20,
              slipDisplacement: 40,
            }}
            containerStyle={{marginLeft: 20, height: 80}}
            sliderLength={Dimensions.get('window').width - 40}
            onValuesChange={this.multiSliderValuesChange}
            min={0}
            max={10}
            step={1}
            allowOverlap
            snapped
            customMarkerLeft={e => {
              return (
                <CustomMarker title={'$' + this.state.multiSliderValue[0]} />
              );
            }}
            customMarkerRight={e => {
              return (
                <CustomMarker title={'$' + this.state.multiSliderValue[1]} />
              );
            }}
          />
        </ScrollView>
        <View style={styles.heightView}>
          <KButton
            buttonStyle={{width: (width - 50) / 2}}
            bgColor={Color.ORANGE_LIGHT_1}
            textColor={Color.ORANGE}
            title="Reset"
          />
          <KButton
            buttonStyle={{width: (width - 50) / 2}}
            bgColor={Color.ORANGE}
            textColor={Color.WHITE}
            title="Apply"
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
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  buttonStyle: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 0,
    top: 10,
  },
  locationStyle: {width: 40, height: 40},
});
