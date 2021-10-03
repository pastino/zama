import React from 'react';
import {View, SafeAreaView, Text, ScrollView} from 'react-native';
// styles
import * as colors from '@/styles/colors';
import * as sizes from '@/styles//sizes';
import {typography} from '@/styles//typography';
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import ButtonCustom from '../Buttons/ButtonCustom';
import LoginButton from '../Buttons/LoginButton';
import Button from '../Buttons/Button';
// import Button from '../buttons/Button';

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
  removeVerticalMargin?: boolean;
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
  isNoCloseButton,
  contentStyle,
  removeVerticalMargin,
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
          backgroundColor: colors.WHITE,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        style,
      ]}>
      <View
        style={[{padding: sizes.SIDE_PADDING}, contentStyle]}
        onLayout={onLayout}>
        {title ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 30,
            }}>
            <View style={{flex: 1}} />
            <View
              style={{
                flex: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={[typography.f18, typography.medium]}
                numberOfLines={1}>
                {title}
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              {isNoCloseButton ? null : (
                <View
                  style={{
                    padding: 3,
                    flex: 1,
                    alignItems: 'flex-end',
                  }}>
                  <IoniconsIcons
                    name={'close-outline'}
                    size={30}
                    color={'white'}
                  />
                </View>
              )}
            </View>
          </View>
        ) : null}
        {isNoScrollView ? (
          <>{children}</>
        ) : (
          <ScrollView
            style={[
              {
                marginVertical: removeVerticalMargin ? 0 : sizes.SIDE_PADDING,
                paddingHorizontal: 5,
                maxHeight: sizes.SCREEN_HEIGHT * 0.7,
              },
            ]}
            keyboardShouldPersistTaps={'handled'}
            showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {leftButtonText ? (
            <Button
              onPress={onLeftPress}
              style={{
                flex: 1,
                marginRight: 10,
                backgroundColor: colors.WHITE,
                borderColor: colors.TURQUOISE,
                borderWidth: 1,
              }}
              textStyle={{color: colors.FONT}}
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
              style={{flex: 1}}>
              {buttonText}
            </Button>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BottomModalCard;
