import {PRIMARY, RIGTH_GRAY} from '@/styles/colors';
import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
// styles
import {SCREEN_WIDTH, SIDE_PADDING} from '@/styles/sizes';
import * as mixins from '@/styles/mixins';
import {IoniconsIcons} from '../Icons/RnIcons';

interface Props {
  index?: number;
  title: string;
  check: boolean;
  handleCheck: (index?: number, check?: boolean) => void;
}

const NoCheckedSelectBtn: FunctionComponent<Props> = ({
  index,
  title,
  check,
  handleCheck,
}) => {
  return (
    <TouchableWithoutFeedback
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
            borderRadius: 7,
            justifyContent: 'center',
            paddingHorizontal: 13,
          },
        ]}>
        <Text
          style={{
            fontSize: 14,
            color: check ? PRIMARY : RIGTH_GRAY,
            fontWeight: check ? '700' : '400',
          }}>
          {title}
        </Text>
        {check && (
          <View style={{position: 'absolute', left: -10, top: -10}}>
            <IoniconsIcons
              name={'checkmark-circle'}
              color={PRIMARY}
              size={22}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NoCheckedSelectBtn;