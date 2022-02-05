import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import NoCheckedSelectBtn from '@/commons/Buttons/NoCheckedSelectBtn';
// redux
import {State} from '@/redux/rootReducer';
import {useDispatch, useSelector} from 'react-redux';
import {setCloseUsePurposeServey} from '@/redux/interation/interactionSlice';
// styles
import useAuthAPI from '@/api/user/useAuthAPI';
import colors from '@/styles/colors';
import Button from '@/commons/Buttons/Button';
import {
  BUTTON_HEIGHT,
  LOGIN_BUTTON_WIDTH,
  SCREEN_WIDTH,
  SIDE_PADDING,
} from '@/styles/sizes';
import Icon from '@/styles/ui/Icon';

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
    <SafeAreaView style={{flex: 1, backgroundColor: colors.DARK_PURPLE}}>
      <HeaderBasic
        previousBtn={true}
        title={'어떤 목적으로 오셨나요?'}
        goBack={() => navigate('Home')}
      />

      <ScrollView style={{paddingHorizontal: SIDE_PADDING}}>
        <Text style={{color: 'white'}}>자마에 오신것을 환영해요!🤗</Text>
        <View style={{marginTop: 70}}>
          {serveyList.map((item, index) => (
            <View key={item.id} style={{paddingBottom: 10}}>
              <NoCheckedSelectBtn
                index={index}
                title={item?.purpose}
                icon={<Icon iconName="baby" width={30} height={30} />}
                check={item?.check}
                handleCheck={handleSelectPurpose}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View
        style={{
          width: SCREEN_WIDTH,
          alignItems: 'center',
          marginBottom: 20,
          position: 'absolute',
          bottom: 10,
        }}>
        <Button
          onPress={handleGoHome}
          style={{
            width: LOGIN_BUTTON_WIDTH,
            height: BUTTON_HEIGHT,
            backgroundColor: colors.PURPLE,
          }}
          textStyle={{color: colors.WHITE}}
          loadingBlack>
          <Text>홈으로 가기</Text>
        </Button>
      </View>
      <SafeAreaView />
    </SafeAreaView>
  );
};

export default Servey;
