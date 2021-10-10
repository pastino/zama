import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  isIphoneX,
  getStatusBarHeight as getStatusBarHeightForX,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const HEADER_HEIGHT = 70;

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

// 텍스트 인풋 높이
export const INPUT_HEIGHT = 48;

// 버튼 높이
export const BUTTON_HEIGHT = 48;

// 로그인 버튼 넓이
export const LOGIN_BUTTON_WIDTH = SCREEN_WIDTH * 0.8;

// 양쪽 사이트 패딩
export const SIDE_PADDING = 20;

// Horizon 오디오 카드 넓이
export const HORIZON_AUDIO_CARD_WIDTH = SCREEN_WIDTH * 0.35;
// Vertical 2Line 오디오 카드 넓이
export const VERTI_AUDIO_CARD_WIDTH = SCREEN_WIDTH * 0.45;
