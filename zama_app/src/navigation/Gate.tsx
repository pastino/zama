import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
// commons
import ToastMessage from '@/commons/ToastMessage';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';

const Gate = () => {
  const {token} = useSelector((state: State) => state.usersReducer);

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {token ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
      <ToastMessage />
    </>
  );
};

export default Gate;
