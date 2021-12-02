import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
//libs
import {isIphoneX} from 'react-native-iphone-x-helper';
// commons
import TouchableOpacity from '@/commons/TouchableOpacity';
// styles
import {HEADER_HEIGHT} from '@/styles/sizes';
import styled from 'styled-components/native';
import {MIDDLE_GRAY} from '@/styles/colors';
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
          borderBottomWidth: 0.5,
          borderBottomColor: MIDDLE_GRAY,
        },
        style,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {previousBtn && (
          <TouchableOpacity onPress={goBack}>
            <PreviousBtnWrapper>
              <IoniconsIcons
                name={'chevron-back'}
                size={26}
                color={textStyle?.color || 'black'}
              />
            </PreviousBtnWrapper>
          </TouchableOpacity>
        )}
        {title && (
          <Text
            style={[
              {marginLeft: 10, fontWeight: '500', fontSize: 17},
              textStyle,
            ]}>
            {title}
          </Text>
        )}
      </View>
    </View>
  );
};

const PreviousBtnWrapper = styled.View`
  margin-left: 20px;
`;

export default HeaderBasic;
