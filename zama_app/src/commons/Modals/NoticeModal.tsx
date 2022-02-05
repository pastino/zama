import React, {FunctionComponent} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
// components
import ModalContainer from './Container/ModalContainer';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';
import VerticalDivider from '../Divider/VerticalDivider';
import colors from '@/styles/colors';

interface Props {
  visible: boolean;
  setVisible: (visible) => void;
  text: string;
  onPressConfirm: () => void;
  isCancel?: boolean;
}

const NoticeModal: FunctionComponent<Props> = ({
  visible,
  setVisible,
  text,
  isCancel = false,
  onPressConfirm,
}) => {
  const CONTAINER_WIDTH = SCREEN_WIDTH * 0.7;
  return (
    <ModalContainer isVisible={visible} close={() => setVisible(!visible)}>
      <View
        style={{
          width: CONTAINER_WIDTH,
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{text}</Text>
        </View>
        <VerticalDivider width={CONTAINER_WIDTH} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {isCancel && (
            <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
              <View
                style={{
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: CONTAINER_WIDTH / 2,
                }}>
                <Text style={{textAlign: 'center'}}>취소</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
          <TouchableWithoutFeedback onPress={onPressConfirm}>
            <View
              style={{
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                width: isCancel ? CONTAINER_WIDTH / 2 : CONTAINER_WIDTH,
                borderLeftWidth: isCancel ? 1 : 0,
                borderLeftColor: colors.DIVIDER_BORDER_COLOR,
              }}>
              <Text style={{textAlign: 'center'}}>확인</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ModalContainer>
  );
};

export default NoticeModal;
