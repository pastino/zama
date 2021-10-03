import React from 'react';
import {View, Text} from 'react-native';
// components
import TouchableOpacity from '../TouchableOpacity';
import Loading from '../Lotties/Loading';
// styles
import * as colors from '@/styles/colors';
import * as sizes from '@/styles//sizes';
import * as mixins from '@/styles//mixins';
import {typography} from '@/styles/typography';

interface Props {
  children: any;
  style?: {};
  loading?: boolean;
  textStyle?: {};
  styleDisabled?: boolean;
  disabled?: boolean;
  isCustomChildren?: boolean;
  loadingSize?: number;
  loadingBlack?: boolean;
  [key: string]: any;
}

function Button({
  children,
  loading,
  style,
  textStyle,
  styleDisabled,
  disabled,
  isCustomChildren,
  loadingSize,
  loadingBlack = false,
  ...props
}: Props) {
  return (
    <TouchableOpacity
      {...props}
      duration={300}
      disabled={disabled}
      activeOpacity={0.9}
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:
            styleDisabled || disabled ? colors.RIGTH_GRAY : colors.TURQUOISE,
          height: sizes.BUTTON_HEIGHT,
          paddingHorizontal: 15,
          borderRadius: 50,
          position: 'relative',
        },
        style,
      ]}>
      {isCustomChildren ? (
        <>{children}</>
      ) : (
        <Text
          style={[
            typography.f16,
            typography.medium,
            {
              color: colors.WHITE,
              opacity: loading ? 0 : 1,
            },
            textStyle,
          ]}>
          {children}
        </Text>
      )}
      {loading ? (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Loading white={!loadingBlack} size={loadingSize} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

export default Button;
