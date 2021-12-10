import React, {FunctionComponent} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
// components
import ModalContainer from './Container/ModalContainer';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {setOpenReportModal} from '@/redux/interation/interactionSlice';
import {State} from '@/redux/rootReducer';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';
import VerticalDivider from '../Divider/VerticalDivider';
import {DIVIDER_BORDER_COLOR} from '@/styles/colors';

const ReportSendModal = ({}) => {
  const CONTAINER_WIDTH = SCREEN_WIDTH * 0.7;
  const dispatch = useDispatch();

  const {openReportModal} = useSelector(
    (state: State) => state.interactionReducer,
  );

  return (
    <ModalContainer
      isVisible={openReportModal}
      close={() => dispatch(setOpenReportModal({openReportModal: false}))}>
      <View
        style={{
          width: CONTAINER_WIDTH,
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
        <VerticalDivider width={CONTAINER_WIDTH} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableWithoutFeedback
            onPress={() =>
              dispatch(setOpenReportModal({openReportModal: false}))
            }>
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
          <TouchableWithoutFeedback onPress={() => console.log(123)}>
            <View
              style={{
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                width: CONTAINER_WIDTH / 2,
                borderLeftWidth: 1,
                borderLeftColor: DIVIDER_BORDER_COLOR,
              }}>
              <Text style={{textAlign: 'center'}}>확인</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ModalContainer>
  );
};

export default ReportSendModal;
