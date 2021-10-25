import React from 'react';
import {View} from 'react-native';
import {IoniconsIcons} from '../Icons/RnIcons';

const LoadingImage = ({style, loadingIconSize, loadingIconColor}) => {
  return (
    <View style={{position: 'relative'}}>
      <View style={style} />
      {/* <View
        style={{
          width: style.width,
          height: style.height,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}>
        <IoniconsIcons
          name={'ellipsis-horizontal-sharp'}
          size={loadingIconSize}
          color={loadingIconColor}
        />
      </View> */}
    </View>
  );
};

export default LoadingImage;
