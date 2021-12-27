import React from 'react';
import {Linking, Platform, View, Text} from 'react-native';
// styles
import * as colors from '@styles/colors';
import BottomModalCard from './BottomModalCard';

interface Props {
  updateInfo: {
    version: string;
    updateContents: string[];
  };
  cancelSelectUpdate: any;
}

const UpdateSelectModal = ({updateInfo, cancelSelectUpdate}: Props) => {
  async function handlePress() {
    const url =
      Platform.OS === 'ios'
        ? `https://apps.apple.com/kr/app/zama-sleep/id1599709356`
        : `https://play.google.com/store/apps/details?id=com.zama_app`;
    Linking.openURL(url);
  }

  function handleClose() {
    cancelSelectUpdate();
  }

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 0,
        backgroundColor: colors.BLUE_GREEN,
        zIndex: 99,
      }}>
      <BottomModalCard
        close={() => {}}
        buttonText="지금 업데이트"
        onPress={handlePress}
        leftButtonText="닫기"
        title={`v${updateInfo.version} 업데이트 안내`}
        isNoCloseButton
        onLeftPress={handleClose}>
        <Text
          style={{
            lineHeight: 24,
            marginBottom: 16,
            fontSize: 16,
            color: '#88888c',
            fontWeight: '700',
          }}>
          zama가 업데이트 되었어요!{'\n'}
          업데이트 후 더 쾌적한 zama를 만나보세요.
        </Text>
        {updateInfo?.updateContents?.length > 0 ? (
          <View
            style={{
              backgroundColor: '#2d2e35',
              borderRadius: 10,
              padding: 20,
              marginBottom: 16,
            }}>
            {updateInfo.updateContents?.map((content, i) => (
              <View
                key={`${content}${i}`}
                style={{
                  flexDirection: 'row',
                  marginBottom:
                    updateInfo.updateContents?.length - 1 === i ? 0 : 4,
                }}>
                <View
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: 2,
                    marginRight: 4,
                    flexDirection: 'row',
                  }}
                />
                <Text style={{fontSize: 14, color: 'white', fontWeight: '700'}}>
                  - &nbsp;
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: 'white',
                    marginRight: 25,
                    fontWeight: '700',
                  }}>
                  {content}
                </Text>
              </View>
            ))}
          </View>
        ) : null}
      </BottomModalCard>
    </View>
  );
};

export default UpdateSelectModal;
