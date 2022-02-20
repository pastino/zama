import React from 'react';
import {View, Text} from 'react-native';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import {SCREEN_WIDTH, SIDE_PADDING} from '@/styles/sizes';
import ImageCardStory from '@/styles/ui/card/ImageCardStory';
import Icon from '@/styles/ui/Icon';
import colors from '@/styles/colors';
import ImageCardSong from '@/styles/ui/card/ImageCardSong';
import ImageCardASMR from '@/styles/ui/card/ImageCardASMR';

const OnlyOneItemBodyView = () => {
  const {playList} = useSelector((state: State) => state.playerReducer);
  const audio = playList[0];

  const {id, title, duration, artwork, url, color, division, artist} = audio;
  console.log(division);

  const IMAGE_SIZE = SCREEN_WIDTH * 0.65;

  const ImageItem = () => {
    if (division === 'Story') {
      return <ImageCardStory uri={artwork} size={IMAGE_SIZE} />;
    }

    if (division === 'Song') {
      return <ImageCardSong color={color} title={title} size={IMAGE_SIZE} />;
    }

    if (division === 'ASMR') {
      return <ImageCardASMR uri={artwork} size={IMAGE_SIZE} />;
    }
    return <View />;
  };

  return (
    <View style={{flex: 1, marginBottom: 20}}>
      <View
        style={{
          flex: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageItem />
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'flex-end',
          paddingHorizontal: SIDE_PADDING,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
              {title}
            </Text>
            <Text style={{color: colors.PURPLE, fontSize: 13, marginTop: 3}}>
              {division}
            </Text>
          </View>
          <Icon iconName="heart-on" width={17} />
        </View>
      </View>
    </View>
  );
};

export default OnlyOneItemBodyView;
