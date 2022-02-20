import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// components
import ListItem from './components/ListItem';
// libs
import DraggableFlatList from 'react-native-draggable-flatlist';
import Tooltip from 'react-native-walkthrough-tooltip';
// redux
import {State} from '@/redux/rootReducer';
import {useDispatch, useSelector} from 'react-redux';
// styles
import {SCREEN_WIDTH, SIDE_PADDING} from '@/styles/sizes';
import {setPlayList} from '@/redux/player/playerReducer';
import colors from '@/styles/colors';
import {AntDesigns} from '@/commons/Icons/RnIcons';

const MultiItemBodyView = ({currentAudio}) => {
  const flatListRef = useRef<any>();

  const [openToolTip, setOpenToolTip] = useState(false);

  const dispatch = useDispatch();
  const {playList} = useSelector((state: State) => state.playerReducer);

  const playingNum =
    playList.findIndex(audio => audio.id === currentAudio?.id) ?? 0;

  const scrollToTarget = () => {
    if (playingNum >= 0) {
      flatListRef?.current?._component.scrollToOffset({
        animated: true,
        offset: playingNum * 86,
      });
    }
  };

  const handleDragEnd = ({data}) => {
    dispatch(setPlayList({playList: data}));
  };

  useEffect(() => {
    scrollToTarget();
  }, [currentAudio]);

  const handleRenderItem = ({item, drag, isActive}: any) => {
    return (
      <View
        style={{
          paddingVertical: 9,
          backgroundColor: isActive
            ? 'rgba(0,0,0,0.8)'
            : currentAudio?.id === item.id
            ? 'rgba(0,0,0,0.3)'
            : 'rgba(0,0,0,0)',
        }}>
        <ListItem
          currentAudio={currentAudio}
          title={item?.title}
          color={item?.color}
          artwork={item?.artwork}
          division={item?.division}
          isWaiting={true}
          drag={drag}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Text
          style={{
            fontSize: 18,
            marginBottom: 18,
            color: 'white',
            fontWeight: '600',
            paddingHorizontal: SIDE_PADDING,
          }}>
          지금 듣는 노래
        </Text>
        <ListItem
          title={currentAudio?.title}
          color={currentAudio?.color}
          artwork={currentAudio?.artwork}
          division={currentAudio?.division}
          drag={null}
        />
      </View>
      <View style={{marginTop: 33, flex: 1}}>
        <View
          style={{
            marginBottom: 18,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: SIDE_PADDING,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: '600',
              }}>
              재생 목록
            </Text>
            <Text style={{fontSize: 14, marginLeft: 10, color: 'white'}}>
              {playList?.length}곡
            </Text>
          </View>
          <Tooltip
            isVisible={openToolTip}
            content={
              <View
                style={{
                  width: SCREEN_WIDTH * 0.5,
                  paddingHorizontal: 10,
                  paddingVertical: 12,
                }}>
                <Text style={{color: colors.DARK_GRAY, lineHeight: 21}}>
                  햄버거 버튼을 길게 누르신 후 재생 순서를 변경하실 수 있습니다.
                </Text>
              </View>
            }
            showChildInTooltip={false}
            backgroundColor={'rgba(0,0,0,0.1)'}
            placement="bottom"
            onClose={() => setOpenToolTip(false)}>
            <TouchableOpacity onPress={() => setOpenToolTip(true)}>
              <AntDesigns
                name="questioncircle"
                size={20}
                color={colors.TRANSPARENT_PERPLE}
              />
            </TouchableOpacity>
          </Tooltip>
        </View>
        <View style={{marginBottom: 40}}>
          <DraggableFlatList
            ref={flatListRef}
            data={playList}
            renderItem={handleRenderItem}
            keyExtractor={item => `${item.id}`}
            onDragEnd={handleDragEnd}
          />
        </View>
      </View>
    </View>
  );
};

export default MultiItemBodyView;
