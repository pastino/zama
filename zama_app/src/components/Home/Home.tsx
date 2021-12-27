import React, {useEffect, useState} from 'react';
import {View, TouchableWithoutFeedback, Text, Platform} from 'react-native';
// commons
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import Tag from '@/commons/Tag';
import {gradientColorArr, PURPLE_COLOR} from './gradientColorArr';
// libs
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {isIphoneX} from 'react-native-iphone-x-helper';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
// utils
import {transformTimes} from '@/utils/tools';
// styles
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@/styles/sizes';
import {
  BRIGHT_GRAY,
  TRANSPARENT_DARK,
  DARK_GRAY,
  DARK_PURPLE,
} from '@/styles/colors';

const Home = ({navigation}) => {
  const {navigate, openDrawer} = navigation;
  const {recoAudios} = useSelector((state: State) => state.audioReducer);

  const {playList, modalVisible} = useSelector(
    (state: State) => state.playerReducer,
  );

  const isUpScreen = playList.length > 0 && !modalVisible;

  const {handleClickContent} = usePlayerHandle();

  const handleClickRecoAudio = () => {
    handleClickContent([
      {
        id: 0,
        title: recoAudios[0].title,
        duration: recoAudios[0].time,
        artwork: recoAudios[0].thumbnail,
        url: recoAudios[0].file,
        division: recoAudios[0].division,
        artist: 'zama',
      },
    ]);
  };

  const handleHideSplashScreen = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  };

  const CategryButton = ({category, iconName, onPress}) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            backgroundColor: DARK_PURPLE,
            width: 65,
            height: 65,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}>
          <IoniconsIcons name={iconName} color={'white'} size={24} />
          <Text
            style={{
              color: 'white',
              fontWeight: '700',
              fontSize: 12,
              marginTop: 5,
            }}>
            {category}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(206, 210, 239, 1)'}}>
      <View style={{position: 'relative'}}>
        <FastImage
          source={{uri: recoAudios[0].thumbnail}}
          onLoadEnd={handleHideSplashScreen}
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT - 100,
            position: 'absolute',
            top: 0,
          }}
        />
        <View
          style={{
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT - 100,
            position: 'absolute',
            top: 0,
            backgroundColor: TRANSPARENT_DARK,
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={openDrawer}>
          <View
            style={{
              position: 'absolute',
              top: isIphoneX() ? 45 : 30,
              right: 25,
              zIndex: 1,
            }}>
            <IoniconsIcons name={'menu'} color={'white'} size={30} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleClickRecoAudio}>
          <LinearGradient
            colors={gradientColorArr}
            style={{
              flex: isUpScreen ? SCREEN_HEIGHT * 0.74 : SCREEN_HEIGHT * 0.8,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <View style={{marginTop: 160, alignItems: 'center'}}>
              <Tag
                title={recoAudios[0].division}
                style={{fontSize: 10, width: 70, marginBottom: 15}}
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700',
                  fontSize: 22,
                }}>
                {recoAudios[0].title}
              </Text>
              <Text
                style={{
                  color: BRIGHT_GRAY,
                  fontWeight: '700',
                  fontSize: 15,
                  marginTop: 5,
                }}>
                {recoAudios[0]?.creator?.name}
              </Text>
            </View>
            <View
              style={{
                marginTop: 30,
                alignItems: 'center',
              }}>
              <IoniconsIcons name={'play-outline'} color={'white'} size={30} />
              <Text
                style={{
                  textAlign: 'center',
                  color: BRIGHT_GRAY,
                  fontSize: 12,
                  marginTop: 7,
                }}>
                {recoAudios[0]?.time && transformTimes(recoAudios[0]?.time)}
              </Text>
            </View>
          </LinearGradient>
        </TouchableWithoutFeedback>
        <View
          style={{
            position: 'relative',
            backgroundColor: PURPLE_COLOR(1),
            height: isUpScreen
              ? Platform.OS === 'ios'
                ? 200
                : 220
              : SCREEN_HEIGHT * 0.2,

            // flex: isUpScreen ? SCREEN_HEIGHT * 0.26 : SCREEN_HEIGHT * 0.2,
          }}>
          <LinearGradient
            colors={[
              'rgba(255,255,255,0)',
              'rgba(255,255,255,0.1)',
              'rgba(194,173,236,0.2)',
              'rgba(194,173,236,0.2)',
              'rgba(194,173,236,0.2)',
              'rgba(194,173,236,0.3)',
              'rgba(194,173,236,0.4)',
              'rgba(194,173,236,0.5)',
              'rgba(194,173,236,0.5)',
              'rgba(194,173,236,0.5)',
              'rgba(194,173,236,0.6)',
              'rgba(194,173,236,0.8)',
            ]}
            style={{
              flex: 1,
            }}>
            <View
              style={{
                paddingTop: 15,
                paddingHorizontal: 20,
              }}>
              <Text style={{fontWeight: '700', fontSize: 17, color: DARK_GRAY}}>
                꿈나라로 떠나볼까요?
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 50,
                marginTop: 20,
              }}>
              <CategryButton
                category={'스토리'}
                iconName={'book-outline'}
                onPress={() => navigate('AudioView', {division: 'Story'})}
              />
              <CategryButton
                category={'음악'}
                iconName={'musical-note'}
                onPress={() => navigate('AudioView', {division: 'Song'})}
              />
              <CategryButton
                category={'ASMR'}
                iconName={'moon-outline'}
                onPress={() => navigate('AudioView', {division: 'ASMR'})}
              />
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

export default Home;
