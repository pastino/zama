import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import RootNavigator from './RootNavigator';
import {SCREEN_WIDTH} from '@/styles/sizes';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerType="front"
      drawerStyle={{width: SCREEN_WIDTH}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Main" component={RootNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
