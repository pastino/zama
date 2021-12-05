import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
// libs
import LinearGradient from 'react-native-linear-gradient';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import {handleGetImageData} from '@/utils/tools';
import {SCREEN_WIDTH} from '@/styles/sizes';
import {ScrollView} from 'react-native-gesture-handler';

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
        }}
        style={{borderBottomWidth: 0}}
        textStyle={{color: 'black'}}
        title={notice?.title}
      />
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: 10}}>
          <Text
            style={{paddingHorizontal: 20, fontSize: 17, fontWeight: '700'}}>
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
          <Text style={{paddingHorizontal: 20, marginTop: 20}}>
            {notice?.contents}
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default NoticeDetail;
