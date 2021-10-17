import React from 'react';
// navigation
import {createStackNavigator} from '@react-navigation/stack';
// components
import Auth from '@/components/Auth';
import EmailLogin from '@/components/Auth/EmailLogin';
import EmailSignup from '@/components/Auth/EmailSignup';
import Servey from '@/components/Servey';
//styles
import {WHITE} from '@styles/colors';
import {SafeAreaView, View} from 'react-native';

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
      <AuthStack.Screen
        name="EmailLogin"
        component={EmailLogin}
        options={basicOptions}
      />
      <AuthStack.Screen
        name="EmailSignup"
        component={EmailSignup}
        options={basicOptions}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStack;
