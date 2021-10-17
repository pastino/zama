import React, {useEffect, useState} from 'react';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import NoCheckedSelectBtn from '@/commons/Buttons/NoCheckedSelectBtn';
// styles
import styled from 'styled-components/native';
import useAuthAPI from '@/api/user/useAuthAPI';
import {Text, View} from 'react-native';
import {MIDDLE_GRAY, BLUE_GREEN, WHITE} from '@/styles/colors';
import Button from '@/commons/Buttons/Button';
import {BUTTON_HEIGHT, LOGIN_BUTTON_WIDTH, SCREEN_WIDTH} from '@/styles/sizes';
import {State} from '@/redux/rootReducer';
import {useDispatch, useSelector} from 'react-redux';
import {setCloseUsePurposeServey} from '@/redux/interation/interactionSlice';

const Servey = ({navigation: {navigate}}) => {
  const [serveyList, setServeyList] = useState<any>([]);

  const {getSignUpServeyListAPI, createSignUpServeyAPI} = useAuthAPI();
  const {user} = useSelector((state: State) => state.usersReducer);

  const dispatch = useDispatch();

  const handleGetServeyList = async () => {
    try {
      dispatch(setCloseUsePurposeServey({}));
      const result = await getSignUpServeyListAPI();
      if (result.success) {
        setServeyList(result.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSelectPurpose = (index, check) => {
    const startData = serveyList.slice(0, index);
    const endData = serveyList.slice(Number(index) + 1, serveyList.length);
    const changedData = [
      ...startData,
      {
        ...serveyList[Number(index)],
        check,
      },
      ...endData,
    ];
    setServeyList(changedData);
  };

  const handleGoHome = async () => {
    const checkedList = serveyList.filter(obj => obj.check);
    if (checkedList.length > 0) {
      await createSignUpServeyAPI(
        Number(user?.id),
        checkedList.map(obj => obj.purpose),
      );
    }
    navigate('Home');
  };

  useEffect(() => {
    handleGetServeyList();
  }, []);

  return (
    <Container>
      <HeaderBasic
        previousBtn={true}
        title={'가입완료'}
        goBack={() => navigate('Home')}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 20,

            fontWeight: '700',
          }}>
          zama kids
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 20,
            marginTop: 10,
            fontWeight: '700',
          }}>
          서비스에 오신것을
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginLeft: 20,
            marginTop: 10,
            fontWeight: '700',
          }}>
          환영합니다!
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 20,
            marginTop: 30,
            color: MIDDLE_GRAY,
          }}>
          회원가입이 완료되었습니다.
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 20,
            marginTop: 10,
            color: MIDDLE_GRAY,
          }}>
          더 나은 서비스를 제공할 수 있도록
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 20,
            marginTop: 10,
            color: MIDDLE_GRAY,
          }}>
          사용목적을 알려주시면 감사하겠습니다.
        </Text>

        <Text style={{marginLeft: 20, marginTop: 30, fontWeight: '700'}}>
          서비스 사용 목적
        </Text>
        {serveyList.map((item, index) => (
          <View key={item.id} style={{marginTop: 13, marginLeft: 20}}>
            <NoCheckedSelectBtn
              index={index}
              title={item?.purpose}
              check={item?.check}
              handleCheck={handleSelectPurpose}
            />
          </View>
        ))}
      </View>
      <View
        style={{
          width: SCREEN_WIDTH,
          alignItems: 'center',
        }}>
        <Button
          onPress={handleGoHome}
          style={{
            width: LOGIN_BUTTON_WIDTH,
            height: BUTTON_HEIGHT,
            backgroundColor: BLUE_GREEN,
          }}
          textStyle={{color: WHITE}}
          loadingBlack>
          <Text>홈으로 가기</Text>
        </Button>
      </View>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;

  justify-content: space-between;
`;
export default Servey;
