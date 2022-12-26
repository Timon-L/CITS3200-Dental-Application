import react, { useState } from "react";
import { Button, Layout, View, Alert } from "@ui-kitten/components";
import { ImageBackground,StatusBar,Text, StyleSheet } from "react-native";
import quizData from "../Data/quizData";
import wallpaper from "../assets/7284061(1).png"
import React, {useCallback, useRef } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export const QuizGame = () =>{

    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state) => {    if (state === "ended") {      setPlaying(false);      Alert.alert("video has finished playing!");    }  }, []);
    const togglePlaying = useCallback(() => {    setPlaying((prev) => !prev);  }, []);

    const renderQuestion = () =>{
        return(
             <Layout>
            <Layout style={{position:"absolute", height:30}}>
                <Text>hello?</Text>   
                <YoutubePlayer height={300}  play={playing} videoId={"iee2TATGMyI"} onChangeState={onStateChange}      />
                 <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
                </Layout>
        </Layout>
        )
       

    }

    return(
        <Layout style={{ flex: 1, backgroundColor: "#FFFFF5" }}>
            <ImageBackground source={wallpaper} resizeMode="cover" style ={{position:"absolute", bottom:0, top:0, left:0, right:0}}> 
                <Layout style={{backgroundColor:"transparent",flex:1}}>
                <Text>hello?</Text>   
                <YoutubePlayer height={250}  play={playing} videoId={"eHK3A9ANE3Q"} onChangeState={onStateChange}      />
                <YoutubePlayer height={250}  play={playing} videoId={"_UB7P0uCsPQ"} onChangeState={onStateChange}      />
                <YoutubePlayer height={250}  play={playing} videoId={"W31e9meX9S4"} onChangeState={onStateChange}      />
                </Layout>
            </ImageBackground>
        </Layout>
    )
}

const styles = StyleSheet.create({
    quizheader:{
        fontSize:20,
        color:"#fff",
        marginRight:2
    }

})