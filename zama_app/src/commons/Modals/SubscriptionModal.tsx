import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
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
import {
  FULL_SCREEN_HEIGHT,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  SIDE_PADDING,
} from '@/styles/sizes';
import colors from '@/styles/colors';

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
          backgroundColor: colors.DARK_PURPLE,
          width: SCREEN_WIDTH,
          height: FULL_SCREEN_HEIGHT,
        }}>
        <HeaderBasic goBack={handleModal} previousBtn={true} />
        <View style={{flex: 1, paddingHorizontal: SIDE_PADDING, marginTop: 30}}>
          <View
            style={{
              flex: 0.6,
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('@/assets/images/premium-back-img-big.png')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
            <View style={{position: 'absolute'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 37,
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: SCREEN_HEIGHT * 0.1,
                }}>
                프리미엄 신청
              </Text>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 20,
                    lineHeight: 28,
                    fontWeight: '600',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  더 다양한 콘텐츠를 {`\n`}
                  자유롭게 {`\n`}
                  아이와 함께 편안한 {`\n`}
                  밤을 보내세요! {`\n`}
                </Text>
              </View>
            </View>
          </View>
          <View style={{flex: 0.4}}>
            <Text
              style={{
                marginTop: 15,
                marginBottom: 20,
                color: 'white',
                textAlign: 'center',
              }}>
              1개월 구독료가 일시 청구됩니다.
            </Text>
            <TouchableOpacity activeOpacity={0.9} onPress={handlePurchase}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                <Image
                  source={require('@/assets/images/premium-back-img.png')}
                  style={{
                    width: '100%',
                    height: 80,
                    borderRadius: 40,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 28,
                      marginLeft: 10,
                      fontWeight: '700',
                    }}>
                    1개월 구독
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            {!isTest && (
              <TouchableOpacity onPress={openRewardModal}>
                <Text
                  style={{
                    marginTop: 20,
                    textAlign: 'right',
                    textDecorationLine: 'underline',
                    color: 'white',
                    fontWeight: '700',
                  }}>
                  리워드 사용하기
                </Text>
              </TouchableOpacity>
            )}
          </View>
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
