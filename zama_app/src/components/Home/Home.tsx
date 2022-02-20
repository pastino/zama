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
// 사용하지 않는 코드(파일)들 삭제하기

// 의논이 필요한 사항
// 내가 좋아하는 음악에 제목이 없음
// 내가 좋아하는 음악에 남/여 표시 구분이 안됨.
// 플레이 리스트에 남여 구분 없음.

const Home = ({navigation}) => {
  const {playList, modalVisible} = useSelector(
    (state: State) => state.playerReducer,
  );
  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );

  const isSubscriber = subscriptions.length > 0;

  const {topTenAudios} = useSelector((state: State) => state.audioReducer);

  const isUpScreen = playList?.length > 0 && !modalVisible;

  const handleHideSplashScreen = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  };

  useEffect(() => {
    handleHideSplashScreen();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: colors.DARK_PURPLE}}>
      <HomeHeader />
      <ScrollView style={{backgroundColor: colors.DARK_PURPLE}}>
        {!isSubscriber && (
          <View style={{paddingHorizontal: SIDE_PADDING, marginTop: 24}}>
            <HomeBanner />
          </View>
        )}
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
