import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
// navigation
import TabNavigation from './TabNavigation';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {navigate} from './RootNavigation';
// components
import Servey from '@/components/Servey';
import Player from '@/components/Player';
// apis
import useContentAPI from '@/api/content/useContentAPI';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {setHomeContents} from '@/redux/audio/audioSlice';
// styles
import {WHITE} from '@/styles/colors';
import {PURPLE_COLOR} from '@/components/Home/gradientColorArr';
import AudioView from '@/components/Home/AudioView';

const MainStack = () => {
  const [networkError, setNetworkError] = useState<boolean | null>(null);

  const {openUsePurposeServey} = useSelector(
    (state: State) => state.interactionReducer,
  );

  const {playList} = useSelector((state: State) => state.playerReducer);

  const {getHomeContentsSubCateAPI, getSleepBasketAudio} = useContentAPI();

  const MainStack = createStackNavigator();

  const preLoading = async () => {
    try {
      await getHomeContentsSubCateAPI();
      await getSleepBasketAudio();
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

  if (networkError) {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text>에러!</Text>
        </View>
      </SafeAreaView>
    );
  }

  const basicOptions = {
    cardStyle: {
      backgroundColor: WHITE,
    },
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      {playList.length > 0 && <Player />}
      <MainStack.Navigator
        initialRouteName="Main"
        headerMode="none"
        mode="modal">
        <MainStack.Screen
          name="Tab"
          component={TabNavigation}
          options={{cardStyle: {backgroundColor: PURPLE_COLOR(1)}}}
        />
        <MainStack.Screen
          name="AudioView"
          component={AudioView}
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
