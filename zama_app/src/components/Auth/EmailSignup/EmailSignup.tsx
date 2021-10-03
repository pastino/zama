import React, {useEffect, useState} from 'react';
import {Keyboard, View} from 'react-native';
import SignupInput from './SignupInput';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import KeyboardAvoidingView from '@/commons/KeyboardAvoidingView';
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
import LoginButton from '@/commons/Buttons/LoginButton';
import styled from 'styled-components/native';
import {TURQUOISE, WHITE} from '@/styles/colors';
import {LOGIN_BUTTON_WIDTH, SCREEN_WIDTH} from '@/styles/sizes';
import TermsAgree from '../TermsAgree';

interface termTypes {
  title: string;
  requirement: boolean;
  check: boolean;
  content: boolean;
}

const EmailSignup = ({navigation: {goBack, navigate}}) => {
  const [successCert, setSuccessCert] = useState(false);
  const [agreeTermModal, setAgreeTermModal] = useState(false);
  const [focusName, setFocusName] = useState('');

  const [loading, setLoading] = useState(false);

  const {control, register, setValue, watch, handleSubmit, errors} = useForm();
  const {name, email, certNum, password, passwordConfirm} = watch();

  const {emailSignUpLoginAPI} = useAuthAPI();
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
      const result = await emailSignUpLoginAPI(name, email, password, term);
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
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: WHITE,
        }}
        bottomComponent={
          <View style={{alignItems: 'center'}}>
            <LoginButton
              handleClick={handleSubmit(handleSignUp)}
              text={'회원가입'}
              backgroundColor={TURQUOISE}
              style={{
                borderRadius: LOGIN_BUTTON_WIDTH / 2,
              }}
              textStyle={{color: 'white', fontWeight: '700'}}
            />
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
      />
      {/* <BottomModalContainer
        isVisible={agreeTermModal}
        close={() => setAgreeTermModal(false)}>
        <BottomModalCard
          buttonText="약관동의"
          buttonDisabled={requirementCheckedStates.includes(false)}
          onPress={handleConfirmAgreeTerms}
          close={() => setAgreeTermModal(false)}>
          <CheckBoxButton
            title={'모든 약관에 동의합니다'}
            check={allAgree}
            handleCheck={handleAllCheck}
          />
          <View style={{marginTop: 12, marginBottom: 12}}>
            <VerticalDivider width={SCREEN_WIDTH * 0.9} />
          </View>
          {term?.map((obj, index) => (
            <View
              key={obj.title}
              style={{
                marginTop: index !== 0 ? 7 : 0,
                marginBottom: index === term.length - 1 ? 10 : 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <CheckBoxButton
                  index={index}
                  {...obj}
                  handleCheck={handleCheck}
                />
                {obj.requirement ? (
                  <Text style={{color: RED, fontSize: 12}}>&nbsp;(필수)</Text>
                ) : (
                  <Text style={{fontSize: 12}}>&nbsp;(선택)</Text>
                )}
              </View>
              {obj.content && (
                <View style={{}}>
                  <Text
                    style={{
                      fontSize: 13,
                      color: TURQUOISE,
                      textDecorationLine: 'underline',
                    }}>
                    보러가기
                  </Text>
                </View>
              )}
            </View>
          ))}
        </BottomModalCard>
      </BottomModalContainer> */}
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
`;

export default EmailSignup;
