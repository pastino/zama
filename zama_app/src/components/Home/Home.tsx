import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
//redux
import {useDispatch} from 'react-redux';
import {logOut} from '@/redux/user/userSlice';
import {setOpenUsePurposeServey} from '@/redux/interation/interactionSlice';

const Home = () => {
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(logOut());
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', marginTop: 100}}>
      <TouchableWithoutFeedback onPress={logoutHandle}>
        <Text>LogOut</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Home;
