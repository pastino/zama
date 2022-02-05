import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import Button from '@/commons/Buttons/Button';
// libs
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import colors from '@/styles/colors';

const MenuList = ({navigation, title, routeName}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate(routeName)}>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: 'black',
          paddingVertical: 20,
        }}>
        <Text style={{color: 'black', fontWeight: '700', fontSize: 17}}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const DrawerContent = ({navigation}) => {
  const {closeDrawer} = navigation;
  const {user} = useSelector((state: State) => state.usersReducer);
  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );
  const listArr = [
    {title: '내 계정', routeName: 'MyAccount'},
    {title: '공지사항', routeName: 'Notice'},
    {title: '1:1 문의하기', routeName: 'Contact'},
    {title: '앱 정보', routeName: 'Info'},
  ];

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
        goBack={closeDrawer}
        style={{borderBottomWidth: 0}}
        textStyle={{color: 'black'}}
      />
      <View style={{paddingHorizontal: 20, marginTop: 10}}>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            fontSize: 27,
            lineHeight: 35,
            marginBottom: 30,
          }}>
          {user?.name ? `${user?.name}님,${'\n'}환영합니다!` : '환영합니다!'}
        </Text>
        {subscriptions?.length === 0 ? (
          <Button
            onPress={() =>
              navigation.navigate('Subscription', {isOpenDrawerWhenBack: true})
            }
            style={{
              borderRadius: 5,
              backgroundColor: colors.DARK_PURPLE,
              height: 45,
              marginBottom: 30,
            }}
            textStyle={{fontSize: 14, fontWeight: '700'}}>
            프리미엄 회원 신청하기
          </Button>
        ) : (
          <View
            style={{
              borderRadius: 5,
              backgroundColor: colors.DARK_PURPLE,
              marginBottom: 30,
              justifyContent: 'center',
              paddingHorizontal: 20,
              paddingVertical: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'white', fontWeight: '700', fontSize: 17}}>
                프리미엄 회원
              </Text>
              <Text style={{marginLeft: 10, color: 'white', fontWeight: '700'}}>
                ({subscriptions[0]?.name === '6Month' ? '6개월' : null}권)
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: '700'}}>사용기간:</Text>
              <Text style={{color: 'white', fontWeight: '700', marginLeft: 10}}>
                {moment(subscriptions[0]?.startDate).format('YYYY.MM.DD')} ~{' '}
                {moment(subscriptions[0]?.endDate).format('YYYY.MM.DD')}
              </Text>
            </View>
          </View>
        )}
        {listArr.map(({title, routeName}, index) => (
          <View key={index}>
            <MenuList
              navigation={navigation}
              title={title}
              routeName={routeName}
            />
          </View>
        ))}
      </View>
    </LinearGradient>
  );
};

export default DrawerContent;
