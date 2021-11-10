import React, {useState} from 'react';
import {View, Image, TouchableWithoutFeedback, Text} from 'react-native';
// commons
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import Tag from '@/commons/Tag';
import {gradientColorArr, PURPLE_COLOR} from './gradientColorArr';
// libs
import SplashScreen from 'react-native-splash-screen';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
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
  MIDDLE_PURPLE,
  BRIGHT_GRAY,
  TRANSPARENT_DARK,
  DARK_GRAY,
} from '@/styles/colors';

const Home = ({navigation: {navigate}}) => {
  const {recoAudios} = useSelector((state: State) => state.audioReducer);

  const {playList, modalVisible} = useSelector(
    (state: State) => state.playerReducer,
  );

  const isUpScreen = playList.length > 0 && !modalVisible;

  const [voiceGender, setVoiceGender] = useState('여');

  const {handleClickContent} = usePlayerHandle();

  const handleClickRecoAudio = () => {
    handleClickContent([
      {
        id: 0,
        title: recoAudios[0].title,
        duration:
          voiceGender === '여' ? recoAudios[0].time : recoAudios[0].time2,
        artwork: recoAudios[0].thumbnail,
        url: voiceGender === '여' ? recoAudios[0].file1 : recoAudios[0].file2,
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
            backgroundColor: MIDDLE_PURPLE,
            width: 60,
            height: 60,
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
            paddingTop: 15,
            paddingHorizontal: 20,
            backgroundColor: PURPLE_COLOR(1),
          }}>
          <Text style={{fontWeight: '700', fontSize: 17, color: DARK_GRAY}}>
            꿈나라로 떠나볼까요?
          </Text>
        </View>
        <View
          style={{
            backgroundColor: PURPLE_COLOR(1),
            flex: isUpScreen ? SCREEN_HEIGHT * 0.21 : SCREEN_HEIGHT * 0.15,
          }}>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 50,
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
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
