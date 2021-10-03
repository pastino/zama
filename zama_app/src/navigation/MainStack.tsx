import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
// navigation
import TabNavigation from './TabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {navigate} from './RootNavigation';
// styles
import {WHITE} from '@/styles/colors';
import Servey from '@/components/Servey';
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';

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

  const {openUsePurposeServey} = useSelector(
    (state: State) => state.interactionReducer,
  );

  useEffect(() => {
    if (openUsePurposeServey) {
      navigate('Servey', null);
    }
  }, [openUsePurposeServey]);

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
        <MainStack.Screen
          name="Servey"
          component={Servey}
          options={basicOptions}
        />
      </MainStack.Navigator>
    </View>
  );
};

export default MainStack;
