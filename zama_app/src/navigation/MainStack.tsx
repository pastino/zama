import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
// navigation
import TabNavigation from './TabNavigation';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {navigate} from './RootNavigation';
// components
import Servey from '@/components/Servey';
import Player from '@/components/Player';
import AudioView from '@/components/Home/AudioView';
import ReportSendModal from '@/commons/Modals/ReportSendModal';
// apis
import useContentAPI from '@/api/content/useContentAPI';
import useSubscriptionAPI from '@/api/subscription/useSubscriptionAPI';

// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import colors from '@/styles/colors';
import {PURPLE_COLOR} from '@/components/Home/gradientColorArr';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@/styles/sizes';

const MainStack = () => {
  const [networkError, setNetworkError] = useState<boolean | null>(null);

  const {openUsePurposeServey, isLoading} = useSelector(
    (state: State) => state.interactionReducer,
  );

  const {playList} = useSelector((state: State) => state.playerReducer);

  const {getHomeContentsSubCateAPI, getSleepBasketAudio, getHomeAudioTopTen} =
    useContentAPI();
  const {getSubscription} = useSubscriptionAPI();

  const MainStack = createStackNavigator();

  const preLoading = () => {
    try {
      Promise.all([
        getHomeAudioTopTen(),
        getHomeContentsSubCateAPI(),
        getSleepBasketAudio(),
        getSubscription(),
      ]);
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
      backgroundColor: colors.WHITE,
    },
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      {playList.length > 0 && <Player />}
      <ReportSendModal />

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
      {isLoading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <ActivityIndicator size={30} />
        </View>
      )}
    </View>
  );
};

export default MainStack;
