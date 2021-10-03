import {RIGTH_GRAY} from '@/styles/colors';
import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
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
    <TouchableWithoutFeedback
      onPress={() =>
        index || index === 0 ? handleCheck(index, !check) : handleCheck()
      }
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <View>
        <IoniconsIcons
          name={'checkbox'}
          size={25}
          color={check ? 'black' : RIGTH_GRAY}
        />
      </View>
      <Text style={{paddingLeft: 10, fontSize: 14}}>{title}</Text>
    </TouchableWithoutFeedback>
  );
};

export default CheckBoxButton;
