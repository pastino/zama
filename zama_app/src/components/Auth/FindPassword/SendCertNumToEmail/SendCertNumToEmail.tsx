import React, {useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import HeaderBasic from '@/commons/Header/HeaderBasic';
import Input from '@/commons/Input/Input';
import {useForm, Controller} from 'react-hook-form';
import {BUTTON_HEIGHT, LOGIN_BUTTON_WIDTH, SCREEN_WIDTH} from '@/styles/sizes';
import {DARK_PURPLE, RIGTH_GRAY} from '@/styles/colors';
import Button from '@/commons/Buttons/Button';
import useAuthAPI from '@/api/user/useAuthAPI';

const SendCertNumToEmail = ({navigation: {goBack, navigate}}) => {
  const handleGoback = () => {
    goBack();
  };

  const {control, watch, handleSubmit, errors} = useForm();
  const {email} = watch();

  const {sendCertNumToFindPassword} = useAuthAPI();

  const handleFindPassword = async () => {
    const {success, message} = await sendCertNumToFindPassword(email);
    if (success) {
      navigate('ConfirmCertNum', {email});
    } else {
      Alert.alert(message);
    }
  };

  return (
    <>
      <HeaderBasic
        goBack={handleGoback}
        previousBtn
        title={'비밀번호 찾기 (이메일 확인)'}
      />
      <View style={{width: SCREEN_WIDTH, alignItems: 'center'}}>
        <View style={{width: LOGIN_BUTTON_WIDTH, marginTop: 30}}>
          <Controller
            control={control}
            render={({onChange, value}) => (
              <Input
                label="이메일"
                onChangeText={text => onChange(text)}
                value={value}
                placeholder="email@zama.com"
                error={errors?.email?.message}
                maxLength={40}
                style={{
                  width: LOGIN_BUTTON_WIDTH,
                  borderRadius: LOGIN_BUTTON_WIDTH / 2,
                  borderWidth: 2,
                  borderColor: DARK_PURPLE,
                }}
                labelTextStyle={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginBottom: 10,
                }}
                inputStyle={{paddingLeft: 30}}
                errorTextStyle={{marginLeft: 10}}
              />
            )}
            name="email"
            defaultValue={''}
          />
          <View style={{marginTop: 30}} />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Button
            onPress={email ? handleSubmit(handleFindPassword) : null}
            style={{
              width: LOGIN_BUTTON_WIDTH,
              height: BUTTON_HEIGHT,
              backgroundColor: email ? DARK_PURPLE : RIGTH_GRAY,
            }}>
            비밀번호 찾기
          </Button>
        </View>
      </View>
      <SafeAreaView />
    </>
  );
};

export default SendCertNumToEmail;
