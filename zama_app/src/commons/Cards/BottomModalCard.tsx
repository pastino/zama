import React from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';

import {SCREEN_HEIGHT} from '@/styles/sizes';
import Button from '../Buttons/Button';

interface Props {
  close?: any;
  children: any;
  onPress?: any;
  title?: string;
  buttonText?: string;
  buttonDisabled?: boolean;
  leftButtonText?: string;
  onLeftPress?: any;
  style?: {};
  leftLoading?: boolean;
  loading?: boolean;
  onLayout?: any;
  isNoScrollView?: boolean;
  isNoCloseAfterPress?: boolean;
  isNoCloseButton?: boolean;
  contentStyle?: {};
}

const BottomModalCard = ({
  close,
  isNoCloseAfterPress,
  onPress,
  children,
  title,
  buttonText,
  buttonDisabled,
  leftButtonText,
  onLeftPress,
  loading,
  leftLoading,
  style,
  onLayout,
  isNoScrollView,
}: Props) => {
  function handlePress(value) {
    onPress(value);
    if (!isNoCloseAfterPress) {
      close();
    }
  }

  return (
    <SafeAreaView
      style={[
        {
          width: '100%',
          backgroundColor: '#29292f',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        style,
      ]}>
      <View
        style={{
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 20,
          paddingBottom: 20,
        }}
        onLayout={onLayout}>
        {title ? (
          <View
            style={{
              height: 30,
            }}>
            <View style={{flex: 1}} />
            <View style={{}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: 'white',
                }}
                numberOfLines={1}>
                {title}
              </Text>
            </View>
          </View>
        ) : null}
        {isNoScrollView ? (
          <>{children}</>
        ) : (
          <ScrollView
            style={{
              marginVertical: 20,
              maxHeight: SCREEN_HEIGHT * 0.7,
            }}
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        )}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {leftButtonText ? (
            <Button
              onPress={onLeftPress}
              style={{
                flex: 0.5,
                marginRight: 10,
                backgroundColor: '#3b3b42',
                borderRadius: 3,
              }}
              loadingBlack
              loading={leftLoading}>
              {leftButtonText}
            </Button>
          ) : null}
          {buttonText ? (
            <Button
              onPress={handlePress}
              disabled={buttonDisabled}
              loading={loading}
              style={{flex: 1, borderRadius: 3}}>
              {buttonText}
            </Button>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BottomModalCard;
