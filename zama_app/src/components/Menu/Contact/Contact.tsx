import React, {useState} from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
// commons
import NoticeModal from '@/commons/Modals/NoticeModal';
import HeaderBasic from '@/commons/Header/HeaderBasic';
import Button from '@/commons/Buttons/Button';
// apis
import useContactAPI from '@/api/etc/useContactAPI';
// libs
import LinearGradient from 'react-native-linear-gradient';
// commons
import {RIGTH_GRAY} from '@/styles/colors';

const Contact = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [isCompleteModal, setIsCompleteModal] = useState(false);
  const {goBack, openDrawer} = navigation;
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
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1, paddingHorizontal: 20, marginTop: 30}}>
          <Text style={{fontSize: 28, lineHeight: 35, fontWeight: '700'}}>
            1:1 문의하기
          </Text>
          <View
            style={{
              flex: 0.8,
              justifyContent: 'space-between',
            }}>
            <View style={{marginTop: 30}}>
              <Text style={{marginBottom: 10, fontSize: 15}}>이메일</Text>
              <TextInput
                value={email}
                onChangeText={emailOnChange}
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: RIGTH_GRAY,
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                }}
              />
              <Text style={{marginTop: 30, marginBottom: 10, fontSize: 15}}>
                문의내용
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
                  borderColor: RIGTH_GRAY,
                  padding: 10,
                  backgroundColor: 'white',
                }}
              />
            </View>
            <Button style={{borderRadius: 5}} onPress={handlePostContact}>
              문의하기
            </Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <NoticeModal
        visible={isCompleteModal}
        setVisible={setIsCompleteModal}
        onPressConfirm={handleGoback}
        text={'문의가 완료되었습니다.'}
      />
    </LinearGradient>
  );
};

export default Contact;
