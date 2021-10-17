import React from 'react';
import {View} from 'react-native';
// commons
import AudioCard from '@/commons/Cards/AudioCard';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';

const TabView = ({data}) => {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: SCREEN_WIDTH,
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        marginVertical: 20,
      }}>
      {data.map(item => (
        <View key={item.id} style={{paddingTop: 10}}>
          <AudioCard data={item} size={'big'} />
        </View>
      ))}
    </View>
  );
};

export default TabView;
