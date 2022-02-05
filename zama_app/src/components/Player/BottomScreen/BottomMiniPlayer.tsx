import React, {FunctionComponent} from 'react';
import {Image, View} from 'react-native';
// commons
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import TouchableOpacity from '@/commons/TouchableOpacity';
// styles
import {BOTTOM_TAB_HEIGHT, SCREEN_WIDTH} from '@/styles/sizes';
import styled from 'styled-components/native';
import colors from '@/styles/colors';
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {bottomTabInfo} from '@/navigation/TabNavigation';

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
  const {currentRoute} = useSelector(
    (state: State) => state.interactionReducer,
  );
  const isCurrentTabRoute = bottomTabInfo
    .map(item => item.name)
    .includes(currentRoute);

  const HEIGHT = 70;
  const BOTTOM_HEIGHT =
    isCurrentTabRoute || currentRoute === '' ? BOTTOM_TAB_HEIGHT - 5 : 0;

  return (
    <Continer height={HEIGHT} bottom={BOTTOM_HEIGHT}>
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
                <IoniconsIcons name={'pause'} color={colors.WHITE} size={30} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handlePlay}>
                <IoniconsIcons name={'play'} color={colors.WHITE} size={30} />
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
  bottom?: number;
}

const Continer = styled.View<ContainerProp>`
  flex-direction: row;
  position: absolute;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  bottom: ${props => props.bottom}px;
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
  color: ${colors.WHITE};
  font-weight: 600;
  font-size: 17px;
  margin-left: 20px;
`;

const Artist = styled.Text`
  color: ${colors.BRIGHT_GRAY};
  font-weight: 600;
  font-size: 14px;
  margin-left: 20px;
`;

export default BottomMiniPlayer;
