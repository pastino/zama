import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {SafeAreaView} from 'react-native';

const Gate = () => {
  const {token} = useSelector((state: State) => state.usersReducer);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {token ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Gate;
