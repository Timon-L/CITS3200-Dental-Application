import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './homepage.component';
import { InfoPage } from './infopage.component';
import { QuizScreen } from './quizpage.component';
import Assessment from './Assessment';
import {CameraPage} from './camera.component';
import {QuizGame} from './quizgame.component';
import {HygieneScreen} from './hygienequiz.component';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name='Home' component={HomeScreen} />
    <Screen name='Assessment' component={Assessment} />
    <Screen name='Info' component={InfoPage} />
    <Screen name='Quiz' component={QuizScreen} />
    <Screen name='QuizGame' component={QuizGame} />
    <Screen name='Camera' component={CameraPage} />
    <Screen name='HygieneScreen' component={HygieneScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
