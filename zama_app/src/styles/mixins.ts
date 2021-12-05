import {Platform} from 'react-native';

export const shadow = {
  ...Platform.select({
    ios: {
      backgroundColor: '#ffffff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {elevation: 2},
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
