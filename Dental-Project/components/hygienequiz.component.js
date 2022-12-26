import React from 'react';
import { Layout, Text, } from '@ui-kitten/components';
import { StyleSheet, ScrollView, View, ImageBackground, Pressable } from 'react-native';
import wallpaper from '../assets/7284061(1).png'
import cloud from '../assets/cloud.png';




export const HygieneScreen = ({ navigation }) => {
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