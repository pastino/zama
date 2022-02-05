import React, {FunctionComponent} from 'react';
import {Platform, Text, View} from 'react-native';
// commons
import TouchableOpacity from '@/commons/TouchableOpacity';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';
import * as mixins from '@/styles/mixins';
import colors from '@/styles/colors';
import Icon from '@/styles/ui/Icon';

interface Props {
  index?: number;
  icon: any;
  title: string;
  check: boolean;
  handleCheck: (index?: number, check?: boolean) => void;
}

const NoCheckedSelectBtn: FunctionComponent<Props> = ({
  index,
  title,
  icon,
  check,
  handleCheck,
}) => {
  const iconName = () => {
    switch (index) {
      case 0:
        return 'time-sleep';
      case 1:
        return 'moon';
      case 2:
        return 'baby';
      case 3:
        return 'song';
      case 4:
        return 'hour-glass';
      default:
        return '';
    }
  };

  return (
    <TouchableOpacity
      onPress={() =>
        index || index === 0 ? handleCheck(index, !check) : handleCheck()
      }
      style={{
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={[
          mixins.shadow,
          {
            width: SCREEN_WIDTH * 0.7,
            height: 45,
            borderRadius: Platform.OS === 'ios' ? 7 : 0,
            alignItems: 'center',
            paddingHorizontal: 13,
            backgroundColor: check ? colors.PURPLE : colors.TRANSPARENT_WHITE,
            flexDirection: 'row',
          },
        ]}>
        <Icon iconName={iconName()} width={20} height={20} />
        <Text
          style={{
            fontSize: 14,
            color: colors.WHITE,
            fontWeight: check ? '700' : '400',
            marginLeft: 10,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoCheckedSelectBtn;
