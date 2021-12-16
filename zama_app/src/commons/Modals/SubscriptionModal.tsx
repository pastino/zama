import React, {useEffect, useState} from 'react';
import {Platform, Text, TouchableOpacity, View} from 'react-native';
// Components
import ModalContainer from './Container/ModalContainer';
import HeaderBasic from '../Header/HeaderBasic';
// libs
import * as RNIap from 'react-native-iap';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {
  setRewardModal,
  setSubscriptionModal,
} from '@/redux/interation/interactionSlice';
import {State} from '@/redux/rootReducer';
// styles
import {FULL_SCREEN_HEIGHT, SCREEN_WIDTH} from '@/styles/sizes';
import {PURPLE} from '@/styles/colors';
import Button from '../Buttons/Button';
import useSubscriptionAPI from '@/api/subscription/useSubscriptionAPI';

const SubscriptionModal = ({}) => {
  const dispatch = useDispatch();

  const {openSubscriptionModal} = useSelector(
    (state: State) => state.interactionReducer,
  );

  const {giveSubscription} = useSubscriptionAPI();
  const {isTest} = useSelector((state: State) => state.versionReducer);
  const itemSkus: any = Platform.select({
    ios: ['1_month_irregular'],
    android: ['1_month_irregular'],
  });

  const handleModal = () => {
    dispatch(
      setSubscriptionModal({openSubscriptionModal: !openSubscriptionModal}),
    );
  };

  const openRewardModal = () => {
    handleModal();
    setTimeout(() => {
      dispatch(setRewardModal({openRewardModal: true}));
    }, 800);
  };

  const handlePurchase = async () => {
    try {
      const result: any = await RNIap.requestPurchase(itemSkus[0]);
      if (Platform.OS === 'ios') {
        await RNIap.finishTransaction(result.transactionId);
      } else {
        await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
      }
      //성공
      await giveSubscription();
      handleModal();
    } catch (e) {
      console.log(e);
    }
  };

  const initilizeIAPConnection = async () => {
    try {
      await RNIap.initConnection();
      if (Platform.OS === 'android') {
        await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initilizeIAPConnection();
  }, []);

  return (
    <ModalContainer isVisible={openSubscriptionModal} close={handleModal}>
      <View
        style={{
          backgroundColor: PURPLE,
          width: SCREEN_WIDTH,
          height: FULL_SCREEN_HEIGHT,
        }}>
        <HeaderBasic goBack={handleModal} previousBtn={true} />
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <Text style={{fontSize: 28, lineHeight: 35, fontWeight: '700'}}>
            프리미엄 회원{'\n'}신청하기
          </Text>
          <Text style={{marginTop: 20}}>이용중인 상품이 없습니다.</Text>
          <Button
            onPress={handlePurchase}
            style={{borderRadius: 5, marginTop: 30}}
            textStyle={{fontWeight: '600'}}>
            프리미엄 회원 신청하기 (1개월)
          </Button>
          {!isTest && (
            <TouchableOpacity onPress={openRewardModal}>
              <Text
                style={{
                  marginTop: 20,
                  textAlign: 'right',
                  textDecorationLine: 'underline',
                }}>
                리워드 사용하기
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ModalContainer>
  );
};

export default SubscriptionModal;
