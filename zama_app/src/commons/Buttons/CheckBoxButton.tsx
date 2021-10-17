import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import TouchableOpacity from '@/commons/TouchableOpacity';
// styles
import {RIGTH_GRAY} from '@/styles/colors';
import {IoniconsIcons} from '../Icons/RnIcons';

interface Props {
  index?: number;
  title: string;
  check: boolean;
  handleCheck: (index?: number, check?: boolean) => void;
}

const CheckBoxButton: FunctionComponent<Props> = ({
  index,
  title,
  check,
  handleCheck,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        index || index === 0 ? handleCheck(index, !check) : handleCheck()
      }>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <IoniconsIcons
          name={'checkbox'}
          size={25}
          color={check ? 'black' : RIGTH_GRAY}
        />

        <Text style={{paddingLeft: 10, fontSize: 14}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckBoxButton;
