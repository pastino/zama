import React, {useEffect} from 'react';
import {Platform, Text, View, TouchableOpacity, Alert} from 'react-native';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
// libs
import LinearGradient from 'react-native-linear-gradient';
import * as RNIap from 'react-native-iap';
// styles
import Button from '@/commons/Buttons/Button';
import useSubscriptionAPI from '@/api/subscription/useSubscriptionAPI';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {setLoading} from '@/redux/interation/interactionSlice';

const Subscription = ({navigation: {goBack, openDrawer, navigate}, route}) => {
  const {giveSubscription} = useSubscriptionAPI();
  const dispatch = useDispatch();
  const {isTest} = useSelector((state: State) => state.versionReducer);
  const itemSkus: any = Platform.select({
    ios: ['1_month_subscription'],
    android: ['1_month_irregular'],
  });

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
      dispatch(setLoading({isLoading: true}));

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
      goBack();
    } catch (err: any) {
      console.warn(err.code, err.message);
      if (err.code !== 'E_USER_CANCELLED') {
        Alert.alert(err.message);
      }
      dispatch(setLoading({isLoading: false}));
    } finally {
      dispatch(setLoading({isLoading: false}));
    }
  };

  const initilizeIAPConnection = async () => {
    try {
      await RNIap.initConnection();
      if (Platform.OS === 'android') {
        await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
      }
      await RNIap.getProducts(itemSkus);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    initilizeIAPConnection();
  }, []);

  const isOpenDrawerWhenBack = route?.params?.isOpenDrawerWhenBack;

  return (
    <LinearGradient
      colors={[
        'rgba(194,173,236,1)',
        'rgba(194,173,236,0.7)',
        'rgba(194,173,236,0.5)',
        'rgba(194,173,236,0.2)',
      ]}
      style={{
        flex: 1,
      }}>
      <HeaderBasic
        previousBtn={true}
        goBack={() => {
          goBack();
          if (isOpenDrawerWhenBack) {
            openDrawer();
          }
        }}
        style={{borderBottomWidth: 0}}
        textStyle={{color: 'black'}}
      />
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
          <TouchableOpacity onPress={() => navigate('Voucher')}>
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
    </LinearGradient>
  );
};

export default Subscription;
