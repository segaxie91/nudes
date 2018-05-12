import { Dimensions, Platform } from 'react-native'
const isIOS = Platform.OS == "ios";
const deviceH = Dimensions.get('window').height;
const deviceW = Dimensions.get('window').width;

const basePx = 375;

const px2dp = (px) => {
  return px *  deviceW / basePx
};

const navBarHeight = px2dp(isIOS ? 84 : 64);

export default {
  navBarHeight,
  px2dp
}
