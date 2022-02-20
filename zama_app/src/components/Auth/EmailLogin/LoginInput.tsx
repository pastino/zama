import React, {FunctionComponent, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
// commons
import TouchableOpacity from '@/commons/TouchableOpacity';
import Input from '@/commons/Input/Input';
// libs
import {Controller} from 'react-hook-form';
// utils
import validator from '@/utils/validator';
// styles
import colors from '@/styles/colors';
import {LOGIN_BUTTON_WIDTH, SCREEN_WIDTH} from '@/styles/sizes';

interface Props {
  control: any;
  errors: any;
  focusName?: string;
  setFocusName: any;
  navigation: any;
}

const LoginInput: FunctionComponent<Props> = ({
  control,
  errors,
  focusName,
  setFocusName,
  navigation,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const BORDER_RADIUS = 20;

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <View style={{width: LOGIN_BUTTON_WIDTH}}>
        <Controller
          control={control}
          render={({onChange, value}) => (
            <Input
              label="이메일"
              onChangeText={text => onChange(text)}
              value={value}
              placeholder="email@zama.com"
              error={errors?.email?.message}
              forceFocus={focusName === 'email'}
              onSubmitEditing={() => setFocusName('password')}
              maxLength={20}
              style={{
                width: LOGIN_BUTTON_WIDTH,
                borderRadius: BORDER_RADIUS,
                borderWidth: 2,
                borderColor: colors.DARK_PURPLE,
                backgroundColor: colors.TRANSPARENT_WHITE,
              }}
              labelTextStyle={{
                fontSize: 15,
                fontWeight: '700',
                marginBottom: 10,
                color: 'white',
              }}
              inputStyle={{paddingLeft: 30, color: colors.PURPLE}}
              errorTextStyle={{marginLeft: 10, color: 'white'}}
            />
          )}
          name="email"
          rules={validator.userEmail}
          defaultValue={''}
        />
        <View style={{marginTop: 30}} />
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
              onSubmitEditing={() => setFocusName('')}
              maxLength={20}
              style={{
                width: LOGIN_BUTTON_WIDTH,
                borderRadius: BORDER_RADIUS,
                borderWidth: 2,
                borderColor: colors.DARK_PURPLE,
                backgroundColor: colors.TRANSPARENT_WHITE,
              }}
              labelTextStyle={{
                fontSize: 15,
                fontWeight: '700',
                marginBottom: 10,
                color: 'white',
              }}
              button={
                <TouchableOpacity
                  onPress={() => setShowPassword(prev => !prev)}
                  style={{padding: 5}}></TouchableOpacity>
              }
              inputStyle={{paddingLeft: 30, color: colors.PURPLE}}
              errorTextStyle={{marginLeft: 10, color: 'white'}}
            />
          )}
          name="password"
          rules={validator.password}
          defaultValue={''}
        />
      </View>
      <View style={{width: LOGIN_BUTTON_WIDTH, alignItems: 'flex-end'}}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('FindPassword')}>
          <Text
            style={{
              color: colors.WHITE,
              marginTop: 25,
              textDecorationLine: 'underline',
            }}>
            비밀번호를 잊으셨나요?
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default LoginInput;
