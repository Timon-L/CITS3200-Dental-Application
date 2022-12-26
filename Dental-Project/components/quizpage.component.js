import React from 'react';
import { Layout, Text, } from '@ui-kitten/components';
import { StyleSheet, ScrollView, View, ImageBackground, Pressable } from 'react-native';
import wallpaper from '../assets/7284061(1).png'
import cloud from '../assets/cloud.png';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { HygieneScreen } from './hygienequiz.component';


const buttonPressed = () => {
    console.log("Quiz Button Was Pressed!")
}



export const QuizScreen = () => {
    const navigation = useNavigation();
    return (
        <Layout style={{ flex: 1, backgroundColor: "#FFFFF5" }}>
            <ImageBackground source={wallpaper} resizeMode="cover" style={{ flex: 1 }}>
                <Layout style={{ paddingBottom: 30, backgroundColor: "transparent", alignItems: "center", paddingTop: 10 }}>
                    <ImageBackground source={cloud} resizeMode="cover" style={{ width: '100%', height: undefined, alignSelf: "center" }}>
                        <Text level='1' style={{ justifyContent: "center", alignItems: "center", textAlign: 'center', lineHeight: 100, color: 'white', fontSize: 30, textShadowColor: "#333333", textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1 }}>Take a Quiz!</Text>
                    </ImageBackground>
                </Layout>


                <ScrollView style={{ margin: 10 }}>
                    <Text>A range of quizzes that can be taken to enhance your knowledge! Awards are earnt for their completion and progression is tracked. </Text>
                    <View style={[styles.quizview]}>
                        <Pressable style={[styles.quizbutton, { backgroundColor: '#ffd7d1' }]} onPress={() => navigation.navigate('HygieneScreen')} >
                            <Text style={[styles.buttontext]}>Hygiene Tips</Text>
                        </Pressable>
                        <Text style={[styles.descriptiontext]} > This is a basic hygiene knowledge test</Text>
                    </View>

                    <View style={[styles.quizview]}>
                        <Pressable style={[styles.quizbutton, { backgroundColor: '#bac2ff' }]} >
                            <Text style={[styles.buttontext]}>Daily Quiz</Text>
                        </Pressable>
                        <Text style={[styles.descriptiontext]} > Questions randomly selected from a larger pool</Text>
                    </View>


                    <View style={[styles.quizview]}>
                        <Pressable style={[styles.quizbutton, { backgroundColor: '#ffeedf' }]} >
                            <Text style={[styles.buttontext]}>Tooth Health</Text>
                        </Pressable>
                        <Text style={[styles.descriptiontext]} > How well do you know your teeth?</Text>
                    </View>


                    <View style={[styles.quizview]}>
                        <Pressable style={[styles.quizbutton, { backgroundColor: '#dae1f7' }]} >
                            <Text style={[styles.buttontext]}>Gum Health</Text>
                        </Pressable>
                        <Text style={[styles.descriptiontext]} > Are your gums sore?</Text>
                    </View>

                    <View style={[styles.quizview]}>
                        <Pressable style={[styles.quizbutton, { backgroundColor: '#feb3df' }]} >
                            <Text style={[styles.buttontext]}>Tooth Decay</Text>
                        </Pressable>
                        <Text style={[styles.descriptiontext]} > How to prevent tooth decay</Text>
                    </View>

                    <View style={[styles.quizview]}>
                        <Pressable style={[styles.quizbutton, { backgroundColor: '#f6e0e2' }]} >
                            <Text style={[styles.buttontext]}>How to floss</Text>
                        </Pressable>
                        <Text style={[styles.descriptiontext]} > Are you flossing correctly?</Text>
                    </View>

                    <View style={[styles.quizview, { paddingBottom: 60 }]}>
                        <Pressable style={[styles.quizbutton, { backgroundColor: '#c7dfff' }]} >
                            <Text style={[styles.buttontext]}>Brushing Teeth</Text>
                        </Pressable>
                        <Text style={[styles.descriptiontext]} > Learn how to brush your teeth correctly with this quiz!</Text>
                    </View>

                </ScrollView>
            </ImageBackground>
        </Layout >
    );
};




const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#FFFFF5'
    },

    quizbutton: {
        borderWidth: 2,
        borderColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        flexDirection: 'row',
    },

    buttontext: {
        fontWeight: 'bold',
        justifyContent: 'center',
    },

    descriptiontext: {
        paddingTop: 40,
        flexWrap: 'wrap',
        flex: 1,
        paddingLeft: 5,
    },

    quizview: {
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
    },
});
