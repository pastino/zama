import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import {useNavigation} from '@react-navigation/native';
// styles
import colors from '@/styles/colors';
import AudioCardASMR from '@/styles/ui/card/AudioCardASMR';
import AudioCardSong from '@/styles/ui/card/AudioCardSong';
import AudioCardStory from '@/styles/ui/card/AudioCardStory';

const AudioHorizontal = ({title, data, division}) => {
  const {navigate} = useNavigation();
  const moveTopTotalAudioList = () => {
    navigate('AudioView', {division});
  };

  const handleRenderItem = ({item, index}) => {
    return (
      <View style={{marginLeft: index === 0 ? 20 : 0}}>
        {title === '스토리' ? (
          <View style={{marginRight: 15}}>
            <AudioCardStory data={item} />
          </View>
        ) : title === 'ASMR' ? (
          <View style={{marginRight: 15}}>
            <AudioCardASMR data={item} />
          </View>
        ) : title === '음악' ? (
          <View style={{marginRight: 15}}>
            <AudioCardSong data={item} />
          </View>
        ) : null}
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 20,
        }}>
        <Text
          style={{
            fontSize: 21,
            color: colors.PURPLE,
            fontWeight: '700',
            marginBottom: 15,
            marginLeft: 20,
          }}>
          {title}
        </Text>
        <TouchableOpacity activeOpacity={1} onPress={moveTopTotalAudioList}>
          <IoniconsIcons
            name="arrow-forward-outline"
            color={colors.PURPLE}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data?.slice(0, 10)}
        renderItem={handleRenderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AudioHorizontal;
