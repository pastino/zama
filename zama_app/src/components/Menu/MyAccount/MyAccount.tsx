import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import Button from '@/commons/Buttons/Button';
import VerticalDivider from '@/commons/Divider/VerticalDivider';
// libs
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {logOut} from '@/redux/user/userSlice';
// styles
import {DARK_PURPLE, MIDDLE_GRAY} from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';

const MyAccount = ({navigation}) => {
  const {goBack, openDrawer} = navigation;
  const {user} = useSelector((state: State) => state.usersReducer);
  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );
  const dispatch = useDispatch();

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
          openDrawer();
        }}
        style={{borderBottomWidth: 0}}
        textStyle={{color: 'black'}}
      />
      <View style={{flex: 1, paddingHorizontal: 20, marginTop: 30}}>
        <Text style={{fontSize: 28, lineHeight: 35, fontWeight: '700'}}>
          내 계정
        </Text>
        <View
          style={{
            flex: 0.8,
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 40}}>
            {subscriptions?.length === 0 ? (
              <View>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  구독중인 이용권이 없습니다.
                </Text>
                <Button
                  onPress={() => navigation.navigate('Voucher')}
                  style={{
                    borderRadius: 5,
                    backgroundColor: DARK_PURPLE,
                    height: 45,
                    marginTop: 20,
                  }}
                  textStyle={{fontSize: 14, fontWeight: '700'}}>
                  리워드 구독권 사용하기
                </Button>
                <Text style={{marginTop: 7, fontSize: 13, color: MIDDLE_GRAY}}>
                  현재는 펀딩을 통해 제공받은 이용권만 사용가능합니다.
                </Text>
              </View>
            ) : (
              <View
                style={{
                  borderRadius: 5,
                  backgroundColor: DARK_PURPLE,
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{color: 'white', fontWeight: '700', fontSize: 17}}>
                    프리미엄 회원
                  </Text>
                  <Text
                    style={{marginLeft: 10, color: 'white', fontWeight: '700'}}>
                    ({subscriptions[0]?.name === '6Month' ? '6개월' : null}권)
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: '700'}}>
                    사용기간:
                  </Text>
                  <Text
                    style={{color: 'white', fontWeight: '700', marginLeft: 10}}>
                    {moment(subscriptions[0]?.startDate).format('YYYY.MM.DD')} ~{' '}
                    {moment(subscriptions[0]?.endDate).format('YYYY.MM.DD')}
                  </Text>
                </View>
              </View>
            )}
            <VerticalDivider
              width={SCREEN_WIDTH - 40}
              style={{marginVertical: 30, backgroundColor: 'black'}}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{flex: 0.4, fontWeight: '700', fontSize: 16}}>
                이름
              </Text>
              <Text style={{flex: 0.5, fontSize: 16}}>{user?.name}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{flex: 0.4, fontWeight: '700', fontSize: 16}}>
                가입방법
              </Text>
              <Text style={{flex: 0.5, fontSize: 16}}>
                {user?.loginMethod === 'KAKAO' ? '카카오톡' : '이메일'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={{flex: 0.4, fontWeight: '700', fontSize: 16}}>
                이메일 주소
              </Text>
              <Text style={{flex: 0.5, fontSize: 16}}>{user?.email}</Text>
            </View>
          </View>
          <TouchableWithoutFeedback onPress={() => dispatch(logOut())}>
            <View
              style={{
                alignItems: 'flex-end',
                marginBottom: 70,
              }}>
              <Text style={{fontSize: 15}}>로그아웃</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </LinearGradient>
  );
};

export default MyAccount;
