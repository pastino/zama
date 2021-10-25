import React, {FunctionComponent} from 'react';
import {Image, View} from 'react-native';
// commons
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import TouchableOpacity from '@/commons/TouchableOpacity';
// styles
import {BOTTOM_TAB_HEIGHT, SCREEN_WIDTH} from '@/styles/sizes';
import styled from 'styled-components/native';
import {BRIGHT_GRAY, WHITE} from '@/styles/colors';

interface Props {
  title: string;
  thumbnail: string;
  handleModal: () => void;
  playing: boolean | null;
  artist: string | undefined;
  handlePause: () => void;
  handlePlay: () => void;
}

const BottomMiniPlayer: FunctionComponent<Props> = ({
  title,
  thumbnail,
  handleModal,
  playing,
  artist,
  handlePause,
  handlePlay,
}) => {
  const HEIGHT = 70;
  return (
    <Continer height={HEIGHT}>
      <TouchableOpacity style={{flex: 1}} onPress={handleModal}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={{uri: thumbnail}}
              style={{width: 50, height: 50}}
              resizeMode={'cover'}
            />
            <TitleContainer>
              <Title>{title}</Title>
              {artist && <Artist>{artist}</Artist>}
            </TitleContainer>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}>
            {playing ? (
              <TouchableOpacity onPress={handlePause}>
                <IoniconsIcons name={'pause'} color={WHITE} size={30} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handlePlay}>
                <IoniconsIcons name={'play'} color={WHITE} size={30} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Continer>
  );
};

interface ContainerProp {
  width?: number;
  height?: number;
}

const Continer = styled.View<ContainerProp>`
  flex-direction: row;
  position: absolute;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  bottom: ${BOTTOM_TAB_HEIGHT}px;
  height: ${props => props.height}px;
  width: ${SCREEN_WIDTH}px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const TitleContainer = styled.View<ContainerProp>`
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${WHITE};
  font-weight: 600;
  font-size: 17px;
  margin-left: 20px;
`;

const Artist = styled.Text`
  color: ${BRIGHT_GRAY};
  font-weight: 600;
  font-size: 14px;
  margin-left: 20px;
`;

export default BottomMiniPlayer;
