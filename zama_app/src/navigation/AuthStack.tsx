import React from 'react';
// navigation
import {createStackNavigator} from '@react-navigation/stack';
// components
import Auth from '@/components/Auth';
//styles
import {WHITE} from '@styles/colors';

const AuthStack = () => {
  const AuthStack = createStackNavigator();
  const basicOptions = {
    cardStyle: {
      backgroundColor: WHITE,
    },
  };
  return (
    <AuthStack.Navigator initialRouteName="Auth" mode="modal" headerMode="none">
      <AuthStack.Screen name="Auth" component={Auth} options={basicOptions} />
    </AuthStack.Navigator>
  );
};

export default AuthStack;
