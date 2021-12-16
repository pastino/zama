import React from 'react';
import {Text, View} from 'react-native';
// Components
import ModalContainer from './Container/ModalContainer';
import HeaderBasic from '../Header/HeaderBasic';
import VoucherInput from '../Input/VoucherInput';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {setRewardModal} from '@/redux/interation/interactionSlice';
import {State} from '@/redux/rootReducer';
// styles
import {FULL_SCREEN_HEIGHT, SCREEN_WIDTH} from '@/styles/sizes';
import {PURPLE} from '@/styles/colors';

const RewardModal = ({}) => {
  const dispatch = useDispatch();

  const {openRewardModal} = useSelector(
    (state: State) => state.interactionReducer,
  );

  const handleModal = () => {
    dispatch(setRewardModal({openRewardModal: !openRewardModal}));
  };

  return (
    <ModalContainer isVisible={openRewardModal} close={handleModal}>
      <View
        style={{
          backgroundColor: PURPLE,
          width: SCREEN_WIDTH,
          height: FULL_SCREEN_HEIGHT,
        }}>
        <HeaderBasic goBack={handleModal} previousBtn={true} />
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <Text style={{fontSize: 28, lineHeight: 35, fontWeight: '700'}}>
            리워드{'\n'}사용하기
          </Text>
          <VoucherInput goBack={handleModal} />
        </View>
      </View>
    </ModalContainer>
  );
};

export default RewardModal;
