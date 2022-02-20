import React from 'react';
import {View} from 'react-native';
import TouchableOpacity from '@/commons/TouchableOpacity';
// svgs
// Sign Up User Analysis
import TimeSleep from '@/assets/svg/time-sleep.svg';
import Moon from '@/assets/svg/moon.svg';
import Baby from '@/assets/svg/baby.svg';
import Song from '@/assets/svg/song.svg';
import Hourglass from '@/assets/svg/hour-glass.svg';
// Home Tab
import HomeOff from '@/assets/svg/home-off.svg';
import HomeOn from '@/assets/svg/home-on.svg';
import MyPageOff from '@/assets/svg/my-page-off.svg';
import MyPageOn from '@/assets/svg/my-page-on.svg';
import PlaylistOn from '@/assets/svg/playlist-on.svg';
import PlaylistOff from '@/assets/svg/playlist-off.svg';
import DiamondBid from '@/assets/svg/diamond-big.svg';
import DiamondSmall from '@/assets/svg/diamond-small.svg';
import Lock from '@/assets/svg/lock.svg';
import HeartOn from '@/assets/svg/heart-on.svg';
import HeartOff from '@/assets/svg/heart-off.svg';
import PlayBtn from '@/assets/svg/play-btn.svg';
import HamburgerBtn from '@/assets/svg/hamburger-btn.svg';
import PauseBtn from '@/assets/svg/pause-btn.svg';
import PrevBtn from '@/assets/svg/prev-btn.svg';
import NextBtn from '@/assets/svg/next-btn.svg';
import MoonWhite from '@/assets/svg/moon-white.svg';

interface Props {
  iconName: string;
  onPress?: any;
  onLongPress?: any;
  style?: {};
  iconStyle?: {};
  width?: number;
  height?: number;
}

export default function Icon({
  style,
  iconName,
  onPress,
  onLongPress,
  width = 24,
  height = 24,
}: Props) {
  function renderIcon() {
    switch (iconName) {
      case 'time-sleep':
        return <TimeSleep width={width} height={height} />;
      case 'moon':
        return <Moon width={width} height={height} />;
      case 'baby':
        return <Baby width={width} height={height} />;
      case 'song':
        return <Song width={width} height={height} />;
      case 'hour-glass':
        return <Hourglass width={width} height={height} />;

      case 'home-off':
        return <HomeOff width={width} height={height} />;
      case 'home-on':
        return <HomeOn width={width} height={height} />;
      case 'my-page-on':
        return <MyPageOn width={width} height={height} />;
      case 'my-page-off':
        return <MyPageOff width={width} height={height} />;
      case 'playlist-on':
        return <PlaylistOn width={width} height={height} />;
      case 'playlist-off':
        return <PlaylistOff width={width} height={height} />;

      case 'diamond-big':
        return <DiamondBid width={width} height={height} />;
      case 'diamond-small':
        return <DiamondSmall width={width} height={height} />;

      case 'lock':
        return <Lock width={width} height={height} />;

      case 'heart-off':
        return <HeartOn width={width} height={height} />;
      case 'heart-on':
        return <HeartOff width={width} height={height} />;

      case 'play-btn':
        return <PlayBtn width={width} height={height} />;

      case 'hamburger-btn':
        return <HamburgerBtn width={width} height={height} />;

      case 'pause-btn':
        return <PauseBtn width={width} height={height} />;
      case 'prev-btn':
        return <PrevBtn width={width} height={height} />;
      case 'next-btn':
        return <NextBtn width={width} height={height} />;

      case 'moon-white':
        return <MoonWhite width={width} height={height} />;

      default:
        return null;
    }
  }

  return (
    <>
      {typeof onPress === 'function' || typeof onLongPress === 'function' ? (
        <TouchableOpacity
          style={style}
          duration={200}
          onPress={onPress}
          onLongPress={onLongPress}>
          <View style={{overflow: 'hidden'}}>{renderIcon()}</View>
        </TouchableOpacity>
      ) : (
        <View style={style}>
          <View style={{overflow: 'hidden'}}>{renderIcon()}</View>
        </View>
      )}
    </>
  );
}
