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
import colors from '@/styles/colors';
import NoticeDetail from '@/components/Menu/Notice/NoticeDetail';
import RewardModal from '@/commons/Modals/ RewardModal';
import Subscription from '@/components/Menu/Subscription';
import {ActivityIndicator, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@/styles/sizes';
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';

const RootStack = createStackNavigator();
const MenuStack = createStackNavigator();
const basicOptions = {
  cardStyle: {
    backgroundColor: colors.WHITE,
  },
  ...TransitionPresets.SlideFromRightIOS,
};
const RootNavigator = () => {
  const {isLoading} = useSelector((state: State) => state.interactionReducer);
  return (
    <>
      <RewardModal />
      <SubscriptionModal />
      <RootStack.Navigator
        initialRouteName="Main"
        mode="modal"
        headerMode="none">
        <RootStack.Screen name="Main" component={MainStack} />
        <MenuStack.Screen
          name="Subscription"
          component={Subscription}
          options={basicOptions}
        />
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
        <MenuStack.Screen
          name="NoticeDetail"
          component={NoticeDetail}
          options={basicOptions}
        />
      </RootStack.Navigator>
      {isLoading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <ActivityIndicator size={30} />
        </View>
      )}
    </>
  );
};

export default RootNavigator;
