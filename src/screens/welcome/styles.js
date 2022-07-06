import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  getStartedBtn: {
    top: windowHeight / 1.3,
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  mainTitle: {
    top: windowHeight / 9,
    textAlign: 'center',
    margin: 10,
    // backgroundColor: 'white',
    color: 'white',
  },
});
