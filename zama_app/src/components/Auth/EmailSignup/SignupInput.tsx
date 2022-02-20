import React, {FunctionComponent, useRef, useState} from 'react';
import {Text, View} from 'react-native';
// commons
import Input from '@/commons/Input/Input';
import ButtonCustom from '@/commons/Buttons/ButtonCustom';
//apis
import useAuthAPI from '@/api/user/useAuthAPI';
// libs
import {Controller} from 'react-hook-form';
// utils
import validator from '@/utils/validator';
import {transformTimes} from '@/utils/tools';
//redux
import {useDispatch} from 'react-redux';
import {onToastMessage} from '@/redux/interation/interactionSlice';
// styles
import colors from '@/styles/colors';
import {INPUT_HEIGHT, LOGIN_BUTTON_WIDTH, SCREEN_WIDTH} from '@/styles/sizes';
import Button from '@/commons/Buttons/Button';

interface Props {
  control: any;
  errors: any;
  focusName?: string;
  setFocusName: any;
  email: string;
  successCert: boolean;
  setSuccessCert: (any) => void;
}

const SignupInput: FunctionComponent<Props> = ({
  control,
  errors,
  focusName,
  setFocusName,
  email,
  successCert,
  setSuccessCert,
}) => {
  const LIMIT_TIME = 60 * 5;
  const BORDER_RADIUS = 20;
  const [showPassword, setShowPassword] = useState(false);
  const [successSendCertNum, setSuccessSendCertNum] = useState(false);

  const [validTime, setValidTime] = useState(LIMIT_TIME);
  const [isFinishedLimit, setIsFinishedLimit] = useState(false);

  const dispatch = useDispatch();
  const {sendCertNumByEmailAPI, checkCertNumAPI} = useAuthAPI();
  const secondsTimer: any = useRef();

  const setTimer = () => {
    let seconds = LIMIT_TIME;
    secondsTimer.current = setInterval(() => {
      seconds -= 1;
      if (seconds <= 0) {
        setValidTime(seconds);
        clearInterval(secondsTimer.current);
        setIsFinishedLimit(true);
      } else {
        setValidTime(seconds);
      }
    }, 1000);
  };

  const sendCertNumByEmail = async (email: string) => {
    try {
      clearInterval(secondsTimer.current);
      if (!email) {
        dispatch(
          onToastMessage({
            toastMessageText: `이메일을 입력해주세요.`,
          }),
        );
        return;
      }
      dispatch(
        onToastMessage({
          toastMessageText: `${email}로 인증번호가 전송되었습니다.`,
        }),
      );
      await sendCertNumByEmailAPI(email);
      setSuccessSendCertNum(true);
      setIsFinishedLimit(false);
      setTimer();
    } catch (e) {
      console.log(e);
    }
  };

  const handleCertNum = async certNum => {
    // isFinishedLimit
    if (isFinishedLimit) {
      dispatch(
        onToastMessage({
          toastMessageText: '인증시간이 초과되었습니다.',
        }),
      );
      return;
    }
    try {
      const result = await checkCertNumAPI(email, certNum);
      if (result?.success) {
        setSuccessCert(true);
        dispatch(
          onToastMessage({
            toastMessageText: '인증이 완료되었습니다.',
          }),
        );
        return;
      }
      dispatch(
        onToastMessage({
          toastMessageText: result?.message,
        }),
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
      <View style={{width: LOGIN_BUTTON_WIDTH}}>
        <Controller
          control={control}
          render={({onChange, value}) => (
            <Input
              label="이름을 입력해주세요."
              onChangeText={text => onChange(text)}
              value={value}
              placeholder="홍길동"
              error={errors?.name?.message}
              forceFocus={focusName === 'name'}
              onSubmitEditing={() => setFocusName('email')}
              maxLength={20}
              style={{
                width: LOGIN_BUTTON_WIDTH,
                borderRadius: 20,
                textAling: 'center',
                backgroundColor: colors.TRANSPARENT_WHITE,
                borderWidth: 1,
                borderColor: colors.DARK_PURPLE,
              }}
              labelTextStyle={{
                fontSize: 15,
                color: 'white',
                fontWeight: '700',
                marginBottom: 10,
              }}
              inputStyle={{paddingLeft: 20, fontSize: 14, color: colors.PURPLE}}
              errorTextStyle={{marginLeft: 10, color: 'white'}}
            />
          )}
          name="name"
          rules={validator.name}
          defaultValue={''}
        />
        <View style={{marginVertical: 15}} />
        <Controller
          control={control}
          render={({onChange, value}) => (
            <View style={{justifyContent: 'space-between'}}>
              <Input
                label="이메일을 입력해주세요."
                onChangeText={text => onChange(text)}
                value={value}
                editable={!successCert}
                placeholder="email@zama.com"
                error={errors?.email?.message}
                forceFocus={focusName === 'email'}
                onSubmitEditing={() => setFocusName('password')}
                maxLength={40}
                style={{
                  width: LOGIN_BUTTON_WIDTH / 1.5,
                  borderRadius: BORDER_RADIUS,
                  textAling: 'center',
                  backgroundColor: colors.TRANSPARENT_WHITE,
                  borderWidth: 1,
                  borderColor: colors.DARK_PURPLE,
                }}
                labelTextStyle={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginBottom: 10,
                  color: 'white',
                }}
                inputStyle={{
                  paddingLeft: 20,
                  fontSize: 14,
                  color: colors.PURPLE,
                }}
                errorTextStyle={{marginLeft: 10, color: 'white'}}
                button={
                  <Button
                    disabled={successCert}
                    onPress={() => sendCertNumByEmail(value)}
                    style={{
                      width: SCREEN_WIDTH / 4,
                      height: INPUT_HEIGHT,
                      backgroundColor: successCert
                        ? colors.MIDDLE_GRAY
                        : colors.PURPLE,
                      borderRadius: 10,
                    }}
                    textStyle={{color: 'white', fontSize: 12}}>
                    {!successSendCertNum || successCert
                      ? '인증번호 발송'
                      : '인증번호 재발송'}
                  </Button>
                }
              />
            </View>
          )}
          name="email"
          rules={validator.userEmail}
          defaultValue={''}
        />
        {successSendCertNum && !successCert && (
          <>
            <View style={{marginVertical: 7}} />
            <Controller
              control={control}
              render={({onChange, value}) => (
                <View style={{justifyContent: 'space-between'}}>
                  <Input
                    onChangeText={text => onChange(text)}
                    value={value}
                    placeholder="인증번호 6자리"
                    error={errors?.certNum?.message}
                    keyboardType="number-pad"
                    forceFocus={focusName === 'certNum'}
                    onSubmitEditing={() => setFocusName('password')}
                    maxLength={6}
                    style={{
                      width: LOGIN_BUTTON_WIDTH / 1.5,
                      borderRadius: BORDER_RADIUS,
                      backgroundColor: colors.TRANSPARENT_WHITE,
                      textAling: 'center',
                      borderWidth: 1,
                      borderColor: colors.DARK_PURPLE,
                    }}
                    labelTextStyle={{
                      fontSize: 15,
                      fontWeight: '700',
                      marginBottom: 10,
                    }}
                    inputStyle={{
                      paddingLeft: 20,
                      fontSize: 14,
                      paddingRight: 70,
                      color: colors.PURPLE,
                    }}
                    errorTextStyle={{marginLeft: 10, color: 'white'}}
                    time={
                      <Text
                        style={{
                          position: 'absolute',
                          right: 15,
                          bottom: (INPUT_HEIGHT - 20) / 2,
                          color: colors.WHITE,
                        }}>
                        {transformTimes(validTime)}
                      </Text>
                    }
                    button={
                      <ButtonCustom
                        handleClick={() => handleCertNum(value)}
                        text={'인증하기'}
                        backgroundColor={'black'}
                        containerStyles={{
                          width: SCREEN_WIDTH / 4,
                          height: INPUT_HEIGHT,
                          backgroundColor: colors.PURPLE,
                        }}
                        textStyles={{color: 'white', fontSize: 12}}
                      />
                    }
                  />
                </View>
              )}
              name="certNum"
              rules={validator.certNum}
              defaultValue={''}
            />
          </>
        )}

        <View style={{marginVertical: 15}} />
        <Controller
          control={control}
          render={({onChange, value}) => (
            <Input
              label="비밀번호"
              onChangeText={text => onChange(text)}
              value={value}
              secureTextEntry={!showPassword}
              placeholder="영문, 숫자 포함 8자 이상"
              error={errors?.password?.message}
              forceFocus={focusName === 'password'}
              onSubmitEditing={() => setFocusName('passwordConfirm')}
              maxLength={20}
              style={{
                width: LOGIN_BUTTON_WIDTH,
                borderRadius: BORDER_RADIUS,
                backgroundColor: colors.TRANSPARENT_WHITE,
                textAling: 'center',
                borderWidth: 1,
                borderColor: colors.DARK_PURPLE,
              }}
              labelTextStyle={{
                color: 'white',
                fontSize: 15,
                fontWeight: '700',
                marginBottom: 10,
              }}
              inputStyle={{paddingLeft: 20, fontSize: 14, color: colors.PURPLE}}
              errorTextStyle={{marginLeft: 10, color: 'white'}}
            />
          )}
          name="password"
          rules={validator.password}
          defaultValue={''}
        />
        <View style={{marginVertical: 15}} />
        <Controller
          control={control}
          render={({onChange, value}) => (
            <Input
              label="비밀번호 확인"
              onChangeText={text => onChange(text)}
              value={value}
              secureTextEntry={!showPassword}
              placeholder="영문, 숫자 포함 8자 이상"
              error={errors?.passwordConfirm?.message}
              forceFocus={focusName === 'passwordConfirm'}
              onSubmitEditing={() => setFocusName('')}
              maxLength={20}
              style={{
                width: LOGIN_BUTTON_WIDTH,
                borderRadius: BORDER_RADIUS,
                backgroundColor: colors.TRANSPARENT_WHITE,
                textAling: 'center',
                borderWidth: 1,
                borderColor: colors.DARK_PURPLE,
              }}
              labelTextStyle={{
                fontSize: 15,
                fontWeight: '700',
                marginBottom: 10,
                color: 'white',
              }}
              inputStyle={{paddingLeft: 20, fontSize: 14, color: colors.PURPLE}}
              errorTextStyle={{marginLeft: 10, color: 'white'}}
            />
          )}
          name="passwordConfirm"
          rules={validator.password}
          defaultValue={''}
        />
        <View style={{marginVertical: 10}} />
      </View>
    </View>
  );
};

export default SignupInput;
