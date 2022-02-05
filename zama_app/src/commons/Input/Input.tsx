import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput} from 'react-native';
import Label from './Label';
import Error from './Error';
// styles
import * as sizes from '@styles/sizes';
import colors from '@/styles/colors';
import {typography} from '@styles/typography';

interface Props {
  label?: string;
  error?: string;
  required?: boolean;
  inputStyle?: {};
  labelTextStyle?: {};
  contentStyle?: {};
  errorTextStyle?: {};
  style?: {};
  button?: any;
  forceFocus?: boolean;
  [key: string]: any;
}

function Input({
  label,
  error,
  required,
  style,
  inputStyle,
  labelTextStyle,
  contentStyle,
  errorTextStyle,
  button,
  forceFocus,
  time,
  ...props
}: Props) {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef: any = useRef();

  useEffect(() => {
    if (forceFocus) {
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 300);
    }
  }, [forceFocus]);

  return (
    <>
      <Label label={label} required={required} textStyle={labelTextStyle} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={style}>
          <View
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 10,
              },
              contentStyle,
            ]}>
            <TextInput
              ref={inputRef}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              autoCorrect={false}
              placeholderTextColor={colors.RIGTH_GRAY}
              selectionColor={colors.ORANGE}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              {...props}
              style={[
                typography.f16,
                {
                  flex: 1,
                  height: sizes.INPUT_HEIGHT,
                  paddingRight: 10,
                  paddingLeft: 0,
                },

                inputStyle,
              ]}
            />
          </View>
          {time ? time : null}
        </View>
        {button ? button : null}
      </View>
      <Error error={error} textStyle={errorTextStyle} />
    </>
  );
}

export default Input;
