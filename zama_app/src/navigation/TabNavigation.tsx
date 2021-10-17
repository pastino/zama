import React from 'react';
//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//componenets
import Home from 'components/Home';
import SleepBasket from '@/components/SleepBasket';
import BottomTabButton from './BottomTabButton';
import {View} from 'react-native';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        lazy={false}
        backBehavior="initialRoute"
        initialRouteName="자마픽"
        tabBar={props => <BottomTabButton {...props} />}>
        <Tab.Screen name="자마픽" component={Home} />
        <Tab.Screen name="잠바구니" component={SleepBasket} />
      </Tab.Navigator>
    </View>
  );
}
