import colors from '@/styles/colors';
import LikeBtn from '@/styles/ui/button/LikeBtn';
import Icon from '@/styles/ui/Icon';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

interface Props {
  currentAudio?: {
    id: number;
    title: string;
    duration: number;
    artwork: string;
    url: string;
    color: string;
    artist: string;
    division: string;
  };
  title: string;
  color: string;
  artwork: string;
  division: string;
  isWaiting?: boolean;
  drag: any;
}

const ListItem = ({
  currentAudio,
  title,
  color,
  artwork,
  division,
  isWaiting = false,
  drag,
}: Props) => {
  if (division === 'Story') {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <FastImage
            source={{uri: artwork}}
            style={{
              width: 66,
              height: 66,
              borderRadius: 20,
            }}
          />
          <View style={{marginLeft: 17, justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: '500', color: 'white'}}>
              {title}
            </Text>
            <Text style={{color: colors.PURPLE, marginTop: 3}}>ASMR</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon iconName="heart-on" width={17} />
          {isWaiting && (
            <TouchableOpacity onLongPress={drag}>
              <Icon
                iconName="hamburger-btn"
                style={{width: 19, marginLeft: 16}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }

  if (division === 'Song') {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 66,
              height: 66,
              backgroundColor: color,
              borderRadius: 20,
            }}
          />
          <View style={{marginLeft: 17, justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: '500', color: 'white'}}>
              {title}
            </Text>
            <Text style={{color: colors.PURPLE, marginTop: 3}}>음악</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon iconName="heart-on" width={17} />
          {isWaiting && (
            <TouchableOpacity onLongPress={drag}>
              <Icon
                iconName="hamburger-btn"
                style={{width: 19, marginLeft: 16}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }

  if (division === 'ASMR') {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: 66,
              height: 66,
              backgroundColor: colors.RIGHT_PURPLE,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FastImage
              source={{
                uri: 'https://zama-assets.s3.ap-northeast-2.amazonaws.com/images/1643687952587_bird.png',
              }}
              resizeMode={'contain'}
              style={{
                width: 33,
                height: 33,
              }}
            />
          </View>
          <View style={{marginLeft: 17, justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: '500', color: 'white'}}>
              {title}
            </Text>
            <Text style={{color: colors.PURPLE, marginTop: 3}}>음악</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon iconName="heart-on" width={17} />
          {isWaiting && (
            <TouchableOpacity onLongPress={drag}>
              <Icon
                iconName="hamburger-btn"
                style={{width: 19, marginLeft: 16}}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text>{division}</Text>
    </View>
  );
};

export default ListItem;
