import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  children: any;
  close: any;
  isVisible: boolean;
  disabledClose?: boolean;
  avoidKeyboard?: boolean;
  onShow?: any;
  style?: {};
}

const BottomModalContainer = ({
  children,
  disabledClose,
  close,
  isVisible,
  avoidKeyboard = true,
  onShow,
  style,
}: Props) => {
  return (
    <View>
      <Modal
        onShow={onShow}
        isVisible={isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.8}
        onBackdropPress={disabledClose ? undefined : close}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        animationInTiming={300}
        animationOutTiming={300}
        hideModalContentWhileAnimating
        onBackButtonPress={disabledClose ? undefined : close}
        useNativeDriver
        avoidKeyboard={avoidKeyboard}
        style={[
          {
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            margin: 0,
          },
          style,
        ]}>
        {children}
      </Modal>
    </View>
  );
};

export default BottomModalContainer;
