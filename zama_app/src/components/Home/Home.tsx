import React, {
  createRef,
  forwardRef,
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {Text, View, Animated, ScrollView, Image, Platform} from 'react-native';
// components
import TodayRecoAudio from './TodayRecoAudio.tsx';
import TabView from './TabView';
// commons
import VerticalDivider from '@/commons/Divider/VerticalDivider';
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import TouchableOpacity from '@/commons/TouchableOpacity';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {logOut} from '@/redux/user/userSlice';
// libs
import {isIphoneX} from 'react-native-iphone-x-helper';
// styles
import {ABSOLUTE_TOP_ZERO, SCREEN_WIDTH} from '@/styles/sizes';
import {
  DIVIDER_BORDER_COLOR,
  DIVIDER_COLOR,
  BLUE_GREEN,
  WHITE,
} from '@/styles/colors';

const Home = ({}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = useRef<any>(null);
  const dispatch = useDispatch();
  const onItemPress = useCallback(itemIndex => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * SCREEN_WIDTH,
    });
  }, []);

  const {recoAudios, totalAudios} = useSelector(
    (state: State) => state.audioReducer,
  );

  const addedRefData = totalAudios.map(audio => ({
    ...audio,
    ref: createRef(),
  }));

  const Indicator = ({measures, scrollX}) => {
    const inputRange = addedRefData.map((_, i) => i * SCREEN_WIDTH);
    const indicatorWidth = scrollX.interpolate({
      inputRange,
      outputRange: measures.map(measure => measure.width),
    });

    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: measures.map(measure => measure.x),
    });

    return (
      <Animated.View
        style={{
          position: 'absolute',
          height: 1.5,
          width: indicatorWidth,
          left: 0,
          backgroundColor: BLUE_GREEN,
          bottom: -2,
          transform: [
            {
              translateX,
            },
          ],
        }}
      />
    );
  };

  const Tab = forwardRef(({item, onItemPress}: any, ref: any) => {
    return (
      <TouchableOpacity onPress={onItemPress}>
        <View ref={ref}>
          <Text>
            {item.division === 'Song'
              ? '노래'
              : item.division === 'Story'
              ? '이야기'
              : 'ASMR'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  });

  const Tabs = ({data, scrollX, onItemPress}) => {
    const [measures, setMeasures] = useState([]);
    const containerRef = useRef<any>();

    const initLayout = async () => {
      let m: any = [];
      for (let i = 0; i < data.length; i++) {
        data?.[i].ref.current.measureLayout(
          containerRef.current,
          (x, y, width, height) => {
            m.push({x: x - 15, y, width: width + 30, height});
            if (i === 2) {
              setMeasures(m);
            }
          },
        );
      }
    };

    useEffect(() => {
      initLayout();
    }, []);

    return (
      <View
        ref={containerRef}
        style={{
          width: SCREEN_WIDTH,
          flexDirection: 'row',
          height: Platform.OS === 'ios' && isIphoneX() ? 67 : 57,
          backgroundColor: 'white',
          alignItems: 'flex-end',
          paddingBottom: 5,
          justifyContent: 'space-evenly',
          borderBottomWidth: 1.5,
          borderBottomColor: DIVIDER_BORDER_COLOR,
        }}>
        {data.map((item, index) => {
          return (
            <Fragment key={index}>
              <Tab
                key={item.division}
                item={item}
                ref={item.ref}
                onItemPress={() => onItemPress(index)}
              />
            </Fragment>
          );
        })}
        {measures.length > 0 && (
          <Indicator measures={measures} scrollX={scrollX} />
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('@/assets/images/sample_image.png')}
        style={{width: SCREEN_WIDTH, position: 'absolute', top: 0}}
      />
      <View
        style={{
          zIndex: 100,
          position: 'absolute',
          right: 30,
          top: ABSOLUTE_TOP_ZERO + 15,
        }}>
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <IoniconsIcons name={'reorder-three'} size={37} color={WHITE} />
        </TouchableOpacity>
      </View>
      <ScrollView stickyHeaderIndices={[2]}>
        <View
          style={{
            marginTop: 300,
            paddingBottom: 10,
            backgroundColor: 'white',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <View
            style={{width: SCREEN_WIDTH, alignItems: 'center', marginTop: 10}}>
            <View
              style={{
                width: 30,
                height: 3,
                borderRadius: 1.5,
                backgroundColor: DIVIDER_COLOR,
              }}
            />
          </View>
          <TodayRecoAudio data={recoAudios} />
        </View>
        <VerticalDivider width={SCREEN_WIDTH} />
        <Tabs scrollX={scrollX} data={addedRefData} onItemPress={onItemPress} />
        <Animated.FlatList
          ref={ref}
          data={addedRefData}
          keyExtractor={item => item.division}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          renderItem={({item: {division, data}}: any) => {
            return (
              <View
                style={{
                  flex: 1,
                  width: SCREEN_WIDTH,
                  backgroundColor: 'white',
                }}>
                {division === 'Song' ? (
                  <TabView data={data} />
                ) : division === 'Story' ? (
                  <TabView data={data} />
                ) : (
                  <TabView data={data} />
                )}
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
