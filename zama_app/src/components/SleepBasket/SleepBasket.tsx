import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// commons
import LongAudioCard from '@/commons/Cards/LongAudioCard';
// redux
import {State} from '@/redux/rootReducer';
import {useSelector} from 'react-redux';
// styles
import {WHITE} from '@/styles/colors';

const SleepBasket = () => {
  const {totalAudios} = useSelector((state: State) => state.audioReducer);

  const spreadTotalAudio = () => {
    let audios: any = [];
    for (let i = 0; i < totalAudios.length; i++) {
      audios.push(...totalAudios[i].data);
    }

    return audios.filter(audio => audio.isLike);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: WHITE}}>
      <ScrollView style={{}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {spreadTotalAudio().map(audio => (
            <View key={audio.id} style={{marginTop: 10}}>
              <LongAudioCard data={audio} size={'big'} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SleepBasket;
