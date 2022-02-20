import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// hooks
import useGetAudio from '@/hooks/useGetAudio';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import AudioCardStory from '@/styles/ui/card/AudioCardStory';
import colors from '@/styles/colors';
import {SCREEN_WIDTH, SIDE_PADDING} from '@/styles/sizes';

const AudioViewStory = () => {
  const [filter, setFilter] = useState('전체');

  const [audios, isLastPage, handleGetMore] = useGetAudio({
    division: 'Story',
    take: 12,
  });

  const filteredAudios =
    filter === '전체'
      ? audios
      : filter === '남자 목소리'
      ? audios.filter(audio => audio.voiceGender === '남')
      : filter === '여자 목소리'
      ? audios.filter(audio => audio.voiceGender === '여')
      : audios;

  const {playList} = useSelector((state: State) => state.playerReducer);

  const handleSelectFilter = filter => {
    setFilter(filter);
  };

  const handleMoreGetAudios = async () => {
    if (isLastPage) return;
    try {
      await handleGetMore();
    } catch (e) {
      console.log(e);
    }
  };

  const FilterBtn = ({title}) => {
    const selected = filter === title;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => handleSelectFilter(title)}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selected ? colors.FILTER_PURPLE : colors.PURPLE,
            paddingHorizontal: 20,
            height: 30,
            borderRadius: 15,
          }}>
          <Text style={{color: 'white', fontWeight: '700', fontSize: 15}}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={filteredAudios}
        style={{backgroundColor: colors.DARK_PURPLE}}
        renderItem={({item, index}) => {
          const isRight = index % 2 === 1;
          return (
            <View
              key={item.id}
              style={{
                flex: 1,
                paddingLeft: 20,
                paddingRight: isRight ? 20 : 0,
                marginTop: 20,
              }}>
              <AudioCardStory data={item} width={SCREEN_WIDTH / 2 - 30} />
            </View>
          );
        }}
        onEndReached={handleMoreGetAudios}
        onEndReachedThreshold={0.9}
        ListFooterComponent={
          <View>
            <View
              style={{
                height: playList?.length > 0 ? 50 : 0,
              }}
            />
            {!isLastPage && <ActivityIndicator size={25} />}
          </View>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingVertical: 5}}
        ListHeaderComponent={
          <View style={{paddingHorizontal: SIDE_PADDING, flexDirection: 'row'}}>
            <FilterBtn title={'전체'} />
            <View style={{marginRight: 10}} />
            <FilterBtn title={'남자 목소리'} />
            <View style={{marginRight: 10}} />
            <FilterBtn title={'여자 목소리'} />
          </View>
        }
      />
    </View>
  );
};

export default AudioViewStory;
