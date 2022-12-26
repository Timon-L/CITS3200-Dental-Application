import React, { useRef, useState } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { Image, StyleSheet,KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button ,Input, Datepicker} from '@ui-kitten/components';
import userData from '../Data/userData';
import profIcon from '../assets/profileIcon.png'
import profBanner from '../assets/profileBanner.png'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { getDatabase, ref, onValue, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";




export const ProfilePage = () =>{
    const [name,setName] = React.useState(userData.name)
    const [email,setEmail] = React.useState(userData.email)
    const [location,setLocation] = React.useState(userData.location)
    const [boolDisabled,setDisability] = React.useState(true)
    const [date, setDate] = React.useState(userData.dob);
    const [age, setAge] = React.useState(userData.age)
    const [visibility, setVisible] = React.useState(true)

    const userID = useRef("0");


    const _checkExistingID = async () => {
        try {
            const interim = await AsyncStorage.getItem('UID');
            if (interim !== null) {
              //Unique user ID retrieved successfully 
              console.debug("retrieved user ID:\n " + interim);
              userID.current = interim;
            } else {
                console.debug("Can't find user ID, creating new ID...");
                userID.current =  uuid.v4();
                _storeData('UID');
            }
        } 
        catch (error) {
            alert("Error while checking ID:\n " + error);
        

      }
    }


    const _storeData = async (storage_key) => {
      try {
        await AsyncStorage.setItem(
          storage_key,
          userID.current,
        );
        console.debug("beep boop writing UID " + userID.current);
      } catch (error) {
        alert("Storage failed, returned error:\n " + error)
      }
    };

    //runs in the background whenever page is loaded, makes sure userID is always initialised
    _checkExistingID();


    
    
    const confirmEdit = () =>{


        setVisible(true)
        setDisability(true)
        const today = new Date()
        const calAge = today.getFullYear() - date.getFullYear()
        const m = today.getMonth() - date.getMonth()
        if(m === 0 && today.getDate < date.getDate()){
            calAge--
        }
        setAge(calAge)
        userData.age = calAge
        userData.name = name;
        userData.location = location;
        userData.email = email;

        //When user confirms details, write them to the firebase RTDB
        const database = getDatabase();
        set(ref(database, "users/" + userID.current), {
            address: email,
            username: name,
            age: calAge,
            locations: userData.location
        });
        console.debug("changes saved under UID " + userID.current);
    }

    const edittingMode = () =>{
        setDisability(false)
        setVisible(!visibility)
        
    }

    const cancelEditMode = () => {
        setDisability(true)
        setVisible(!visibility)
    }

    const renderButton = () =>{
        if(visibility){
            return(
            <Button style= {{justifyContent:'center', width: 200, alignSelf:'center', marginTop:40}}status='info' onPress={edittingMode}>
                Edit Profile
            </Button>
            )
        }else{
            return(
            <Layout style={{flexDirection:'row',marginTop:40}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                     <Button style= {{flex: 1, justifyContent:'center', width: "40%", alignSelf:'center', marginBottom:50 ,marginLeft:10, marginRight:10}}status='danger' onPress={() => cancelEditMode()}>
                         Exit
                    </Button>
                     <Button style= {{flex: 1, justifyContent:'center', width: "40%", alignSelf:'center', marginBottom:50 ,marginLeft:10, marginRight:10}}status='success' onPress={() => confirmEdit()}>
                         Confirm
                    </Button>
                </View>
            </Layout>
            )
        }
    }

    return(
        <Layout style={{flex: 1, backgroundColor: "#FFF",flexDirection:"column"}}>  
            <KeyboardAwareScrollView extraHeight={120}>
            <Layout style ={{alignItems:'center',marginVertical:20}}>
                <Image source={profBanner} style={{width:"100%", height:100, borderBottomWidth:3, borderColor:"#000000"}}/>
                <Image source={profIcon} style={{position: "absolute", width:100, height:100, top:50}}/>
            </Layout >
            <Layout style = {{zIndex: -1}} >
                <Layout style ={{marginHorizontal:30, backgroundColor:"transparent"}}>
                    <Layout style={styles.container}>
                        <Text>Name: </Text>
                        <Input style={styles.input}
                            value={name}
                            disabled = {boolDisabled}
                            placeholder= {name}
                            status='info'
                            onChangeText={nextValue => setName(nextValue)}/>
                    </Layout>
                    <Layout style={styles.container}>
                        <Text>Email:</Text>
                        <Input style={styles.input}
                            value={email}
                            disabled = {boolDisabled}
                            placeholder= {email}
                            status='warning'
                            onChangeText={nextValue => setEmail(nextValue)}/>
                    </Layout>
                    <Layout style={{marginTop:20,}}>
                        <Text>Age: {age.toLocaleString()}</Text>
                        <Datepicker
                        min={new Date(1900, 0, 0)}
                        max={new Date()}
                        disabled={boolDisabled}
                        date={date}
                        status='danger'
                        onSelect={nextDate => setDate(nextDate)}
                        />

                    </Layout>
                    <Layout style={styles.container}>
                        <Text>From: </Text>
                        <Input style={styles.input}
                            value={location}
                            disabled = {boolDisabled}
                            placeholder= {location}
                            status='warning'
                            onChangeText={nextValue => setLocation(nextValue)}/>
                    </Layout>
                </Layout>
                {renderButton()}
            </Layout>
            </KeyboardAwareScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize:20,
        marginTop:10,
        fontWeight:'bold'
    },
    textLayout: {
        flexDirection:'row',
        marginVertical:20
    },
    input: {
        flex: 1,
        margin: 2,
      },
    container:{
        marginTop:30
    },
})