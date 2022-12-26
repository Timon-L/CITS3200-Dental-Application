import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useFonts } from 'expo-font';

import * as firebase from "firebase/app";
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getDatabase } from "firebase/database";


import { AppNavigator } from './components/navBar.component';

// import { AppNavigator } from './components/navigation.component';


// export function App() {
//   const [fontsLoaded] = useFonts({
//     'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
//   });
// }

const firebaseConfig = {
  apiKey: "AIzaSyBHd4DA8b9fyCgtTIML3E3KGFpZxmPzAB4",
  authDomain: "dental-screening-db.firebaseapp.com",
  databaseURL: "https://dental-screening-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dental-screening-db",
  storageBucket: "dental-screening-db.appspot.com",
  messagingSenderId: "887300631897",
  appId: "1:887300631897:web:cf8210aa92c684fca83048"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);


export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);