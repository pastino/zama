import React, {useEffect, useState} from 'react';
import {Animated, Text, View} from 'react-native';
//redux
import {State} from '@/redux/rootReducer';
import {useDispatch, useSelector} from 'react-redux';
import {offToastMessage} from '@/redux/interation/interactionSlice';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';

const ToastMessage = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const dispatch = useDispatch();

  const {toastMessage, toastMessageText} = useSelector(
    (state: State) => state.interactionReducer,
  );

  const handleOnMessage = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    } as any).start();
  };

  const handleOffMessage = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    } as any).start();
  };

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(0,55,86,0)', 'rgba(0,55,86,1)'],
  });

  const animatedStyle: any = {
    width: SCREEN_WIDTH * 0.9,
    height: 'auto',
    justifyContent: 'center',
    backgroundColor: boxInterpolation,
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 17,
    paddingBottom: 17,
    bottom: 10,
    borderRadius: 10,
  };

  useEffect(() => {
    if (toastMessage) {
      handleOnMessage();
      setTimeout(() => {
        dispatch(offToastMessage({}));
      }, 3000);
    } else {
      handleOffMessage();
    }
  }, [toastMessage]);

  return toastMessage ? (
    <View style={{width: SCREEN_WIDTH, alignItems: 'center'}}>
      <Animated.View style={animatedStyle}>
        <Text style={{color: 'white', fontSize: 14, lineHeight: 22}}>
          {toastMessageText}
        </Text>
      </Animated.View>
    </View>
  ) : null;
};

export default ToastMessage;
