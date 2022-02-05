import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
//libs
import {isIphoneX} from 'react-native-iphone-x-helper';
// commons
import TouchableOpacity from '@/commons/TouchableOpacity';
// styles
import {HEADER_HEIGHT, SIDE_PADDING} from '@/styles/sizes';
import styled from 'styled-components/native';
import colors from '@/styles/colors';
import {IoniconsIcons} from '../Icons/RnIcons';

interface Props {
  previousBtn?: boolean;
  goBack?: () => void;
  title?: string;
  style?: {};
  textStyle?: any;
}

const HeaderBasic: FunctionComponent<Props> = ({
  previousBtn = false,
  goBack,
  title,
  style,
  textStyle,
}) => {
  return (
    <View
      style={[
        {
          height: HEADER_HEIGHT,
          flexDirection: 'row',
          alignItems: isIphoneX() ? 'flex-end' : 'center',
          paddingBottom: isIphoneX() ? 15 : 0,
          paddingHorizontal: SIDE_PADDING,
          backgroundColor: colors.DARK_PURPLE,
        },
        style,
      ]}>
      <View
        style={{
          flexDirection: 'column',
        }}>
        {previousBtn && (
          <TouchableOpacity onPress={goBack}>
            <View style={{marginLeft: -5}}>
              <IoniconsIcons
                name={'chevron-back'}
                size={30}
                color={textStyle?.color || 'white'}
              />
            </View>
          </TouchableOpacity>
        )}
        {title && (
          <Text
            style={[
              {fontWeight: '700', fontSize: 27, marginTop: 10, color: 'white'},
              textStyle,
            ]}>
            {title}
          </Text>
        )}
      </View>
    </View>
  );
};

export default HeaderBasic;
