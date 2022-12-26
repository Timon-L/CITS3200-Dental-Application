import react, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, Layout, View, Alert,Icon } from "@ui-kitten/components";
import { ImageBackground,StatusBar,Text, StyleSheet, TouchableOpacity,Modal } from "react-native";
import quizData, {getDailyQuiz} from "../Data/quizData";
import wallpaper from "../assets/7284061(1).png"
import React, {useCallback, useRef } from "react";

export const QuizGame = () =>{
    const nav = useNavigation()
    const [questions, setQuestions] = useState(getDailyQuiz());
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setcurrentOptionSelected] = useState(null)
    const [correctOption,setCorrectOption] = useState(null)
    const [isOptionsDisabled,setIsOptionsDisabled] = useState(false)
    const [score,setScore] = useState(0)
    const [showNextButton,setShowNextButton] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const [quizDone,setQuizDone] = useState(false)


    const validateAns = (selectedOption) =>{
        let correct_option = questions[currentQuestionIndex]['correct_option']
        setcurrentOptionSelected(selectedOption)
        setCorrectOption(correct_option)
        setIsOptionsDisabled(true)
        if(selectedOption==correct_option){
            setScore(score+1)
        }
        setShowNextButton(true)
    }

    const handleNext = () =>{
        if(currentQuestionIndex == questions.length-1){
            setQuizDone(true)
            setShowModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1)
            setcurrentOptionSelected(null)
            setCorrectOption(null)
            setIsOptionsDisabled(false)
            setShowNextButton(false)
        }
    }

    const renderQuestion = () =>{
        const renderNextButton = () =>{
            if(showNextButton){
                return(
                    <TouchableOpacity onPress={handleNext} style={{marginTop:20, width:300,backgroundColor:'#E6D1F2',padding:20,borderRadius: 5,alignSelf:"center"}}>
                        <Text style={{fontSize:20, textAlign:"center"}}>Next</Text>
                    </TouchableOpacity>
                )
            }else{
                return null
            }
        }

        return(
        <Layout style={{ backgroundColor:"transparent"}}>
            <Layout style ={{  alignItems:"center", backgroundColor:"transparent",marginVertical:5}}>
                <Text style={{fontSize:30, opacity:0.6, textAlign:"center"}}>{currentQuestionIndex + 1}/{questions.length}</Text>
            </Layout >
            <Text style={{fontSize:30, alignSelf:"center",marginHorizontal:20,marginVertical:5}}>{questions[currentQuestionIndex]?.question}</Text>

            <Layout style={{ backgroundColor:"transparent"}}>
            {
                questions[currentQuestionIndex]?.options.map(option =>(
                    <TouchableOpacity onPress={()=> validateAns(option)} key ={option} disabled={isOptionsDisabled} style ={ 
                            (option==correctOption)?styles.correctButton: (option==currentOptionSelected)? styles.incorrectButton : styles.neutralButton
                            }>
                        <Text style={{fontSize:20}}>{option}</Text>
                        {
                            option==correctOption?(
                                <Layout style={{width:30,height:30,borderRadius:30/2,backgroundColor:"#baffc9",justifyContent:'center', alignContent:'center'}}>
                                    <Icon name="checkmark-outline" fill ="#fff"/>
                                </Layout>
                            ):option == currentOptionSelected?(
                                <Layout style={{width:30,height:30,borderRadius:30/2,backgroundColor:"#ffb3ba",justifyContent:'center', alignContent:'center'}}>
                                    <Icon name="close-outline" fill ="#fff"/>
                                </Layout>
                            ):(null)
                        }
                    </TouchableOpacity>
                ))
            }
            </Layout>
            {renderNextButton()}
            
        </Layout>
        )
    }

return(
    <Layout style={{flex: 1, backgroundColor: "#FFFFF5",alignItems:"center"}}>
        {renderQuestion()}
        <Modal animationType="slide" transparent ={true} visible ={showModal}>
            <Layout style={{flex:1,backgroundColor:'#C1E8E0',alignItems:"center",justifyContent:"center"}}>
                <Layout style={{backgroundColor:'#F5D6CB',width:'90%',borderRadius:10,padding:20,alignItems:"center"}}>
                    <Text style={{fontSize:30,fontWeight:"bold"}}>{score>(questions.length/2)? 'Congratulations':'Oops!'}</Text>
                    <Layout style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",marginVertical:10,backgroundColor:"transparent"}}>
                        <Text style={{fontSize:30,fontWeight:"bold", color:score>(questions.length/2)?'#008b46':'#8b0000'}}>{score}</Text>
                        <Text style={{fontSize:20,fontWeight:"bold"}}>/{questions.length}</Text>
                        
                    </Layout>
                    <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>{score>(questions.length/2)? 'LET\'S GO.\n Keep this up new quiz tomorrow':'DON\'T FEEL DISHEARTENED.\n We go again tomorrow'}</Text>
                    <Button onPress={()=>nav.navigate('Home')} style={{fontSize:20,fontWeight:"bold",textAlign:"center",width:200,marginTop:10,backgroundColor:'#C1E8E0'}}>Home</Button>
                </Layout>

                

            </Layout>

        </Modal>
    </Layout>
)
}

const styles = StyleSheet.create({
    quizheader:{
        fontSize:20,
        color:"#fff",
        marginRight:2
    },
    correctButton:{
        backgroundColor: "#baffc9",
        borderColor:'#baffc9',
        borderWidth:3,
        alignItems:"center",justifyContent:"space-between",marginHorizontal:20, marginVertical:7,
        borderRadius:5, height:60,flexDirection:"row",
    },
    incorrectButton:{
        backgroundColor:'#ffb3ba',
        borderColor:'#ffb3ba',
        borderWidth:3,
        alignItems:"center",justifyContent:"space-between",marginHorizontal:20, marginVertical:7,
        borderRadius:5, height:60,flexDirection:"row",

    },
    neutralButton: {
        backgroundColor:'#BAE1FF',
        borderColor:'#BAE1FF',
        borderWidth:3,
        alignItems:"center",justifyContent:"space-between",marginHorizontal:20, marginVertical:7,
        borderRadius:5, height:60,flexDirection:"row",
    }

});