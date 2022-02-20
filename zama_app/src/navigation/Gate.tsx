import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import compareVersions from 'compare-versions';
import {navigationRef} from './RootNavigation';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
// commons
import ToastMessage from '@/commons/ToastMessage';
import UpdateForceModal from '@/commons/Modals/UpdateForceModal';
import UpdateSelectModal from '@/commons/Modals/UpdateSelectModal';
// apis
import useVersionAPI from '@/api/etc/useVersionAPI';
import {appVersion} from '@/api/useAPI';
// redux
import {useDispatch, useSelector} from 'react-redux';
import {State} from '@/redux/rootReducer';
import {setCurrentRoute} from '@/redux/interation/interactionSlice';

const Gate = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state: State) => state.usersReducer);
  const {getVersion} = useVersionAPI();

  const [version, setVersion] = useState('0.0.1');
  const [forceUpdateModal, setForseUpdateModal] = useState(false);
  const [selectUpdateModal, setSelectUpdateModal] = useState(false);
  const [updateContents, setUpdateContents] = useState('');

  const handleGetVersion = async () => {
    const result = await getVersion();
    checkAppVersion(result);
  };

  const checkAppVersion = async data => {
    try {
      const {appLatestVersion, appMinimumVersion, updateContents} = data;

      if (compareVersions(appMinimumVersion, appVersion) > 0) {
        setForseUpdateModal(true);
        setUpdateContents(updateContents);
        setVersion(appMinimumVersion);
        setTimeout(() => SplashScreen.hide(), 1000);
        return false;
      }
      if (compareVersions(appLatestVersion, appVersion) > 0) {
        setSelectUpdateModal(true);
        setUpdateContents(updateContents);
        setVersion(appLatestVersion);
        setTimeout(() => SplashScreen.hide(), 1000);
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetVersion();
  }, []);

  if (forceUpdateModal) {
    return (
      <View style={{flex: 1}}>
        <UpdateForceModal
          updateInfo={{
            version: version,
            updateContents: updateContents?.split('&&'),
          }}
        />
      </View>
    );
  }

  if (selectUpdateModal) {
    return (
      <View style={{flex: 1}}>
        <UpdateSelectModal
          updateInfo={{
            version: version,
            updateContents: updateContents?.split('&&'),
          }}
          cancelSelectUpdate={() => setSelectUpdateModal(false)}
        />
      </View>
    );
  }

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={() =>
          dispatch(
            setCurrentRoute({
              currentRoute: navigationRef?.current?.getCurrentRoute()?.name,
            }),
          )
        }>
        {token ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
      <ToastMessage />
    </>
  );
};

export default Gate;
