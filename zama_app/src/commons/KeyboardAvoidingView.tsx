import React from 'react';
import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

interface Props {
  children?: any;
  bottomComponent?: any;
  isNoScrollView?: boolean;
  scrollProps?: any;
  behavior?: 'padding' | 'height' | 'position' | undefined;
  keyboardVerticalOffset?: number;
  style?: {};
  [key: string]: any;
}

function KeyboardAvoidingViewComponent({
  children,
  isNoScrollView,
  bottomComponent,
  scrollProps,
  behavior = 'padding',
  keyboardVerticalOffset = 0,
  style,
}: Props) {
  return (
    <KeyboardAvoidingView
      style={[{flex: 1}, style]}
      behavior={behavior}
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      {isNoScrollView ? (
        <>{children}</>
      ) : (
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          {...scrollProps}>
          {children}
        </ScrollView>
      )}
      {bottomComponent ? bottomComponent : null}
    </KeyboardAvoidingView>
  );
}

export default KeyboardAvoidingViewComponent;
