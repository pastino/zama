import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import MainStack from './MainStack';

// commons
import Voucher from '@/components/Menu/Voucher';
import MyAccount from '@/components/Menu/MyAccount';
import Notice from '@/components/Menu/Notice';
import Contact from '@/components/Menu/Contact';
import SubscriptionModal from '@/commons/Modals/SubscriptionModal';
import Info from '@/components/Menu/Info';
// styles
import {WHITE} from '@/styles/colors';

const RootStack = createStackNavigator();
const MenuStack = createStackNavigator();
const basicOptions = {
  cardStyle: {
    backgroundColor: WHITE,
  },
  ...TransitionPresets.SlideFromRightIOS,
};
const RootNavigator = () => {
  return (
    <>
      <SubscriptionModal />
      <RootStack.Navigator
        initialRouteName="Main"
        mode="modal"
        headerMode="none">
        <RootStack.Screen name="Main" component={MainStack} />
        <MenuStack.Screen
          name="Voucher"
          component={Voucher}
          options={basicOptions}
        />
        <MenuStack.Screen
          name="MyAccount"
          component={MyAccount}
          options={basicOptions}
        />
        <MenuStack.Screen
          name="Notice"
          component={Notice}
          options={basicOptions}
        />
        <MenuStack.Screen
          name="Contact"
          component={Contact}
          options={basicOptions}
        />
        <MenuStack.Screen name="Info" component={Info} options={basicOptions} />
      </RootStack.Navigator>
    </>
  );
};

export default RootNavigator;
