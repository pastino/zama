import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, Platform, Text, View} from 'react-native';
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
import colors from '@/styles/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@styles/sizes';
import styled from 'styled-components/native';
import Button from '@/commons/Buttons/Button';

const Auth = ({navigation}) => {
  const [kakaoId, setKakaoId] = useState<number>(0);
  const [kakaoInfo, setKakaoInfo] = useState<any>(null);
  const [appleEmail, setAppleEmail] = useState('');
  const [agreeTermModal, setAgreeTermModal] = useState(false);

  const LOGIN_BUTTON = [
    {
      text: '카카오로 로그인',
      icon: require('@/assets/images/kakaoLogo.png'),
      handleClick: () => handleKakaoLogin(),
      components: function () {
        return (
          <LoginButton
            handleClick={this.handleClick}
            text={this.text}
            iconPath={this.icon}
            backgroundColor={colors.YELLOW}
            style={{marginBottom: 15}}
          />
        );
      },
    },
    {
      text: 'Apple로 로그인',
      icon: require('@/assets/images/appleLogo.png'),
      handleClick: () => handleAppleLogin(),
      components: function () {
        return (
          <LoginButton
            handleClick={this.handleClick}
            text={this.text}
            iconPath={this.icon}
            backgroundColor={colors.WHITE}
            style={{marginBottom: 20}}
          />
        );
      },
    },
  ];

  const dispatch = useDispatch();
  const {loginByKakaoAPI, loginByAppleAPI} = useAuthAPI();

  const handleKakaoLogin = async () => {
    try {
      await KakaoLogins.login([
        KAKAO_AUTH_TYPES.Talk,
        KAKAO_AUTH_TYPES.Account,
      ]);
      const profile = await getProfile();
      const id = profile?.id ? Number(profile?.id) : 0;
      if (id === 0) throw new Error('아이디가 존재하지 않습니다.');
      setKakaoId(id);
      setKakaoInfo(profile);
      const {success, message, token, user} = await loginByKakaoAPI({
        kakaoId: id,
      });
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
      dispatch(logIn({token, user}));
      dispatch(setOpenUsePurposeServey({}));
    } else {
      dispatch(onToastMessage({toastMessageText: message}));
    }
  };

  const handleConfirmAgreeTerms = async terms => {
    try {
      if (kakaoId) {
        const {success, token, user, message} = await loginByKakaoAPI({
          kakaoId,
          email: kakaoInfo?.email,
          nickname: kakaoInfo?.nickname,
          terms,
        });

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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 100,
        }}>
        <View style={{flex: 0.2}}>
          <Image
            source={require('@/assets/images/zama-text.png')}
            style={{width: SCREEN_WIDTH / 1.7}}
            resizeMode={'contain'}
          />
        </View>
        <View style={{flex: 0.4}}>
          <LoginFooter>
            {LOGIN_BUTTON.map(obj => (
              <View key={obj.text} style={{flexDirection: 'column'}}>
                {obj.components()}
              </View>
            ))}
            <EmailLoginWrapper>
              <TextTouchable onPress={() => navigation.navigate('EmailLogin')}>
                <TextInput>이메일로 로그인하기</TextInput>
              </TextTouchable>
              <HorizontalSmallDivider color={'black'} />
              <TextTouchable onPress={() => navigation.navigate('EmailSignup')}>
                <TextInput>아직 회원이 아닌가요?</TextInput>
              </TextTouchable>
            </EmailLoginWrapper>
          </LoginFooter>
        </View>
        <TermsAgree
          visible={agreeTermModal}
          setVisible={setAgreeTermModal}
          handlePressBtn={handleConfirmAgreeTerms}
          navigation={navigation}
          handleMoveToTerm={handleMoveToTerm}
        />
      </View>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.PURPLE};
`;

const LoginFooter = styled.View`
  margin-top: 80px;
`;

const EmailLoginWrapper = styled.View`
  margin-top: 7px;
  justify-content: center;
  flex-direction: row;
`;

const TextTouchable = styled.TouchableNativeFeedback``;

const TextInput = styled.Text`
  color: black;
`;

export default Auth;
