import {StyleSheet, Platform} from 'react-native';
import colors from './colors';

const baseOptions = {
  color: colors.FONT,
  ...Platform.select({
    android: {fontFamily: 'NotoSansKR-Regular'},
  }),
};

export const typography = StyleSheet.create({
  f40: {
    ...baseOptions,
    fontSize: 40,
  },
  f34: {
    ...baseOptions,
    fontSize: 34,
  },
  f24: {
    ...baseOptions,
    fontSize: 24,
  },
  f20: {
    ...baseOptions,
    fontSize: 20,
  },
  f18: {
    ...baseOptions,
    fontSize: 18,
  },
  f16: {
    ...baseOptions,
    fontSize: 16,
  },
  f15: {
    ...baseOptions,
    fontSize: 15,
  },
  f14: {
    ...baseOptions,
    fontSize: 14,
  },
  f12: {
    ...baseOptions,
    fontSize: 12,
  },
  f10: {
    ...baseOptions,
    fontSize: 10,
  },
  f8: {
    ...baseOptions,
    fontSize: 8,
  },
  light: {
    ...Platform.select({
      ios: {
        fontWeight: '300',
      },
      android: {fontFamily: 'NotoSansKR-Light'},
    }),
  },
  normal: {
    ...Platform.select({
      ios: {
        fontWeight: '400',
      },
      android: {fontFamily: 'NotoSansKR-Regular'},
    }),
  },
  medium: {
    ...Platform.select({
      ios: {
        fontWeight: '500',
      },
      android: {fontFamily: 'NotoSansKR-Medium'},
    }),
  },
  bold: {
    ...Platform.select({
      ios: {
        fontWeight: '700',
      },
      android: {fontFamily: 'NotoSansKR-Bold'},
    }),
  },
  link: {
    color: colors.BLUE,
    textDecorationLine: 'underline',
  },
});
