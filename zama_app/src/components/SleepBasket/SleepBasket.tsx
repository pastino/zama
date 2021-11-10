import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import AudioCard from '@/commons/Cards/AudioCard';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';
// styles
import {PURPLE} from '@/styles/colors';
import {PURPLE_COLOR} from '../Home/gradientColorArr';

const SleepBasket = () => {
  const {basketAudios}: any = useSelector((state: State) => state.audioReducer);
  const {playList} = useSelector((state: State) => state.playerReducer);

  const {handleClickContent} = usePlayerHandle();

  const [voiceGender, setVoiceGender] = useState('여');

  const handleBasketTotalAudio = () => {
    const audioArr: any = [];
    for (let i = 0; i < basketAudios.length; i++) {
      if (!basketAudios[i]) return;
      const {id, file1, file2, title, thumbnail, time, time2, division} =
        basketAudios[i];
      audioArr.push({
        id: i,
        url: voiceGender === '여' ? file1 : file2,
        title: title,
        artist: 'zama',
        artwork: thumbnail,
        duration: voiceGender === '여' ? time : time2,
        division: division,
      });
    }
    handleClickContent(audioArr);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PURPLE_COLOR(1),
      }}>
      <FlatList
        data={basketAudios}
        style={{backgroundColor: PURPLE_COLOR(1)}}
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
                <AudioCard
                  data={{...item, isLike: true}}
                  isGenderVoiceBtn={false}
                />
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
        <View
          style={{
            flex: 0.5,
            height: 50,
            backgroundColor: 'rgba(0,55,86,0.9)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginBottom: playList.length > 0 ? 80 : 10,
            marginRight: 20,
            flexDirection: 'row',
          }}>
          <TouchableWithoutFeedback onPress={() => setVoiceGender('여')}>
            <View
              style={{
                flex: 0.5,
                backgroundColor:
                  voiceGender === '여' ? PURPLE : 'rgba(153,153,153,0.9)',
                height: 50,
                justifyContent: 'center',
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '600',
                }}>
                여자{' '}
                <Text style={{fontSize: 10, textAlign: 'center'}}>목소리</Text>
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setVoiceGender('남')}>
            <View
              style={{
                flex: 0.5,
                height: 50,
                justifyContent: 'center',
                backgroundColor:
                  voiceGender === '남' ? PURPLE : 'rgba(153,153,153,0.9)',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '600',
                }}>
                남자{' '}
                <Text style={{fontSize: 10, textAlign: 'center'}}>목소리</Text>
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback onPress={handleBasketTotalAudio}>
          <View
            style={{
              flex: 0.5,
              height: 50,
              backgroundColor: 'rgba(0,55,86,0.9)',
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
