import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
// navigation
import TabNavigation from './TabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
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

const MainStack = () => {
  const [networkError, setNetworkError] = useState<boolean | null>(null);

  const {openUsePurposeServey} = useSelector(
    (state: State) => state.interactionReducer,
  );

  const {playList} = useSelector((state: State) => state.playerReducer);

  const {getHomeContentsSubCateAPI} = useContentAPI();

  const MainStack = createStackNavigator();
  const dispatch = useDispatch();

  const preLoading = async () => {
    try {
      const {success, recoAudios, totalAudios} =
        await getHomeContentsSubCateAPI();
      if (success) {
        dispatch(
          setHomeContents({
            recoAudios,
            totalAudios,
          }),
        );
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
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Text>에러!</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={{flex: 1, overflow: 'hidden'}}>
      {playList.length > 0 && <Player />}
      <MainStack.Navigator initialRouteName="Main" headerMode="none">
        <MainStack.Screen
          name="Tab"
          component={TabNavigation}
          options={{cardStyle: {backgroundColor: WHITE}}}
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
