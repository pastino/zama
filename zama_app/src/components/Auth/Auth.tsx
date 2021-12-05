import React, {useEffect, useState} from 'react';
import {Image, NativeModules} from 'react-native';
// commons
import LoginButton from '@/commons/Buttons/LoginButton';
import HorizontalSmallDivider from '@/commons/Divider/HorizontalSmallDivider';
import TermsAgree from './TermsAgree';
// libs
import SplashScreen from 'react-native-splash-screen';
// redux
import {logIn} from '@/redux/user/userSlice';
import {useDispatch} from 'react-redux';
// types
import {KakaoProfile} from './types';
import {
  onToastMessage,
  setOpenUsePurposeServey,
} from '@/redux/interation/interactionSlice';
// apis
import useAuthAPI from '@/api/user/useAuthAPI';
// styles
import {MIDDLE_GRAY, YELLOW} from '@/styles/colors';
import {SCREEN_WIDTH} from '@styles/sizes';
import styled from 'styled-components/native';

const Auth = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [kakaoId, setKakaoId] = useState(0);
  const [agreeTermModal, setAgreeTermModal] = useState(false);
  const KAKAO_BUTTON_INFO = {
    buttonText: '카카오로 로그인하기',
    kakaoIcon: require('@/assets/images/kakaoLogo.png'),
    backColor: YELLOW,
  };

  const {buttonText, kakaoIcon, backColor} = KAKAO_BUTTON_INFO;
  const {RNKakaoLogins} = NativeModules;

  const dispatch = useDispatch();
  const {loginByKakaoAPI} = useAuthAPI();

  const handleKakaoLogin = async () => {
    setIsLoading(true);
    try {
      await RNKakaoLogins.login();
      const {id}: KakaoProfile = await RNKakaoLogins.getProfile();
      if (!id) throw new Error('아이디가 존재하지 않습니다.');
      setKakaoId(id);
      const {success, message, token, user} = await loginByKakaoAPI(id);
      if (!success) {
        dispatch(onToastMessage({toastMessageText: message}));
      }
      if (!user) {
        setAgreeTermModal(true);
      }
      if (success && user) {
        dispatch(logIn({token, user}));
      }
      dispatch(logIn({token, user}));
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const handleConfirmAgreeTerms = async terms => {
    try {
      const {success, token, user, message} = await loginByKakaoAPI(
        kakaoId,
        terms,
      );
      if (success) {
        dispatch(logIn({token, user}));
        dispatch(setOpenUsePurposeServey({}));
      } else {
        dispatch(onToastMessage({toastMessageText: message}));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setTermsModal = () => {
    setAgreeTermModal(true);
  };

  const handleMoveToTerm = termKey => {
    setAgreeTermModal(false);
    navigation.navigate(termKey, {setTermsModal});
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <ScreenWrapper>
      <Logo>
        <Image
          source={require('@assets/images/logo/text_zama.png')}
          resizeMode={'contain'}
          style={{width: SCREEN_WIDTH}}
        />
        <Image
          source={require('@assets/images/logo/text_kids.png')}
          resizeMode={'contain'}
          style={{width: SCREEN_WIDTH, marginTop: 13}}
        />
      </Logo>
      <LoginFooter>
        <LoginButton
          handleClick={handleKakaoLogin}
          text={buttonText}
          iconPath={kakaoIcon}
          backgroundColor={backColor}
          style={{marginBottom: 10}}
        />
        <EmailLoginWrapper>
          <TextTouchable onPress={() => navigation.navigate('EmailLogin')}>
            <TextInput>이메일로 로그인하기</TextInput>
          </TextTouchable>
          <HorizontalSmallDivider color={MIDDLE_GRAY} />
          <TextTouchable onPress={() => navigation.navigate('EmailSignup')}>
            <TextInput>이메일로 가입하기</TextInput>
          </TextTouchable>
        </EmailLoginWrapper>
      </LoginFooter>
      <TermsAgree
        visible={agreeTermModal}
        setVisible={setAgreeTermModal}
        handlePressBtn={handleConfirmAgreeTerms}
        navigation={navigation}
        handleMoveToTerm={handleMoveToTerm}
      />
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.View`
  flex: 1;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const LoginFooter = styled.View`
  margin-bottom: 60px;
`;

const EmailLoginWrapper = styled.View`
  margin-top: 7px;
  justify-content: center;
  flex-direction: row;
`;

const TextTouchable = styled.TouchableNativeFeedback``;

const TextInput = styled.Text`
  color: ${MIDDLE_GRAY};
`;

export default Auth;
