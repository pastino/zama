import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
// navigation
import TabNavigation from './TabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
// styles
import {WHITE} from '@/styles/colors';

const MainStack = () => {
  const [loading, setLoading] = useState(true);
  const [networkError, setNetworkError] = useState<boolean | null>(null);

  const preLoading = async () => {
    try {
      setLoading(false);
    } catch (e) {
      console.log(e);
      setNetworkError(true);
    }
  };

  useEffect(() => {
    preLoading();
  }, []);

  const basicOptions = {
    cardStyle: {
      backgroundColor: WHITE,
    },
  };

  const MainStack = createStackNavigator();

  if (networkError) {
    return (
      <View style={{flex: 1}}>
        <Text>에러!</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      <MainStack.Navigator
        initialRouteName="Home"
        mode="modal"
        headerMode="none">
        <MainStack.Screen
          name="Tab"
          component={TabNavigation}
          options={basicOptions}
        />
      </MainStack.Navigator>
    </View>
  );
};

export default MainStack;
