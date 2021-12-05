import React, {useState} from 'react';
import {Alert, SafeAreaView, View} from 'react-native';
import HeaderBasic from '@/commons/Header/HeaderBasic';
import Input from '@/commons/Input/Input';
import {useForm, Controller} from 'react-hook-form';
import {BUTTON_HEIGHT, LOGIN_BUTTON_WIDTH, SCREEN_WIDTH} from '@/styles/sizes';
import {DARK_PURPLE, RIGTH_GRAY} from '@/styles/colors';
import Button from '@/commons/Buttons/Button';
import useAuthAPI from '@/api/user/useAuthAPI';
import validator from '@/utils/validator';
import NoticeModal from '@/commons/Modals/NoticeModal';

const ChangePassword = ({navigation: {goBack, navigate}, route}) => {
  const email = route?.params?.email;
  const [showPassword, setShowPassword] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {control, watch, handleSubmit, errors} = useForm();
  const {password, confirmPassword} = watch();

  const {changePassword} = useAuthAPI();

  const handleFindPassword = async () => {
    if (password == confirmPassword) {
      const {success, message} = await changePassword(email, password);
      if (success) {
        setIsModalVisible(!isModalVisible);
      } else {
        Alert.alert(message);
      }
    } else {
      Alert.alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <>
      <HeaderBasic
        goBack={goBack}
        previousBtn
        title={'비밀번호 찾기 (비밀번호 변경)'}
      />
      <View style={{width: SCREEN_WIDTH, alignItems: 'center'}}>
        <View style={{width: LOGIN_BUTTON_WIDTH, marginTop: 30}}>
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
                maxLength={20}
                style={{
                  width: LOGIN_BUTTON_WIDTH,
                  borderRadius: LOGIN_BUTTON_WIDTH / 2,
                  textAling: 'center',
                  borderWidth: 1,
                  borderColor: DARK_PURPLE,
                }}
                labelTextStyle={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginBottom: 10,
                }}
                inputStyle={{paddingLeft: 20, fontSize: 14}}
                errorTextStyle={{marginLeft: 10}}
              />
            )}
            name="password"
            rules={validator.password}
            defaultValue={''}
          />
          <View style={{marginVertical: 10}} />
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
                maxLength={20}
                style={{
                  width: LOGIN_BUTTON_WIDTH,
                  borderRadius: LOGIN_BUTTON_WIDTH / 2,
                  textAling: 'center',
                  borderWidth: 1,
                  borderColor: DARK_PURPLE,
                }}
                labelTextStyle={{
                  fontSize: 15,
                  fontWeight: '700',
                  marginBottom: 10,
                }}
                inputStyle={{paddingLeft: 20, fontSize: 14}}
                errorTextStyle={{marginLeft: 10}}
              />
            )}
            name="confirmPassword"
            rules={validator.password}
            defaultValue={''}
          />
          <View style={{marginTop: 30}} />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Button
            onPress={email ? handleSubmit(handleFindPassword) : null}
            style={{
              width: LOGIN_BUTTON_WIDTH,
              height: BUTTON_HEIGHT,
              backgroundColor: email ? DARK_PURPLE : RIGTH_GRAY,
            }}>
            비밀번호 찾기
          </Button>
        </View>
      </View>
      <NoticeModal
        visible={isModalVisible}
        setVisible={setIsModalVisible}
        onPressConfirm={() => {
          setIsModalVisible(!isModalVisible);
          navigate('EmailLogin');
        }}
        text={'비밀번호 변경이 완료되었습니다.'}
      />
      <SafeAreaView />
    </>
  );
};

export default ChangePassword;
