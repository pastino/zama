import React, {useState} from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import HeaderBasic from '@/commons/Header/HeaderBasic';
import Input from '@/commons/Input/Input';
import {useForm, Controller} from 'react-hook-form';
import {BUTTON_HEIGHT, LOGIN_BUTTON_WIDTH, SCREEN_WIDTH} from '@/styles/sizes';
import colors from '@/styles/colors';
import Button from '@/commons/Buttons/Button';
import useAuthAPI from '@/api/user/useAuthAPI';

const ConfirmCertNum = ({navigation: {goBack, navigate}, route}) => {
  const email = route?.params?.email;
  const handleGoback = () => {
    goBack();
  };

  const {control, watch, handleSubmit, errors} = useForm();
  const {certNum} = watch();

  const {checkCertNumAPI} = useAuthAPI();

  const handleFindPassword = async () => {
    const {success, message} = await checkCertNumAPI(email, certNum);
    if (success) {
      navigate('ChangePassword', {email});
      console.log('ok');
    } else {
      Alert.alert(message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.DARK_PURPLE}}>
      <HeaderBasic
        goBack={handleGoback}
        previousBtn
        title={'비밀번호 찾기 (인증)'}
      />

      <View style={{width: SCREEN_WIDTH, alignItems: 'center'}}>
        <Text
          style={{marginTop: 20, fontSize: 13, lineHeight: 20, color: 'white'}}>
          이메일로 인증번호가 전송되었습니다. {`\n`}전송된 인증번호를 입력 후
          인증해주세요.
        </Text>
        <View style={{width: LOGIN_BUTTON_WIDTH, marginTop: 20}}>
          <Controller
            control={control}
            render={({onChange, value}) => (
              <Input
                label="인증번호"
                onChangeText={text => onChange(text)}
                value={value}
                placeholder="123456"
                error={errors?.email?.message}
                maxLength={6}
                style={{
                  width: LOGIN_BUTTON_WIDTH,
                  borderRadius: LOGIN_BUTTON_WIDTH / 2,
                  borderWidth: 2,
                  borderColor: colors.DARK_PURPLE,
                  backgroundColor: colors.TRANSPARENT_WHITE,
                }}
                labelTextStyle={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginBottom: 10,
                  color: 'white',
                }}
                inputStyle={{paddingLeft: 30, color: colors.PURPLE}}
                errorTextStyle={{marginLeft: 10, color: 'white'}}
              />
            )}
            name="certNum"
            defaultValue={''}
          />
          <View style={{marginTop: 30}} />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Button
            onPress={
              certNum && certNum.length === 6
                ? handleSubmit(handleFindPassword)
                : null
            }
            style={{
              width: LOGIN_BUTTON_WIDTH,
              height: BUTTON_HEIGHT,
              backgroundColor:
                certNum && certNum.length === 6
                  ? colors.PURPLE
                  : colors.RIGTH_GRAY,
            }}>
            비밀번호 찾기
          </Button>
        </View>
      </View>
      <SafeAreaView />
    </SafeAreaView>
  );
};

export default ConfirmCertNum;
