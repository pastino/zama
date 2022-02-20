import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {bottomTabInfo} from '@/navigation/TabNavigation';
import FastImage from 'react-native-fast-image';
// commons
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import TouchableOpacity from '@/commons/TouchableOpacity';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import {BOTTOM_TAB_HEIGHT, SCREEN_WIDTH} from '@/styles/sizes';
import styled from 'styled-components/native';
import colors from '@/styles/colors';
import Icon from '@/styles/ui/Icon';

interface Props {
  handleNextEvent: () => void;
  handlePrevEvent: () => void;
  currentAudio: any;
  handleModal: () => void;
  playing: boolean | null;
  handlePause: () => void;
  handlePlay: () => void;
}

const BottomMiniPlayer: FunctionComponent<Props> = ({
  handleNextEvent,
  handlePrevEvent,
  currentAudio,
  handleModal,
  playing,
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

  const ImageItem = () => {
    if (currentAudio?.division === 'Story') {
      return (
        <FastImage
          source={{uri: currentAudio?.artwork}}
          style={{
            width: 35,
            height: 35,
            borderRadius: 10,
            backgroundColor: colors.RIGHT_PURPLE,
          }}
          resizeMode={'cover'}
        />
      );
    }

    if (currentAudio?.division === 'ASMR') {
      return (
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 10,
            backgroundColor: colors.RIGHT_PURPLE,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FastImage
            source={{
              uri: currentAudio?.artwork,
            }}
            style={{width: 20, height: 20}}
            resizeMode={'contain'}
          />
        </View>
      );
    }

    if (currentAudio?.division === 'Song') {
      return (
        <View
          style={{
            width: 35,
            height: 35,
            borderRadius: 10,
            backgroundColor: currentAudio?.color,
          }}
        />
      );
    }

    return <View />;
  };

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
            <ImageItem />
            <TitleContainer>
              <Title>{currentAudio?.title}</Title>
            </TitleContainer>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: 110,
            }}>
            <TouchableOpacity onPress={handlePrevEvent}>
              <Icon iconName="prev-btn" />
            </TouchableOpacity>
            {playing ? (
              <TouchableOpacity onPress={handlePause}>
                <IoniconsIcons name={'pause'} color={colors.WHITE} size={25} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handlePlay}>
                <IoniconsIcons name={'play'} color={colors.WHITE} size={25} />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleNextEvent}>
              <Icon iconName="next-btn" />
            </TouchableOpacity>
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
  background-color: black;
  z-index: 1;
`;

const TitleContainer = styled.View<ContainerProp>`
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${colors.WHITE};
  font-weight: 600;
  font-size: 15px;
  margin-left: 12px;
`;

export default BottomMiniPlayer;
