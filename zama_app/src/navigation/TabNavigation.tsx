import React from 'react';
//navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//componenets
import Home from 'components/Home';
//styles
import {BOTTOM_TAB_HEIGHT, BOTTOM_TAB_PADDING_BOTTOM} from '@styles/sizes';
import {BLUE_GREEN} from '@/styles/colors';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: 'lightgray',
        activeBackgroundColor: BLUE_GREEN,
        inactiveBackgroundColor: BLUE_GREEN,
        style: {
          backgroundColor: BLUE_GREEN,
          paddingBottom: BOTTOM_TAB_PADDING_BOTTOM,
          height: BOTTOM_TAB_HEIGHT,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
