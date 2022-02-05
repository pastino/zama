import React, {FunctionComponent, useState} from 'react';
import {View} from 'react-native';
//libs
import Image from 'react-native-fast-image';
//tools
import {checkUrlForm} from '@/utils/tools';
//styles
import colors from '@/styles/colors';
import Icon from '@/styles/ui/Icon';

interface Props {
  path: any;
  width: number;
  height: number;
  coveredWidth?: number;
  corverdHeight?: number;
  borderRadius?: number;
  styles?: any;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'center' | undefined;
}

const ImageBasic: FunctionComponent<Props> = ({
  path,
  width,
  height,
  coveredWidth,
  corverdHeight,
  styles,
  borderRadius = 0,
  resizeMode = 'cover',
  ...props
}) => {
  const refinedPath = checkUrlForm(path);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(!path);

  return (
    <View style={{position: 'relative'}}>
      <Image
        source={refinedPath ? {uri: path} : path}
        style={[styles, {width, height, borderRadius, zIndex: 0}]}
        resizeMode={resizeMode}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => setIsError(true)}
        {...props}
      />

      {isLoading && (
        <View
          style={[
            styles,
            {
              width: coveredWidth ?? width,
              height: corverdHeight ?? height,
              position: 'absolute',
              backgroundColor: colors.RIGHT_PURPLE,
              borderRadius,
              zIndex: 1,
            },
          ]}
        />
      )}
    </View>
  );
};

export default ImageBasic;
