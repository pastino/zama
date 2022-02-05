import colors from '@/styles/colors';
import {SCREEN_WIDTH} from '@/styles/sizes';
import Icon from '@/styles/ui/Icon';
import React from 'react';
import {Text, View} from 'react-native';

const HomeBanner = () => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: colors.RIGHT_PURPLE,
        height: SCREEN_WIDTH / 4.9,
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={{color: colors.MIDDLE_PURPLE, fontSize: 13}}>
          더 많은 콘텐츠를 들을 수 있어요
        </Text>
        <Text
          style={{
            color: colors.PURPLE,
            fontWeight: '500',
            fontSize: 17,
            marginTop: 5,
          }}>
          지금 <Text style={{fontWeight: '900'}}>프리미엄</Text> 신청해보세요!
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'flex-start', marginRight: 3}}>
          <Icon iconName="diamond-small" width={13} height={13} />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Icon iconName="diamond-big" width={40} height={40} />
        </View>
        <View style={{justifyContent: 'flex-end', marginLeft: 3}}>
          <Icon iconName="diamond-small" width={13} height={13} />
        </View>
      </View>
    </View>
  );
};

export default HomeBanner;
