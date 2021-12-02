import React from 'react';
import {Text, View} from 'react-native';
// libs
import LinearGradient from 'react-native-linear-gradient';
// commons
import HeaderBasic from '@/commons/Header/HeaderBasic';
import {appVersion} from '@/api/useAPI';

const Info = ({navigation}) => {
  const {goBack, openDrawer} = navigation;
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
      <View style={{flex: 1, paddingHorizontal: 20, marginTop: 30}}>
        <Text style={{fontSize: 28, lineHeight: 35, fontWeight: '700'}}>
          앱 정보
        </Text>
        <View
          style={{
            flex: 0.8,
            justifyContent: 'space-between',
          }}>
          <View style={{marginTop: 30, flexDirection: 'row'}}>
            <Text style={{fontWeight: '700', fontSize: 17}}>앱버전</Text>
            <Text style={{marginLeft: 20}}>v{appVersion}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Info;
