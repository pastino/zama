import React, {useEffect, useState} from 'react';
import {Keyboard, SafeAreaView, Text, View} from 'react-native';
// components
import SignupInput from './SignupInput';
import TermsAgree from '../TermsAgree';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import KeyboardAvoidingView from '@/commons/KeyboardAvoidingView';
import Button from '@/commons/Buttons/Button';
// redux
import {useDispatch} from 'react-redux';
import {
  onToastMessage,
  setOpenUsePurposeServey,
} from '@/redux/interation/interactionSlice';
import {logIn} from '@/redux/user/userSlice';
// apis
import useAuthAPI from '@/api/user/useAuthAPI';
// libs
import {useForm} from 'react-hook-form';
// styles
import styled from 'styled-components/native';
import {DARK_PURPLE, WHITE} from '@/styles/colors';
import {BUTTON_HEIGHT, LOGIN_BUTTON_WIDTH} from '@/styles/sizes';
import {isIphoneX} from 'react-native-iphone-x-helper';

interface TermTypes {
  title: string;
  requirement: boolean;
  check: boolean;
  content: boolean;
}

const EmailSignup = ({navigation}) => {
  const {goBack, navigate} = navigation;
  const [successCert, setSuccessCert] = useState(false);
  const [agreeTermModal, setAgreeTermModal] = useState(false);
  const [focusName, setFocusName] = useState('');

  const [loading, setLoading] = useState(false);

  const {control, register, setValue, watch, handleSubmit, errors} = useForm();
  const {name, email, certNum, password, passwordConfirm} = watch();

  const {signUpByEmailAPI} = useAuthAPI();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    Keyboard.dismiss();
    try {
      if (password !== passwordConfirm) {
        dispatch(
          onToastMessage({toastMessageText: '비밀번호가 일치하지 않습니다.'}),
        );
        return;
      } else if (!successCert) {
        dispatch(
          onToastMessage({toastMessageText: '이메일 인증을 완료해주세요'}),
        );
      }
      setAgreeTermModal(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleConfirmAgreeTerms = async term => {
    setLoading(true);
    try {
      const result = await signUpByEmailAPI(name, email, password, term);
      if (result.success) {
        dispatch(logIn({user: result.user, token: result.token}));
        dispatch(setOpenUsePurposeServey({}));
      } else {
        dispatch(onToastMessage({toastMessageText: result.message}));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setTermsModal = () => {
    setAgreeTermModal(!agreeTermModal);
  };

  const handleMoveToTerm = termKey => {
    setTermsModal();
    navigation.navigate(termKey, {setTermsModal});
  };

  useEffect(() => {
    if (errors) {
      setFocusName(Object.keys(errors)[0]);
    }
  }, [errors]);

  return (
    <Container>
      <HeaderBasic previousBtn={true} title={'회원가입'} goBack={goBack} />
      <KeyboardAvoidingView
        style={{
          backgroundColor: WHITE,
        }}
        bottomComponent={
          <View
            style={{alignItems: 'center', marginBottom: !isIphoneX() ? 30 : 0}}>
            <Button
              onPress={handleSubmit(handleSignUp)}
              style={{
                width: LOGIN_BUTTON_WIDTH,
                height: BUTTON_HEIGHT,
                backgroundColor: DARK_PURPLE,
              }}
              textStyle={{color: WHITE}}>
              <Text>회원가입</Text>
            </Button>
          </View>
        }>
        <SignupInput
          control={control}
          errors={errors}
          focusName={focusName}
          setFocusName={setFocusName}
          email={email}
          successCert={successCert}
          setSuccessCert={setSuccessCert}
        />
      </KeyboardAvoidingView>
      <TermsAgree
        visible={agreeTermModal}
        setVisible={setAgreeTermModal}
        handlePressBtn={handleConfirmAgreeTerms}
        navigation={navigation}
        handleMoveToTerm={handleMoveToTerm}
      />
      <SafeAreaView />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default EmailSignup;
