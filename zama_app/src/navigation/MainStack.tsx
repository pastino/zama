import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
// navigation
import TabNavigation from './TabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {navigate} from './RootNavigation';
// components
import Servey from '@/components/Servey';
// apis
import useContentAPI from '@/api/content/useContentAPI';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {setHomeContents} from '@/redux/audio/audioSlice';
// styles
import {WHITE} from '@/styles/colors';

const MainStack = () => {
  const [networkError, setNetworkError] = useState<boolean | null>(null);

  const {openUsePurposeServey} = useSelector(
    (state: State) => state.interactionReducer,
  );
  const {getHomeContentsAPI} = useContentAPI();

  const MainStack = createStackNavigator();
  const dispatch = useDispatch();

  const preLoading = async () => {
    try {
      const {success, recoAudios, totalAudios} = await getHomeContentsAPI();
      if (success) {
        dispatch(setHomeContents({recoAudios, totalAudios}));
      }
    } catch (e) {
      console.log(e);
      setNetworkError(true);
    }
  };

  useEffect(() => {
    if (openUsePurposeServey) {
      navigate('Servey', null);
    }
  }, [openUsePurposeServey]);

  useEffect(() => {
    preLoading();
  }, []);

  const basicOptions = {
    cardStyle: {
      backgroundColor: WHITE,
    },
  };

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
