import React, {FunctionComponent, useState} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
// commons
import TouchableOpacity from '@/commons/TouchableOpacity';
import {IoniconsIcons} from '../Icons/RnIcons';
import LoadingImage from './LoadingImage';
// apis
import useContentAPI from '@/api/content/useContentAPI';
// libs
import FastImage from 'react-native-fast-image';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
// redux
import {RecoAudiosState} from '@/redux/audio/audioSlice';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {
  setOpenReportModal,
  setSubscriptionModal,
} from '@/redux/interation/interactionSlice';
// hooks
import usePlayerHandle from '@/hooks/usePlayerHandle';

// tools
import {transformTimes} from '@/utils/tools';
// styles
import {SCREEN_WIDTH} from '@/styles/sizes';
import colors from '@/styles/colors';
import * as mixins from '@/styles/mixins';
import ReportSendModal from '../Modals/ReportSendModal';

interface Props {
  data: RecoAudiosState;
  isBasketBtn?: boolean;
}

const AudioCard: FunctionComponent<Props> = ({data, isBasketBtn = true}) => {
  const appliedSize = SCREEN_WIDTH * 0.9;
  const height = appliedSize * 0.6;
  const RODIUS = 10;

  if (!data?.title) {
    return (
      <View style={{flexDirection: 'column'}}>
        <View
          style={{
            width: appliedSize,
            height,
            borderRadius: 10,
            backgroundColor: colors.DIVIDER_BORDER_COLOR,
          }}
        />
        <View
          style={{
            width: appliedSize,
            borderRadius: 5,
            height: 15,
            marginTop: 10,
            backgroundColor: colors.DIVIDER_BORDER_COLOR,
          }}
        />
        <View
          style={{
            width: appliedSize,
            borderRadius: 5,
            height: 15,
            marginTop: 3,
            backgroundColor: colors.DIVIDER_BORDER_COLOR,
          }}
        />
      </View>
    );
  }

  const {
    id,
    title,
    time,
    thumbnail,
    voiceGender,
    file,
    division,
    isLike,
    free,
    creator,
  } = data;

  const [onLoadEnd, setOnLoadEnd] = useState(false);
  const {handleClickContent} = usePlayerHandle();
  const {inBasketAudio} = useContentAPI();

  const [reportVisible, setReportVisible] = useState(false);

  const {subscriptions}: any = useSelector(
    (state: State) => state.subscriptionReducer,
  );
  const subscription = subscriptions?.length > 0;

  const available = subscription ? true : free;

  const dispatch = useDispatch();

  const handleInBasketAudio = async () => {
    try {
      if (isLike) {
      } else {
        if (subscription || free) {
        } else {
          dispatch(setSubscriptionModal({openSubscriptionModal: true}));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickAudio = () => {
    if (available) {
      handleClickContent([
        {
          id: 0,
          title,
          duration: time,
          artwork: thumbnail,
          url: file,
          division,
          artist: 'zama',
        },
      ]);
    } else {
      dispatch(setSubscriptionModal({openSubscriptionModal: true}));
    }
  };

  return (
    <TouchableOpacity onPress={handleClickAudio}>
      <View
        style={[
          {
            width: SCREEN_WIDTH * 0.95,
            flexDirection: 'row',
            paddingVertical: 10,
            justifyContent: 'center',
          },
        ]}>
        {!onLoadEnd && (
          <LoadingImage
            style={{
              position: 'absolute',
              width: appliedSize,
              height,
              borderRadius: RODIUS,
              backgroundColor: colors.DIVIDER_BORDER_COLOR,
              zIndex: 1,
            }}
            loadingIconSize={30}
            loadingIconColor={colors.RIGTH_GRAY}
          />
        )}
        <View style={{position: 'relative'}}>
          <FastImage
            source={{uri: data.thumbnail}}
            style={{
              width: appliedSize,
              height,
              borderRadius: RODIUS,
            }}
            onLoad={() => setOnLoadEnd(true)}
            resizeMode={'cover'}
          />
          {isBasketBtn && (
            <TouchableWithoutFeedback onPress={() => handleInBasketAudio()}>
              <View
                style={{
                  position: 'absolute',
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  backgroundColor: colors.TRANSPARENT_DARK,
                  justifyContent: 'center',
                  alignItems: 'center',
                  right: 13,
                  top: 13,
                }}>
                <IoniconsIcons
                  name={isLike ? 'basket' : 'basket-outline'}
                  size={20}
                  color={colors.WHITE}
                />
              </View>
            </TouchableWithoutFeedback>
          )}
          {division === 'Story' && (
            <View style={{position: 'absolute', left: 13, top: 13}}>
              <View
                style={[
                  mixins.shadow,
                  {
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    borderRadius: 5,
                    backgroundColor:
                      voiceGender === '여' ? colors.PURPLE : colors.DARK_PURPLE,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '700',
                    fontSize: 12,
                  }}>
                  Voice - {voiceGender}
                </Text>
              </View>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: appliedSize,
              paddingHorizontal: 10,
              paddingVertical: 15,
              position: 'absolute',
              bottom: 0,
              borderBottomLeftRadius: RODIUS,
              borderBottomRightRadius: RODIUS,
              backgroundColor: colors.TRANSPARENT_DARK,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {!available && (
                <View style={{marginRight: 7}}>
                  <IoniconsIcons
                    name={'lock-closed'}
                    color={'white'}
                    size={20}
                  />
                </View>
              )}
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 17,
                  color: 'white',
                  marginTop: 3,
                }}>
                {data.title}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.BRIGHT_GRAY,
                }}>
                {transformTimes(data.time)}
              </Text>
              <View style={{marginLeft: 7}} />
              <View>
                <Menu
                  visible={reportVisible}
                  style={{height: 40}}
                  anchor={
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => setReportVisible(!reportVisible)}>
                      <IoniconsIcons
                        name={'ellipsis-vertical'}
                        color={'white'}
                        size={17}
                      />
                    </TouchableOpacity>
                  }
                  onRequestClose={() => setReportVisible(!reportVisible)}>
                  <MenuItem
                    style={{height: 40}}
                    onPress={() => {
                      dispatch(setOpenReportModal({openReportModal: true}));
                      setReportVisible(!reportVisible);
                    }}>
                    신고하기
                  </MenuItem>
                </Menu>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AudioCard;
