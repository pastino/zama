import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
// hooks
import useGetAudio from '@/hooks/useGetAudio';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import colors from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';
import AudioCardSong from '@/styles/ui/card/AudioCardSong';

const AudioViewSong = () => {
  const [audios, isLastPage, handleGetMore] = useGetAudio({
    division: 'Song',
    take: 12,
  });

  const {playList} = useSelector((state: State) => state.playerReducer);

  const handleMoreGetAudios = async () => {
    if (isLastPage) return;
    try {
      await handleGetMore();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={audios}
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
              <AudioCardSong data={item} width={SCREEN_WIDTH - 40} />
            </View>
          );
        }}
        onEndReached={handleMoreGetAudios}
        onEndReachedThreshold={0.9}
        ListFooterComponent={
          <View>
            <View
              style={{
                height: playList.length > 0 ? 70 : 20,
              }}
            />
            {!isLastPage && <ActivityIndicator size={25} />}
          </View>
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingVertical: 5}}
      />
    </View>
  );
};

export default AudioViewSong;
