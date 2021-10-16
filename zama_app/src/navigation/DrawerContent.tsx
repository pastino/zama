import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

export default function DrawerContent({navigation}) {
  const {navigate, closeDrawer} = navigation;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}></SafeAreaView>
  );
}
