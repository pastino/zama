import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
// apis
import useSubscriptionAPI from '@/api/subscription/useSubscriptionAPI';
// styles
import {FULL_SCREEN_HEIGHT, SCREEN_HEIGHT, SCREEN_WIDTH} from '@/styles/sizes';
import colors from '@/styles/colors';
import Button from '../Buttons/Button';

const SubscriptionModal = ({}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {openSubscriptionModal} = useSelector(
    (state: State) => state.interactionReducer,
  );
  const [product, setProduct] = useState<any>();
  const {giveSubscription} = useSubscriptionAPI();
  const {isTest} = useSelector((state: State) => state.versionReducer);

  const itemSkus: any = Platform.select({
    ios: ['1_month_subscription'],
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

  const iosPurchaseValidate = async product => {
    try {
      const receiptBody = {
        'receipt-data': product.transactionReceipt,
      };
      const result: any = await RNIap.validateReceiptIos(receiptBody, true);
      if (result?.status === 0) {
        await giveSubscription();
      } else {
        Alert.alert('인앱결제에 실패하였습니다.');
      }
    } catch (err: any) {
      console.warn(err.code, err.message);
      Alert.alert(err.message);
    }
  };

  const handlePurchase = async () => {
    try {
      setIsLoading(true);
      const result: any = await RNIap.requestPurchase(itemSkus[0]);
      await RNIap.finishTransaction(result, true);
      if (Platform.OS === 'android') {
        await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
      }
      if (Platform.OS === 'ios') {
        iosPurchaseValidate(result);
      } else {
        await giveSubscription();
      }
      handleModal();
    } catch (err: any) {
      console.warn(err.code, err.message);
      if (err.code !== 'E_USER_CANCELLED') {
        Alert.alert(err.message);
      }
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const initilizeIAPConnection = async () => {
    try {
      await RNIap.initConnection();
      if (Platform.OS === 'android') {
        await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
      }
      const product = await RNIap.getProducts(itemSkus);
      setProduct(product);
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
          backgroundColor: colors.PURPLE,
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
      {isLoading && (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <ActivityIndicator size={30} />
        </View>
      )}
    </ModalContainer>
  );
};

export default SubscriptionModal;
