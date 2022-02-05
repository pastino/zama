import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
// components
import HomeHeader from './components/HomeHeader';
import HomeBanner from './components/HomeBanner';
import AudioHorizontal from './components/AudioHorizontal';
// libs
import SplashScreen from 'react-native-splash-screen';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import {BOTTOM_TAB_HEIGHT, SIDE_PADDING} from '@/styles/sizes';
import colors from '@/styles/colors';

//TODO
// ASMR 이미지 url변경. 현재 고정 url => 'https://zama-assets.s3.ap-northeast-2.amazonaws.com/images/1643687952587_bird.png'

// 요청사항
// Bottom Tab 아이콘 off가 없음 (off를 다운 받았는데 on 아이콘임)
// Bottom Tab 아이콘 on / off의 아이콘 사이즈가 다름 (svg)

// 부탁사항
// 오디오 플레이어에 한곡,반복 재생 아이콘/위치 필요

// 의논이 필요한 사항
// 내가 좋아하는 음악에 제목이 없음
// 내가 좋아하는 음악에 남/여 표시 구분이 안됨.

const Home = ({navigation}) => {
  const {navigate, openDrawer} = navigation;

  const {playList, modalVisible} = useSelector(
    (state: State) => state.playerReducer,
  );
  const {topTenAudios} = useSelector((state: State) => state.audioReducer);

  const isUpScreen = playList.length > 0 && !modalVisible;

  const handleHideSplashScreen = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  };

  useEffect(() => {
    handleHideSplashScreen();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.DARK_PURPLE}}>
      <HomeHeader />
      <ScrollView style={{backgroundColor: colors.DARK_PURPLE}}>
        <View style={{paddingHorizontal: SIDE_PADDING, marginTop: 24}}>
          <HomeBanner />
        </View>
        <View
          style={{
            marginTop: 5,
            marginBottom: isUpScreen ? BOTTOM_TAB_HEIGHT + 10 : 30,
          }}>
          {topTenAudios.length > 0
            ? topTenAudios.map((item: any) => (
                <View key={item?.division} style={{marginTop: 20}}>
                  <AudioHorizontal
                    division={item?.division}
                    title={
                      item?.division === 'Story'
                        ? '스토리'
                        : item?.division === 'Song'
                        ? '음악'
                        : item?.division === 'ASMR'
                        ? 'ASMR'
                        : ''
                    }
                    data={item?.data}
                  />
                </View>
              ))
            : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
