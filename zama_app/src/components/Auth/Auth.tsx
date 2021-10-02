import React, {useState} from 'react';
import {NativeModules} from 'react-native';
//redux
import {logIn} from '@/redux/user/userSlice';
import {useDispatch} from 'react-redux';
//types
import {KakaoProfile} from './types';
//styles
import {RIGTH_GRAY, YELLOW} from '@/styles/colors';
import styled from 'styled-components/native';
import LoginButton from '@/commons/Buttons/LoginButton';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const KAKAO_BUTTON_INFO = {
    buttonText: '카카오로 로그인하기',
    kakaoIcon: require('@/assets/images/kakaoLogo.png'),
    backColor: YELLOW,
  };
  const ANOTHER_LOGIN_TEXT = '다른 방법으로 로그인하기';

  const {buttonText, kakaoIcon, backColor} = KAKAO_BUTTON_INFO;
  const {RNKakaoLogins} = NativeModules;

  const dispatch = useDispatch();

  const handleKakaoLogin = async () => {
    setIsLoading(true);
    try {
      await RNKakaoLogins.login();
      const {id}: KakaoProfile = await RNKakaoLogins.getProfile();
      // if (!id) throw new Error('아이디가 존재하지 않습니다.');
      // const {token, user} = await postKakaoLogin(id);
      const token = 'asdlfkjasoidfu90123';
      const user = {id: 12312, kakaoId: id};
      dispatch(logIn({token, user}));
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  return (
    <ScreenWrapper>
      <LoginButton
        handleClick={handleKakaoLogin}
        text={buttonText}
        iconPath={kakaoIcon}
        backgroundColor={backColor}
      />
      <TextTouchable onPress={() => setIsModalVisible(!isModalVisible)}>
        <TextInput>{ANOTHER_LOGIN_TEXT}</TextInput>
      </TextTouchable>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SafeAreaWrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const TextTouchable = styled.TouchableNativeFeedback``;

const TextInput = styled.Text`
  margin: 20px 0px 30px 0;
  color: ${RIGTH_GRAY};
  text-decoration: underline ${RIGTH_GRAY};
`;

export default Auth;
