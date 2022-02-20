import React, {useEffect, useRef} from 'react';
import {View, Text} from 'react-native';
// components
import ListItem from './components/ListItem';
// libs
import DraggableFlatList from 'react-native-draggable-flatlist';
// redux
import {State} from '@/redux/rootReducer';
import {useDispatch, useSelector} from 'react-redux';
// styles
import {SIDE_PADDING} from '@/styles/sizes';
import {setPlayList} from '@/redux/player/playerReducer';

const MultiItemBodyView = ({currentAudio}) => {
  const flatListRef = useRef<any>();

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
            paddingHorizontal: SIDE_PADDING,
          }}>
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
