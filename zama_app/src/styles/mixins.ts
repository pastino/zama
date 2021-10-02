import {Platform} from 'react-native';

export const shadow = {
  ...Platform.select({
    ios: {
      shadowColor: '#333',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    android: {elevation: 1},
  }),
};

export const deepShadow = {
  ...Platform.select({
    ios: {
      shadowOffset: {width: 0, height: 3},
      shadowColor: '#333',
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    android: {elevation: 2},
  }),
};

export const noShadow = {
  ...Platform.select({
    ios: {
      shadowColor: '#fff',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0,
      shadowRadius: 0,
    },
    android: {elevation: 0},
  }),
};
