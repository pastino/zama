import React from 'react';
import {FlatList, View} from 'react-native';
// components
import SleepBasketHeader from './components/SleepBasketHeader';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
// styles
import colors from '@/styles/colors';
import AudioCardMyLike from '@/styles/ui/card/AudioCardMyLike';
import {SCREEN_WIDTH} from '@/styles/sizes';

const SleepBasket = () => {
  const {basketAudios}: any = useSelector((state: State) => state.audioReducer);
  const {playList} = useSelector((state: State) => state.playerReducer);

  const {handleClickContent} = usePlayerHandle();
  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );

  const audibleContents = () => {
    const audioArr: any = [];
    if (subscriptions.length > 0) {
      for (let i = 0; i < basketAudios.length; i++) {
        if (!basketAudios[i]) return;
        const {id, file, title, thumbnail, time, division} = basketAudios[i];
        audioArr.push({
          id: i,
          url: file,
          title: title,
          artist: 'zama',
          artwork: thumbnail,
          duration: time,
          division: division,
        });
      }

      return audioArr;
    } else {
      const sortedFreeAudios = basketAudios.filter(audio => audio.free);
      for (let i = 0; i < sortedFreeAudios.length; i++) {
        if (!sortedFreeAudios[i]) return;
        const {id, file, title, thumbnail, time, division} =
          sortedFreeAudios[i];
        audioArr.push({
          id: i,
          url: file,
          title: title,
          artist: 'zama',
          artwork: thumbnail,
          duration: time,
          division: division,
        });
      }
      return audioArr;
    }
  };

  const handleBasketTotalAudio = () => {
    const audio = audibleContents();

    handleClickContent(audio);
  };

  console.log();

  return (
    <View style={{flex: 1, backgroundColor: colors.DARK_PURPLE}}>
      <SleepBasketHeader />
      <FlatList
        data={basketAudios}
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
              <AudioCardMyLike data={item} width={SCREEN_WIDTH / 2 - 30} />
            </View>
          );
        }}
        // onEndReached={handleMoreGetAudios}
        // onEndReachedThreshold={0.9}
        // ListFooterComponent={
        //   <View>
        //     <View
        //       style={{
        //         height: playList.length > 0 ? 70 : 20,
        //       }}
        //     />
        //     {!isLastPage && <ActivityIndicator size={25} />}
        //   </View>
        // }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingVertical: 5}}
      />
    </View>
  );
};

export default SleepBasket;
