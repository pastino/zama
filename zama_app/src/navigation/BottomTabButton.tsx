import React, {useMemo} from 'react';
import {View} from 'react-native';
// common
import TouchableOpacity from '@/commons/TouchableOpacity';
import {isIphoneX} from 'react-native-iphone-x-helper';
// styles
import Icon from '@/styles/ui/Icon';
import {BOTTOM_TAB_HEIGHT} from '@/styles/sizes';

const SleepBasket = ({isFocused}) => {
  return (
    <View style={{alignItems: 'center', opacity: isFocused ? 1 : 0.7}}>
      <Icon
        iconName={isFocused ? 'playlist-on' : 'playlist-off'}
        width={25}
        height={25}
      />
    </View>
  );
};

const HomeIcon = ({isFocused}) => {
  return (
    <View style={{alignItems: 'center', opacity: isFocused ? 1 : 0.7}}>
      <Icon
        iconName={isFocused ? 'home-on' : 'home-off'}
        width={25}
        height={25}
      />
    </View>
  );
};

const MyPage = ({isFocused}) => {
  return (
    <View style={{alignItems: 'center', opacity: isFocused ? 1 : 0.7}}>
      <Icon
        iconName={isFocused ? 'my-page-on' : 'my-page-off'}
        width={25}
        height={25}
      />
    </View>
  );
};

function BottomTabIcon({
  routeName,
  isFocused,
}: {
  routeName: string;
  isFocused: boolean;
}) {
  const icon = useMemo(
    () => (
      <View style={{paddingBottom: isIphoneX() ? 10 : 0}}>
        {routeName === 'Home' ? <HomeIcon isFocused={isFocused} /> : null}
        {routeName === 'SleepBasket' ? (
          <SleepBasket isFocused={isFocused} />
        ) : null}
        {routeName === 'MyPage' ? <MyPage isFocused={isFocused} /> : null}
      </View>
    ),
    [routeName, isFocused],
  );

  return icon;
}

export default function BottomTabButton({state, descriptors, navigation}) {
  const {navigate, emit} = navigation;

  return (
    <View
      style={{flexDirection: 'row', backgroundColor: 'rgba(194,173,236,0.5)'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            if (route.name === 'SearchTab') {
              navigate('Search', {
                searchKeyword: '',
                listType: '',
                autoFocus: true,
              });
            } else {
              navigate(route.name);
            }
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            duration={200}
            accessibilityRole="button"
            accessibilityState={{selected: isFocused ? true : false}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={{
              flex: 1,
              paddingVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
              height: BOTTOM_TAB_HEIGHT,
            }}>
            <BottomTabIcon routeName={route.name} isFocused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
