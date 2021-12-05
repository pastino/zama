import React, {useEffect, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
// libs
import LinearGradient from 'react-native-linear-gradient';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import useNoticeAPI from '@/api/etc/useNoticeAPI';
import {MIDDLE_GRAY, RIGTH_GRAY_MORE} from '@/styles/colors';

const Notice = ({navigation}) => {
  const {navigate, goBack, openDrawer} = navigation;
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
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 28,
            lineHeight: 35,
            fontWeight: '700',
            paddingHorizontal: 20,
            marginTop: 30,
          }}>
          공지사항
        </Text>
        <View
          style={{
            flex: 0.8,
            marginTop: 20,
          }}>
          {notices?.map((notice, index) => (
            <TouchableWithoutFeedback
              key={notice?.id}
              onPress={() => navigate('NoticeDetail', {notice})}>
              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  borderTopWidth: index === 0 ? 1 : 0,
                  borderTopColor: RIGTH_GRAY_MORE,
                  borderBottomColor: RIGTH_GRAY_MORE,
                  borderBottomWidth: 1,
                }}>
                <View style={{paddingHorizontal: 20}}>
                  <Text style={{fontWeight: '500', color: MIDDLE_GRAY}}>
                    {notice?.title}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

export default Notice;
