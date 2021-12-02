import {DARK_PURPLE} from '@/styles/colors';
import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';

interface Props {
  title: string;
  style?: {};
}

const Tag: FunctionComponent<Props> = ({title, style}) => {
  return (
    <View
      style={[
        {
          backgroundColor: DARK_PURPLE,
          paddingVertical: 2,
          paddingHorizontal: 4,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}>
      <Text style={{color: 'white', fontWeight: '600', fontSize: 12}}>
        {title}
      </Text>
    </View>
  );
};

export default Tag;
