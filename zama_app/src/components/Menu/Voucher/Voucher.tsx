import React from 'react';
import {Text, View} from 'react-native';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
// libs
import LinearGradient from 'react-native-linear-gradient';
// styles
import VoucherInput from '@/commons/Input/VoucherInput';

const Voucher = ({navigation: {goBack, openDrawer}}) => {
  return (
    <LinearGradient
      colors={[
        'rgba(194,173,236,1)',
        'rgba(194,173,236,0.7)',
        'rgba(194,173,236,0.5)',
        'rgba(194,173,236,0.2)',
      ]}
      style={{
        flex: 1,
      }}>
      <HeaderBasic
        previousBtn={true}
        goBack={() => {
          goBack();
          openDrawer();
        }}
        style={{borderBottomWidth: 0}}
        textStyle={{color: 'black'}}
      />
      <View style={{paddingHorizontal: 20, marginTop: 30}}>
        <Text style={{fontSize: 28, lineHeight: 35, fontWeight: '700'}}>
          리워드{'\n'}사용하기
        </Text>
        <VoucherInput goBack={goBack} />
      </View>
    </LinearGradient>
  );
};

export default Voucher;
