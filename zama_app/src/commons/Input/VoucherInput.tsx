import React, {useState} from 'react';
import {Text, View} from 'react-native';
// components
import Input from './Input';
import Button from '../Buttons/Button';
// apis
import useSubscriptionAPI from '@/api/subscription/useSubscriptionAPI';
// styles
import colors from '@/styles/colors';
import * as mixins from '@/styles/mixins';

const VoucherInput = ({goBack}) => {
  const [value, setValue] = useState('');
  const {useVoucher} = useSubscriptionAPI();

  const onChangeText = text => {
    setValue(text);
  };

  const handleUseVoucher = async () => {
    try {
      const {success} = await useVoucher(value);
      if (success) {
        goBack();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <View style={{marginTop: 50}}>
        <Text style={{marginBottom: 10, color: colors.MIDDLE_GRAY}}>
          리워드로 받으신 쿠폰번호를 입력해주세요
        </Text>
        <Input
          value={value}
          onChangeText={onChangeText}
          style={[
            mixins.shadow,
            {
              flex: 1,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 5,
              paddingHorizontal: 20,
              justifyContent: 'center',
            },
          ]}
        />
      </View>
      <View>
        <Button
          onPress={handleUseVoucher}
          style={{borderRadius: 5, marginTop: 30}}
          textStyle={{fontWeight: '600'}}>
          사용하기
        </Button>
      </View>
    </View>
  );
};

export default VoucherInput;
