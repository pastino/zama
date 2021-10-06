import {logOut} from '@/redux/user/userSlice';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import HomeContainer from './HomeContainer';
import TodayRecoAudio from './TodayRecoAudio.tsx';

const Home = () => {
  const dispatch = useDispatch();

  const bundleData = [
    {
      title: '태준님의 ‘별똥별’',
      image: require('@/assets/images/sample_image.png'),
    },
    {
      title: '태준님의 ‘별똥별’',
      image: require('@/assets/images/sample_image.png'),
    },
    {
      title: '태준님의 ‘별똥별’',
      image: require('@/assets/images/sample_image.png'),
    },
    {
      title: '태준님의 ‘별똥별’',
      image: require('@/assets/images/sample_image.png'),
    },
  ];

  return (
    <View>
      <HomeContainer bundleData={bundleData}>
        <TouchableWithoutFeedback onPress={() => dispatch(logOut())}>
          <Text>Logout</Text>
        </TouchableWithoutFeedback>
        <View style={{paddingLeft: 20, marginTop: 40}}>
          <TodayRecoAudio />
        </View>
      </HomeContainer>
    </View>
  );
};

export default Home;
