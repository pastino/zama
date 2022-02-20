import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
// Components
import Button from '@/commons/Buttons/Button';
// apis
import {appVersion} from '@/api/useAPI';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {setSubscriptionModal} from '@/redux/interation/interactionSlice';
import {logOut} from '@/redux/user/userSlice';
// styles
import colors from '@/styles/colors';
import {SCREEN_HEIGHT, SIDE_PADDING} from '@/styles/sizes';
import Icon from '@/styles/ui/Icon';

const MyProfile = ({navigation: {navigate}}) => {
  const {user} = useSelector((state: State) => state.usersReducer);
  const dispatch = useDispatch();

  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );
  const isSubscriber = subscriptions.length > 0;

  const getSubscriptionName = key => {
    switch (key) {
      case '1Month':
        return '1개월 권';
      case '3Month':
        return '3개월 권';
      case '6Month':
        return '6개월 권';
      default:
        return '';
    }
  };

  const ITEM_LIST = [
    {
      title: '공지사항 확인하기',
      onPress: () => navigate('Notice'),
    },
    {title: '문의하기', onPress: () => navigate('Contact')},
    {title: '로그아웃', onPress: () => dispatch(logOut())},
  ];

  return (
    <View style={{flex: 1, backgroundColor: colors.DARK_PURPLE}}>
      <View
        style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            paddingTop: 30,
            fontSize: 24,
            fontWeight: '700',
          }}>
          내 프로필
        </Text>
      </View>
      <View
        style={{
          flex: 0.32,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: SCREEN_HEIGHT * 0.2,
            height: SCREEN_HEIGHT * 0.2,
            borderRadius: 80,
            backgroundColor: colors.PURPLE,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon iconName="moon-white" />
        </View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '700',
            color: 'white',
            marginTop: 15,
          }}>
          {user?.name ? `${user?.name}님` : ''}
        </Text>
      </View>
      <View style={{flex: 0.58, marginTop: 20}}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            !isSubscriber
              ? dispatch(setSubscriptionModal({openSubscriptionModal: true}))
              : null
          }>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              position: 'relative',
            }}>
            <Image
              source={require('@/assets/images/premium-back-img.png')}
              style={{
                width: '100%',
                borderRadius: 20,
                height: SCREEN_HEIGHT * 0.1,
              }}
            />
            {isSubscriber ? (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon iconName="diamond-big" width={33} height={33} />
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '700',
                      fontSize: 17,
                      marginLeft: 10,
                    }}>
                    프리미엄 회원
                  </Text>
                  <Text
                    style={{marginLeft: 10, color: 'white', fontWeight: '700'}}>
                    {getSubscriptionName(subscriptions[0]?.name)}
                  </Text>
                </View>
                <View style={{marginTop: 5}}>
                  <Text style={{color: 'white', fontWeight: '600'}}>
                    {moment(subscriptions[0]?.startDate).format('YYYY.MM.DD')} ~{' '}
                    {moment(subscriptions[0]?.endDate).format('YYYY.MM.DD')}
                  </Text>
                </View>
              </View>
            ) : (
              <View
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Icon iconName="diamond-big" width={33} height={33} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    marginLeft: 10,
                  }}>
                  자마 <Text style={{fontWeight: '700'}}>프리미엄 신청</Text>
                  하기
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
        <View style={{flex: 1, paddingHorizontal: SIDE_PADDING}}>
          {ITEM_LIST.map((item, index) => (
            <View key={index} style={{marginTop: 15}}>
              <Button
                onPress={item?.onPress}
                style={{
                  width: '100%',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  alignItems: 'flex-start',
                  paddingHorizontal: 20,
                  borderRadius: 20,
                }}
                textStyle={{textAlign: 'left'}}>
                {item.title}
              </Button>
            </View>
          ))}
        </View>
        <View
          style={{
            flex: 0.18,
            justifyContent: 'flex-end',
            paddingBottom: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            Version {appVersion}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MyProfile;
