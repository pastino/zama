import React from 'react';
// navigation
import {createStackNavigator} from '@react-navigation/stack';
// components
import Auth from '@/components/Auth';
import EmailLogin from '@/components/Auth/EmailLogin';
import EmailSignup from '@/components/Auth/EmailSignup';
import PrivacyPolicy from '@/components/Auth/Terms/PrivacyPolicy';
import UseTerm from '@/components/Auth/Terms/UseTerm';
import FindPassword from '@/components/Auth/FindPassword';
import ConfirmCertNum from '@/components/Auth/FindPassword/ConfirmCertNum';
import ChangePassword from '@/components/Auth/FindPassword/ChangePassword';
//styles
import colors from '@styles/colors';
import {SafeAreaView} from 'react-native';

const AuthStack = () => {
  const AuthStack = createStackNavigator();
  const basicOptions = {
    cardStyle: {
      backgroundColor: colors.WHITE,
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
      <AuthStack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={basicOptions}
      />
      <AuthStack.Screen
        name="UseTerm"
        component={UseTerm}
        options={basicOptions}
      />
      <AuthStack.Screen
        name="FindPassword"
        component={FindPassword}
        options={basicOptions}
      />
      <AuthStack.Screen
        name="ConfirmCertNum"
        component={ConfirmCertNum}
        options={basicOptions}
      />
      <AuthStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={basicOptions}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStack;
