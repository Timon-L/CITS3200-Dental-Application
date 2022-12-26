import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Image, StyleSheet, ScrollView, View, SafeAreaView , ImageBackground} from 'react-native';
import cloud from '../assets/index.png';
import wallpaper from '../assets/7284061(1).png'
import { DailyInfo } from './card.component';
import { CardNav } from './homenav.component';
import userData from '../Data/userData';

export const HomeScreen = () => {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

  return (
  <Layout style={{flex: 1, backgroundColor: "#FFFFF5",flexDirection:"column"}}>
    <ImageBackground source={wallpaper} resizeMode="cover" style ={{position:"absolute", bottom:0, top:0, left:0, right:0}}>    
    <Layout style={{ backgroundColor: "#fff",alignItems:"center", flexBasis:"auto",borderRadius:25,overflow:"hidden",height:200, marginVertical:10}}>
        <ImageBackground source={cloud} resizeMode="cover" style={{width:"100%",height:"100%"}}>
          <Text level='1'  style={{justifyContent:"center", alignItems:"center", textAlign:'center', lineHeight:100, color:'white', fontSize:30, textShadowColor: "#333333", textShadowOffset: {width:1,height:1}, textShadowRadius: 1}}>Welcome Back</Text>
          <Text level='1'  style={{justifyContent:"center", alignItems:"center", textAlign:'center', color:'white', fontSize:30, textShadowColor: "#333333", textShadowOffset: {width:1,height:1}, textShadowRadius: 1}}>{userData.name}!</Text>        
        </ImageBackground>
    </Layout>
    
    <Layout style={{flex:2, padding: 5, backgroundColor: "transparent", maxHeight:"30%",marginVertical:5}}>
      <CardNav/>
    </Layout>
    
    <Layout style ={{flex: 2, backgroundColor: "transparent", maxHeight:"30%", alignSelf:"center"}}>   
      <DailyInfo/>
    </Layout>
    
    
     </ImageBackground>
     {/* <View style={styles.videoContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          ref: video,
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View> */}
  </Layout>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFFFF5'
    },

  infoBubble: {
    borderRadius: 100,
    margin: 100,
    width: 150,
    height: 150,
    backgroundColor: 'red',
    // alignContents: 'centre',
    alignSelf: 'flex-end'
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 350,
    height: 220,
  },
});