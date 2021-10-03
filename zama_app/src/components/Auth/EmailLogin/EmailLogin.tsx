import React, {useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import {useForm} from 'react-hook-form';
//commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import KeyboardAvoidingView from '@/commons/KeyboardAvoidingView';
import LoginButton from '@/commons/Buttons/LoginButton';
import LoginInput from './LoginInput';
// apis
import useAuthAPI from '@/api/user/useAuthAPI';
// styles
import styled from 'styled-components/native';
import {TURQUOISE, WHITE} from '@/styles/colors';
import {LOGIN_BUTTON_WIDTH} from '@/styles/sizes';
import {useDispatch} from 'react-redux';
import {logIn} from '@/redux/user/userSlice';
import {onToastMessage} from '@/redux/interation/interactionSlice';

const EmailLogin = ({navigation: {goBack}}) => {
  const {control, register, setValue, watch, handleSubmit, errors} = useForm();
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
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: WHITE,
        }}
        bottomComponent={
          <View style={{alignItems: 'center'}}>
            <LoginButton
              handleClick={handleSubmit(handleLogin)}
              text={'로그인'}
              backgroundColor={TURQUOISE}
              style={{borderRadius: LOGIN_BUTTON_WIDTH / 2, marginBottom: 20}}
              textStyle={{color: 'white', fontWeight: '700'}}
            />
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
`;

export default EmailLogin;
