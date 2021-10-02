import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  isIphoneX,
  getStatusBarHeight as getStatusBarHeightForX,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const HEADER_HEIGHT = Platform.OS === 'ios' && isIphoneX() ? 120 : 70;

export const SCREEN_HEIGHT =
  Platform.OS === 'ios' && isIphoneX()
    ? Dimensions.get('window').height -
      getStatusBarHeightForX() -
      getBottomSpace()
    : Dimensions.get('window').height;

export const FULL_SCREEN_HEIGHT = Dimensions.get('window').height;

export const ABSOLUTE_TOP_ZERO =
  Platform.OS === 'ios'
    ? isIphoneX()
      ? getStatusBarHeightForX() + 18
      : getStatusBarHeight()
    : 0;

export const ABSOLUTE_BOTTOM_ZERO =
  Platform.OS === 'ios' && isIphoneX() ? getBottomSpace() : 0;

// 네비게이션 탭바 높이
export const BOTTOM_TAB_HEIGHT = Platform.OS === 'ios' && isIphoneX() ? 80 : 60;
export const BOTTOM_TAB_PADDING_BOTTOM =
  Platform.OS === 'ios' && isIphoneX() ? 25 : 10;

export const TAP_SCREEN_HEIGHT =
  Platform.OS === 'ios' && isIphoneX()
    ? Dimensions.get('window').height - BOTTOM_TAB_HEIGHT
    : Dimensions.get('window').height - BOTTOM_TAB_HEIGHT;
