import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
// commons
import ToastMessage from '@/commons/ToastMessage';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {setCurrentRoute} from '@/redux/interation/interactionSlice';

const Gate = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state: State) => state.usersReducer);

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={() =>
          dispatch(
            setCurrentRoute({
              currentRoute: navigationRef?.current?.getCurrentRoute()?.name,
            }),
          )
        }>
        {token ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
      <ToastMessage />
    </>
  );
};

export default Gate;
