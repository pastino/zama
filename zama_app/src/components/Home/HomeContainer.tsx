import React, {useRef} from 'react';
import {View, Animated, Text} from 'react-native';
import {SCREEN_HEIGHT} from '@/styles/sizes';
import Swiper from 'react-native-swiper';

const HomeContainer = ({bundleData, children}) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const BANNER_H = SCREEN_HEIGHT * 0.4;
  return (
    <Animated.ScrollView
      //stickyHeaderIndices
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollA}}}], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}>
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden',
        }}>
        <Swiper style={{height: BANNER_H}} showsButtons={true}>
          {bundleData.map((data, index) => (
            <Animated.Image
              key={index}
              style={{
                height: BANNER_H,
                width: '100%',
                transform: [
                  {
                    translateY: scrollA.interpolate({
                      inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
                      outputRange: [
                        -BANNER_H / 2,
                        0,
                        BANNER_H * 0.75,
                        BANNER_H * 0.75,
                      ],
                    }),
                  },
                ],
              }}
              source={data.image}
            />
          ))}
        </Swiper>
      </View>
      <View
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        {children}
      </View>
    </Animated.ScrollView>
  );
};

export default HomeContainer;
