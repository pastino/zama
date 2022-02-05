import React, {useEffect, useState} from 'react';
import {Keyboard, SafeAreaView, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
//commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import KeyboardAvoidingView from '@/commons/KeyboardAvoidingView';
import LoginInput from './LoginInput';
import Button from '@/commons/Buttons/Button';
// libs
import {isIphoneX} from 'react-native-iphone-x-helper';
// apis
import useAuthAPI from '@/api/user/useAuthAPI';
// redux
import {useDispatch} from 'react-redux';
import {logIn} from '@/redux/user/userSlice';
import {onToastMessage} from '@/redux/interation/interactionSlice';
// styles
import colors from '@/styles/colors';
import {BUTTON_HEIGHT, LOGIN_BUTTON_WIDTH} from '@/styles/sizes';

const EmailLogin = ({navigation}) => {
  const {goBack} = navigation;
  const {control, watch, handleSubmit, errors} = useForm();
  const {email, password} = watch();

  const [focusName, setFocusName] = useState('');

  const dispatch = useDispatch();

  const {loginByEmailAPI} = useAuthAPI();

  const handleLogin = async () => {
    Keyboard.dismiss();
    try {
      const result = await loginByEmailAPI(email, password);
      if (result.success) {
        dispatch(logIn({user: result.user, token: result.token}));
      } else {
        dispatch(onToastMessage({toastMessageText: result.message}));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (errors) {
      setFocusName(Object.keys(errors)[0]);
    }
  }, [errors]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.DARK_PURPLE}}>
      <HeaderBasic
        previousBtn={true}
        title={'이메일로 로그인'}
        goBack={goBack}
      />
      <KeyboardAvoidingView
        style={{
          backgroundColor: colors.DARK_PURPLE,
          flex: 1,
        }}
        bottomComponent={
          <View
            style={{
              alignItems: 'center',
              marginBottom: !isIphoneX() ? 30 : 0,
            }}>
            <Button
              onPress={handleSubmit(handleLogin)}
              style={{
                width: LOGIN_BUTTON_WIDTH,
                height: BUTTON_HEIGHT,
                backgroundColor: colors.PURPLE,
                marginBottom: 20,
              }}>
              로그인
            </Button>
          </View>
        }>
        <LoginInput
          control={control}
          errors={errors}
          focusName={focusName}
          setFocusName={setFocusName}
          navigation={navigation}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EmailLogin;
