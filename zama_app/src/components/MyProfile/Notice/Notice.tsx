import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import useNoticeAPI from '@/api/etc/useNoticeAPI';
// styles
import colors from '@/styles/colors';
import {SIDE_PADDING} from '@/styles/sizes';

const Notice = ({navigation}) => {
  const {navigate, goBack} = navigation;
  const [notices, setNotices] = useState<any>([]);
  const {getNotices} = useNoticeAPI();

  const handleGetNotices = async () => {
    const {success, data} = await getNotices();
    if (success) {
      setNotices(data);
    }
  };

  useEffect(() => {
    handleGetNotices();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.DARK_PURPLE}}>
      <HeaderBasic
        previousBtn={true}
        goBack={goBack}
        title={'공지사항'}
        textStyle={{color: 'white'}}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0.8,
            marginTop: 20,
            paddingHorizontal: SIDE_PADDING,
          }}>
          {notices?.map((notice, index) => (
            <TouchableWithoutFeedback
              key={notice?.id}
              onPress={() => navigate('NoticeDetail', {notice})}>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 10,
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                }}>
                <Text style={{fontWeight: '500', color: 'white', fontSize: 16}}>
                  {notice?.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notice;
