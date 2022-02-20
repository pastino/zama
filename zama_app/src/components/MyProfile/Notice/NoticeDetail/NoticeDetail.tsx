import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// libs
import LinearGradient from 'react-native-linear-gradient';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import {handleGetImageData} from '@/utils/tools';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';
import colors from '@/styles/colors';

const NoticeDetail = ({navigation, route}) => {
  const {goBack, openDrawer} = navigation;
  const notice = route?.params.notice;
  const [detailImageInfo, setDetailImageInfo] = useState({
    uri: '',
    width: 0,
    height: 0,
  });

  const handleCalImageSize = async () => {
    const detailImageInfo = await handleGetImageData(
      notice?.imageUrl,
      SCREEN_WIDTH,
    );
    setDetailImageInfo(detailImageInfo);
  };

  useEffect(() => {
    if (notice?.imageUrl) {
      handleCalImageSize();
    }
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.DARK_PURPLE,
      }}>
      <HeaderBasic
        previousBtn={true}
        goBack={() => {
          goBack();
        }}
        textStyle={{color: 'white'}}
        title={'공지사항'}
      />
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              paddingHorizontal: 20,
              fontSize: 17,
              fontWeight: '700',
              color: 'white',
            }}>
            {notice?.title}
          </Text>
          {detailImageInfo?.uri ? (
            <Image
              source={{uri: detailImageInfo?.uri}}
              style={{
                width: detailImageInfo?.width,
                height: detailImageInfo?.height,
                marginTop: 20,
              }}
            />
          ) : null}
          <Text style={{paddingHorizontal: 20, marginTop: 20, color: 'white'}}>
            {notice?.contents}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoticeDetail;
