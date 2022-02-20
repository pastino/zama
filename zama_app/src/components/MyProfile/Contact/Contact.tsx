import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
// commons
import NoticeModal from '@/commons/Modals/NoticeModal';
import HeaderBasic from '@/commons/Header/HeaderBasic';
import Button from '@/commons/Buttons/Button';
import KeyboardAvoidingView from '@/commons/KeyboardAvoidingView';
// apis
import useContactAPI from '@/api/etc/useContactAPI';
// redux
import {useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
// styles
import colors from '@/styles/colors';
import {SIDE_PADDING} from '@/styles/sizes';

const Contact = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isCompleteModal, setIsCompleteModal] = useState(false);
  const {goBack} = navigation;

  const {playList} = useSelector((state: State) => state.playerReducer);

  const {postContact} = useContactAPI();

  const emailOnChange = text => {
    setEmail(text);
  };

  const contentOnChange = text => {
    setContent(text);
  };

  const handlePostContact = async () => {
    const {success} = await postContact(email, content);
    if (success) {
      setIsCompleteModal(true);
    }
  };

  const handleGoback = () => {
    setIsCompleteModal(false);
    goBack();
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.DARK_PURPLE,
      }}>
      <HeaderBasic
        previousBtn={true}
        goBack={goBack}
        textStyle={{color: 'white'}}
        title="문의하기"
      />
      <KeyboardAvoidingView
        style={{
          backgroundColor: colors.DARK_PURPLE,
          marginBottom: playList?.length > 0 ? 60 : 20,
        }}
        bottomComponent={
          <Button
            style={{
              borderRadius: 20,
              backgroundColor: colors.PURPLE,
              marginHorizontal: SIDE_PADDING,
            }}
            onPress={handlePostContact}>
            문의하기
          </Button>
        }>
        <View style={{paddingHorizontal: 20, marginTop: 30}}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 15,
              color: 'white',
              fontWeight: '700',
            }}>
            이메일 주소 <Text style={{color: colors.RED}}>*</Text>
          </Text>
          <TextInput
            value={email}
            onChangeText={emailOnChange}
            style={{
              height: 50,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: colors.RIGTH_GRAY,
              paddingHorizontal: 10,
              backgroundColor: 'white',
            }}
          />
          <Text
            style={{
              marginTop: 30,
              color: 'white',
              marginBottom: 10,
              fontSize: 15,
              fontWeight: '700',
            }}>
            문의내용 <Text style={{color: colors.RED}}>*</Text>
          </Text>
          <TextInput
            value={content}
            onChangeText={contentOnChange}
            multiline={true}
            numberOfLines={100}
            style={{
              height: 200,
              textAlignVertical: 'top',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: colors.RIGTH_GRAY,
              padding: 10,
              backgroundColor: 'white',
            }}
          />
        </View>
      </KeyboardAvoidingView>
      <NoticeModal
        visible={isCompleteModal}
        setVisible={setIsCompleteModal}
        onPressConfirm={handleGoback}
        text={'문의가 완료되었습니다.'}
      />
    </SafeAreaView>
  );
};

export default Contact;
