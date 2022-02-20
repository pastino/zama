import React from 'react';
import {SafeAreaView, View} from 'react-native';
import AudioViewStory from './AudioViewStory';
import AudioViewASMR from './AudioViewASMR';
import AudioViewSong from './AudioViewSong';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
// redux
import colors from '@/styles/colors';

const AudioView = ({navigation: {goBack}, route}) => {
  const division = route?.params.division;

  const AudioList = () => {
    if (division === 'Story') {
      return <AudioViewStory />;
    }
    if (division === 'ASMR') {
      return <AudioViewASMR />;
    }

    if (division === 'Song') {
      return <AudioViewSong />;
    }

    return <View />;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.DARK_PURPLE,
      }}>
      <HeaderBasic
        previousBtn={true}
        goBack={goBack}
        title={
          division === 'Story'
            ? '스토리'
            : division === 'Song'
            ? '음악'
            : 'ASMR'
        }
      />
      <AudioList />
    </SafeAreaView>
  );
};

export default AudioView;
