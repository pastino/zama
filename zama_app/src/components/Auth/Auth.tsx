import React, {useEffect, useState} from 'react';
import {Image, Platform} from 'react-native';
// commons
import LoginButton from '@/commons/Buttons/LoginButton';
import HorizontalSmallDivider from '@/commons/Divider/HorizontalSmallDivider';
import TermsAgree from './TermsAgree';
// libs
import SplashScreen from 'react-native-splash-screen';
import appleAuth from '@invertase/react-native-apple-authentication';
import KakaoLogins, {KAKAO_AUTH_TYPES} from '@react-native-seoul/kakao-login';
import jwt_decode from 'jwt-decode';
// redux
import {logIn} from '@/redux/user/userSlice';
import {useDispatch} from 'react-redux';
import {
  onToastMessage,
  setOpenUsePurposeServey,
} from '@/redux/interation/interactionSlice';
// apis
import useAuthAPI from '@/api/user/useAuthAPI';
// styles
import {MIDDLE_GRAY, WHITE, YELLOW} from '@/styles/colors';
import {SCREEN_WIDTH} from '@styles/sizes';
import styled from 'styled-components/native';

const Auth = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [kakaoId, setKakaoId] = useState<number>(0);
  const [appleEmail, setAppleEmail] = useState('');
  const [agreeTermModal, setAgreeTermModal] = useState(false);

  const KAKAO_BUTTON_INFO = {
    buttonText: '카카오로 로그인하기',
    kakaoIcon: require('@/assets/images/kakaoLogo.png'),
    backColor: YELLOW,
  };

  const {buttonText, kakaoIcon, backColor} = KAKAO_BUTTON_INFO;

  const dispatch = useDispatch();
  const {loginByKakaoAPI, loginByAppleAPI} = useAuthAPI();

  const handleKakaoLogin = async () => {
    setIsLoading(true);
    try {
      await KakaoLogins.login([
        KAKAO_AUTH_TYPES.Talk,
        KAKAO_AUTH_TYPES.Account,
      ]);
      const profile = await getProfile();
      const id = profile?.id ? Number(profile?.id) : 0;
      if (id === 0) throw new Error('아이디가 존재하지 않습니다.');
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

  const getProfile = async () => {
    return KakaoLogins.getProfile()
      .then(result => {
        return result;
      })
      .catch(e => {
        console.log(e);
        return null;
      });
  };

  const handleAppleLogin = async () => {
    const appleAuthRequestResponse: any = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );
    if (credentialState === appleAuth.State.AUTHORIZED) {
      const decodedToken: any = jwt_decode(
        appleAuthRequestResponse.identityToken,
      );
      const email = decodedToken.email;
      setAppleEmail(email);
      const {success, message, token, user} = await loginByAppleAPI(email);
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
    }
  };

  const finishLogin = ({success, token, user, message}) => {
    if (success) {
      console.log(success, token, user, message);
      dispatch(logIn({token, user}));
      dispatch(setOpenUsePurposeServey({}));
    } else {
      dispatch(onToastMessage({toastMessageText: message}));
    }
  };

  const handleConfirmAgreeTerms = async terms => {
    try {
      if (kakaoId) {
        const {success, token, user, message} = await loginByKakaoAPI(
          kakaoId,
          terms,
        );
        finishLogin({success, token, user, message});
      } else {
        const {success, token, user, message} = await loginByAppleAPI(
          appleEmail,
          terms,
        );
        finishLogin({success, token, user, message});
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
        {Platform.OS === 'ios' && (
          <LoginButton
            handleClick={handleAppleLogin}
            text={'애플로 로그인하기'}
            iconPath={require('@/assets/images/appleLogo.png')}
            backgroundColor={WHITE}
            style={{marginBottom: 10}}
          />
        )}
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
