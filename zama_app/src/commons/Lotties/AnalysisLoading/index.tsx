import React, {useRef, useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

interface Props {
  style?: {};
  size?: number;
}

const AnalysisLoading = ({style, size = 100}: Props) => {
  const animationRef: any = useRef(null);

  useEffect(() => {
    animationRef.current && animationRef.current.play();
  }, []);

  return (
    <View style={[style]}>
      <LottieView
        loop
        ref={animationRef}
        source={require('./analysisLoading.json')}
        style={{
          width: size,
          height: size,
        }}
      />
    </View>
  );
};

export default AnalysisLoading;
