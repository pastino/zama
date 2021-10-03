import React from 'react';
import {SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';

interface Props {
  children: any;
  close: any;
  isVisible: boolean;
  style?: {};
  backdropOpacity?: number;
}

const ModalContainer = ({
  children,
  close,
  isVisible,
  style,
  backdropOpacity = 0.6,
}: Props) => {
  return (
    <SafeAreaView>
      <Modal
        isVisible={isVisible}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        backdropOpacity={backdropOpacity}
        onBackdropPress={close}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        animationInTiming={300}
        animationOutTiming={300}
        hideModalContentWhileAnimating
        onBackButtonPress={close}
        useNativeDriver
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
          },
          style,
        ]}>
        {children}
      </Modal>
    </SafeAreaView>
  );
};

export default ModalContainer;
