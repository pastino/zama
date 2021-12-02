import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
// common
import TouchableOpacity from '@/commons/TouchableOpacity';
import {IoniconsIcons} from '@/commons/Icons/RnIcons';
import {isIphoneX} from 'react-native-iphone-x-helper';
// styles
import * as colors from '@/styles/colors';
import {typography} from '@/styles/typography';

const HomeIcon = ({isFocused}) => {
  return (
    <View style={{alignItems: 'center', opacity: isFocused ? 1 : 0.7}}>
      <IoniconsIcons
        name={isFocused ? 'home' : 'home-outline'}
        color={colors.DARK_PURPLE}
        size={25}
      />
      <Text
        style={[
          typography.f10,

          isFocused ? typography.bold : typography.normal,
          {
            color: colors.DARK_PURPLE,
          },
        ]}>
        홈
      </Text>
    </View>
  );
};

const SleepBasket = ({isFocused}) => {
  return (
    <View style={{alignItems: 'center', opacity: isFocused ? 1 : 0.7}}>
      <IoniconsIcons
        name={isFocused ? 'basket' : 'basket-outline'}
        color={colors.DARK_PURPLE}
        size={25}
      />
      <Text
        style={[
          typography.f10,
          isFocused ? typography.bold : typography.normal,
          {color: colors.DARK_PURPLE},
        ]}>
        잠바구니
      </Text>
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
              borderTopWidth: 1,
              borderTopColor: colors.DIVIDER_BORDER_COLOR,
            }}>
            <BottomTabIcon routeName={route.name} isFocused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
