import React from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import HeaderBasic from '@/commons/Header/HeaderBasic';
import Input from '@/commons/Input/Input';
import {useForm, Controller} from 'react-hook-form';
import {BUTTON_HEIGHT, LOGIN_BUTTON_WIDTH, SCREEN_WIDTH} from '@/styles/sizes';
import colors from '@/styles/colors';
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
    <SafeAreaView style={{backgroundColor: colors.DARK_PURPLE, flex: 1}}>
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
              backgroundColor: email ? colors.PURPLE : colors.RIGTH_GRAY,
            }}>
            비밀번호 찾기
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SendCertNumToEmail;
