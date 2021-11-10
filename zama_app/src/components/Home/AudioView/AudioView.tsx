import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// commons
import AudioCard from '@/commons/Cards/AudioCard';
import HeaderBasic from '@/commons/Header/HeaderBasic';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import {PURPLE_COLOR} from '../gradientColorArr';

const AudioView = ({navigation: {goBack}, route}) => {
  const division = route?.params.division;
  const {totalAudios} = useSelector((state: State) => state.audioReducer);
  const {playList} = useSelector((state: State) => state.playerReducer);

  const audioArr = totalAudios.filter(item => item.division === division)[0]
    .data;

  return (
    <View
      style={{
        flex: 1,
      }}>
      <HeaderBasic
        previousBtn={true}
        goBack={goBack}
        title={'스토리'}
        style={{backgroundColor: PURPLE_COLOR(1)}}
        textStyle={{color: 'black', fontWeight: '700'}}
      />
      <FlatList
        data={audioArr}
        style={{backgroundColor: PURPLE_COLOR(1)}}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                paddingBottom:
                  playList.length > 0 && index + 1 === audioArr.length ? 80 : 0,
              }}>
              <View key={item.id} style={{flex: 1}}>
                <AudioCard data={item} />
              </View>
            </View>
          );
        }}
        maxToRenderPerBatch={2}
        initialNumToRender={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingVertical: 5}}
      />
    </View>
  );
};

export default AudioView;
