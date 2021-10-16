import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './MainStack';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Main" mode="modal" headerMode="none">
      <RootStack.Screen name="Main" component={MainStack} />
      {/* global */}
      {/* <RootStack.Screen
            name="InAppPurchase"
            component={InAppPurchaseScreen}
          /> */}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
