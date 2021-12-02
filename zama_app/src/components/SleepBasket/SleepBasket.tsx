import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AudioCard from '@/commons/Cards/AudioCard';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';
import LinearGradient from 'react-native-linear-gradient';
// 'rgba(194,173,236,0.6)'

const SleepBasket = () => {
  const {basketAudios}: any = useSelector((state: State) => state.audioReducer);
  const {playList} = useSelector((state: State) => state.playerReducer);

  const {handleClickContent} = usePlayerHandle();
  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );

  const handleBasketTotalAudio = () => {
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
      handleClickContent(audioArr);
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
      handleClickContent(audioArr);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(194,173,236,0.6)',
      }}>
      <FlatList
        data={basketAudios}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                paddingBottom:
                  index + 1 === basketAudios.length && playList.length === 0
                    ? 75
                    : playList.length > 0 && index + 1 === basketAudios.length
                    ? 125
                    : 0,
              }}>
              <View key={item.id} style={{flex: 1}}>
                <AudioCard data={{...item, isLike: true}} />
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
      <View
        style={{
          position: 'absolute',
          bottom: playList.length > 0 ? -10 : 10,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={{position: 'absolute'}}>
          <LinearGradient
            colors={[
              'rgba(36,18,87,0)',
              'rgba(36,18,87,0.3)',
              'rgba(36,18,87,0.5)',
              'rgba(36,18,87,0.7)',
              'rgba(36,18,87,0.9)',
              'rgba(36,18,87,0.9)',
              'rgba(36,18,87,1)',
            ]}
            style={{
              flex: 1,
              width: SCREEN_WIDTH,
              height: 120,
            }}
          />
        </View>
        <TouchableWithoutFeedback onPress={handleBasketTotalAudio}>
          <View
            style={{
              flex: 1,
              height: 50,
              backgroundColor: 'rgba(36,18,87,1)',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginBottom: playList.length > 0 ? 80 : 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
              }}>
              전체 이어듣기
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default SleepBasket;
