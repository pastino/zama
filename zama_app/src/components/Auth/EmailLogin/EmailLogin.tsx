import React, {useEffect, useState} from 'react';
import {Keyboard, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
//commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import KeyboardAvoidingView from '@/commons/KeyboardAvoidingView';
import LoginInput from './LoginInput';
import Button from '@/commons/Buttons/Button';
// apis
import useAuthAPI from '@/api/user/useAuthAPI';
// redux
import {useDispatch} from 'react-redux';
import {logIn} from '@/redux/user/userSlice';
import {onToastMessage} from '@/redux/interation/interactionSlice';
// styles
import styled from 'styled-components/native';
import {BLUE_GREEN, WHITE} from '@/styles/colors';
import {BUTTON_HEIGHT, LOGIN_BUTTON_WIDTH} from '@/styles/sizes';
import {isIphoneX} from 'react-native-iphone-x-helper';

const EmailLogin = ({navigation: {goBack}}) => {
  const {control, watch, handleSubmit, errors} = useForm();
  const {email, password} = watch();

  const [focusName, setFocusName] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const {loginByEmailAPI} = useAuthAPI();

  const handleLogin = async () => {
    Keyboard.dismiss();
    try {
      setLoading(true);
      const result = await loginByEmailAPI(email, password);
      if (result.success) {
        dispatch(logIn({user: result.user, token: result.token}));
      } else {
        dispatch(onToastMessage({toastMessageText: result.message}));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (errors) {
      setFocusName(Object.keys(errors)[0]);
    }
  }, [errors]);

  return (
    <Container>
      <HeaderBasic
        previousBtn={true}
        title={'이메일로 로그인'}
        goBack={goBack}
      />
      <KeyboardAvoidingView
        style={{
          backgroundColor: WHITE,
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
                backgroundColor: BLUE_GREEN,
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
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  flex-grow: 1;
`;

export default EmailLogin;
