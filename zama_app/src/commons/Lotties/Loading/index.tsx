import React, {useRef, useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

interface Props {
  style?: {};
  size?: number;
  white?: boolean;
}

const Loading = ({style, size = 40, white}: Props) => {
  const animationRef: any = useRef(null);

  useEffect(() => {
    animationRef.current && animationRef.current.play();
  }, []);

  return (
    <View style={[{padding: 15, alignSelf: 'center'}, style]}>
      <View style={{width: size, height: size}}>
        {white ? (
          <LottieView
            loop
            ref={animationRef}
            source={require('./loading-white.json')}
            style={{
              width: size,
              height: size,
            }}
          />
        ) : (
          <LottieView
            loop
            ref={animationRef}
            source={require('./loading.json')}
            style={{
              width: size,
              height: size,
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Loading;
