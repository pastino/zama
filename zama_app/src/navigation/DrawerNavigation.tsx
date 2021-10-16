import {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import {SCREEN_WIDTH} from '@/styles/sizes';
import RootNavigator from './RootNavigator';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const [init, setInit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 1);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Drawer.Navigator
        initialRouteName="Maim"
        drawerType="slide"
        drawerStyle={{width: init ? SCREEN_WIDTH * 0.7 : 0}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Maim" component={RootNavigator} />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default DrawerNavigation;
