import React, {Fragment} from 'react';
//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//componenets
import Home from 'components/Home';
import SleepBasket from '@/components/SleepBasket';
import BottomTabButton from './BottomTabButton';
import {View} from 'react-native';

export const bottomTabInfo = [
  {name: 'SleepBasket', component: SleepBasket},
  {name: 'Home', component: Home},
  {name: 'MyPage', component: SleepBasket},
];

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        lazy={false}
        backBehavior="initialRoute"
        initialRouteName="Home"
        tabBar={props => <BottomTabButton {...props} />}>
        {bottomTabInfo.map(({name, component}) => (
          <Fragment key={name}>
            <Tab.Screen name={name} component={component} />
          </Fragment>
        ))}
      </Tab.Navigator>
    </View>
  );
}
