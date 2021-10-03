import React, {FunctionComponent, useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// commons
import Input from '@/commons/Input/Input';
// libs
import {Controller} from 'react-hook-form';
// utils
import validator from '@/utils/validator';
// styles
import {MIDDLE_GRAY, TURQUOISE} from '@/styles/colors';
import {LOGIN_BUTTON_WIDTH} from '@/styles/sizes';

interface Props {
  control: any;
  errors: any;
  focusName?: string;
  setFocusName: any;
}

const LoginInput: FunctionComponent<Props> = ({
  control,
  errors,
  focusName,
  setFocusName,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(errors);
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
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
                borderRadius: LOGIN_BUTTON_WIDTH / 2,
                textAling: 'center',
                borderWidth: 2,
                borderColor: TURQUOISE,
              }}
              labelTextStyle={{
                fontSize: 15,
                fontWeight: '700',
                marginBottom: 10,
              }}
              inputStyle={{textAlign: 'center'}}
              errorTextStyle={{marginLeft: 10}}
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
                borderRadius: LOGIN_BUTTON_WIDTH / 2,
                textAling: 'center',
                borderWidth: 2,
                borderColor: TURQUOISE,
              }}
              labelTextStyle={{
                fontSize: 15,
                fontWeight: '700',
                marginBottom: 10,
              }}
              button={
                <TouchableOpacity
                  onPress={() => setShowPassword(prev => !prev)}
                  style={{padding: 5}}>
                  {/* <Icon iconName={showPassword ? 'eye' : 'eye-off'} /> */}
                </TouchableOpacity>
              }
              inputStyle={{textAlign: 'center'}}
              errorTextStyle={{marginLeft: 10}}
            />
          )}
          name="password"
          rules={validator.password}
          defaultValue={''}
        />
      </View>
      <View style={{width: LOGIN_BUTTON_WIDTH, alignItems: 'flex-end'}}>
        <Text
          style={{
            color: MIDDLE_GRAY,
            marginTop: 25,
            textDecorationLine: 'underline',
          }}>
          비밀번호를 잊으셨나요?
        </Text>
      </View>
    </View>
  );
};

export default LoginInput;
