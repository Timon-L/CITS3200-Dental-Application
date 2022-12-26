import React, {useCallback, useEffect, useState} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon, Layout, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction, Text } from '@ui-kitten/components';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Platform } from 'react-native';
import { HomeScreen } from './homepage.component';
import { InfoPage } from './infopage.component';
import { QuizScreen } from './quizpage.component';
import { QuizGame } from './quizgame.component';
import { ProfilePage } from './profile.component';
import Assessment from './Assessment';
import { CameraPage } from './camera.component';
/*  Available fonts:
*   {'Sassoon-Primary', 'futura-medium-bt', 'Futura-Heavy-font', 'Futura-Book-font'}
*/
const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();

const TopBar = () => {
  const AwardIcon = (props) => (
    <Icon {...props} name='award' fill ="#D4AF37"/>
  );

  const LogoutIcon = (props) => (
    <Icon {...props} name='log-out' />
  );

  const MenuIcon = (props) => (
  <Icon {...props} name='more-vertical'/>
);

  const PersonIcon = (props) => (
    <Icon {...props} name='person-outline' />
  );

  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigation = useNavigation();

  const navigateAchievements = () => {
    navigation.navigate('Profile');
  }

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );
    
  const [fontsLoaded] = useFonts({
    'Sassoon-Primary': require('../assets/fonts/Sassoon-Primary.otf'),
    'futura-medium-bt': require('../assets/fonts/futura-medium-bt.ttf'),
    'Futura-Heavy-font': require('../assets/fonts/Futura-Heavy-font.ttf'),
    'Futura-Book-font' : require('../assets/fonts/Futura-Book-font.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return(
      <React.Fragment>
        <Text style={styles.title}>Dental App</Text>
        <TopNavigationAction icon={AwardIcon} onPress={navigateAchievements} onLayout={onLayoutRootView}/>
        {/* <OverflowMenu
          anchor={renderMenuAction}
          visible={menuVisible}
          onBackdropPress={toggleMenu}>
          <MenuItem accessoryLeft={PersonIcon} title='Profile'/>
        </OverflowMenu> */}
        <TopNavigationAction icon={PersonIcon} onPress={navigateAchievements}/>
    </React.Fragment>
  );
};


const Navbar = ({ navigation, state }) => {
  const HomeIcon = (props) => (
    <Icon {...props} name={state.index == 0 ? 'home' : 'home-outline'} fill={state.index == 0 ? '#5DB782' : '#CBFFD1'} />
  );

  const AssessmentIcon = (props) => (
    <Icon {...props} name={state.index == 1 ? 'video' : 'video-outline'} fill={state.index == 1 ? '#5DB782' : '#CBFFD1'} />
  );

  const InfoIcon = (props) => (
    <Icon {...props} name={state.index == 2 ? 'info' : 'info-outline'} fill={state.index == 2 ? '#5DB782' : '#CBFFD1'} />
  );

  const QuizIcon = (props) => (
    <Icon {...props} name={state.index == 3 ? 'question-mark-circle' : 'question-mark-circle-outline'} fill={state.index == 3 ? '#F40000' : '#DFF400'} />
  );

  const QuizIcon2 = (props) => (
    <Icon {...props} name={state.index == 4 ? 'menu' : 'menu-outline'} fill={state.index == 4 ? '#F40000' : '#DFF400'} />
  );

  return (
    <BottomNavigation
      style={styles.bottomNavigation}
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon} />
      <BottomNavigationTab icon={AssessmentIcon} />
      <BottomNavigationTab icon={InfoIcon} />
      <BottomNavigationTab icon={QuizIcon} />
      <BottomNavigationTab icon={QuizIcon2} />
    </BottomNavigation>
  );

};
const TabNavigator = () => (
  <Navigator tabBar={props => <Navbar {...props} />} screenOptions={{ headerShown: false }} topNav={props => <TopBar{...props} />}>
    <Screen name='Home' component={HomeScreen} />
    <Screen name='Assessment' component={Assessment} />
    <Screen name='Info' component={InfoPage} />
    <Screen name ='Daily' component ={QuizGame}/>
    <Screen name='Quiz' component={QuizScreen} />
    <Screen name = 'Profile' component={ProfilePage}/>
    
    <Screen name='Camera' component={CameraPage}/>
  </Navigator>
);

export const AppNavigator = () => (

  <NavigationContainer>
    <Layout style={styles.topNav} level='1'>
      <TopNavigation
        accessoryRight={TopBar}
        style={[{fontSize: 24}]}
      />
    </Layout>
    <TabNavigator />
  </NavigationContainer>
);

/*  Available fonts:
*   {'Sassoon-Primary', 'futura-medium-bt', 'Futura-Heavy-font', 'Futura-Book-font'}
*/
const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
  },
  topNav: {
    marginTop: "8%"
  },
  title: {
    flex: 1,
    width: Platform.OS === 'ios' ? 150:90,
    fontFamily: "Sassoon-Primary",
    fontSize: 24,
    position: 'relative',
    right: "5%",
  }
})
