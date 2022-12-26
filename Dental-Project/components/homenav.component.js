import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Layout, Text,Card } from '@ui-kitten/components';
import { Image, StyleSheet, ScrollView} from 'react-native';
import quizImg from '../assets/quizImage.jpeg'
import assessImg from '../assets/AssessmentImg.jpg'
import closeImg from '../assets/DentistImage.jpg'


export const CardNav = () =>{

const navigation = useNavigation();

    const HeaderQuiz = (props) => (
        <Layout {...props}>
          {/* <Image source={quizImg} style={{width:200, height:100}}/> */}
          <Text style={{alignSelf:"center"}}>Daily Quiz</Text> 
        </Layout>
      );

      const HeaderAssesment = (props) => (
        <Layout {...props}>
          {/* <Image source={quizImg} style={{width:200, height:100}}/> */}
          <Text style={{alignSelf:"center"}}>Assessment</Text> 
        </Layout>
      );

      const HeaderClosestD = (props) => (
        <Layout {...props}>
          {/* <Image source={quizImg} style={{width:200, height:100}}/> */}
          <Text style={{alignSelf:"center"}}>closest dentist</Text> 
        </Layout>
      );


    
    return(
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false} style={{padding:3}}>
            <Card header={HeaderQuiz} style={styles.cardSmall} status='danger' onPress={() => navigation.navigate('Daily')}>
              {/* <Text style={{alignSelf:"center"}}>Daily Quiz</Text> */}
              <Image source={quizImg} style={{width:200, height:100}}/>
            </Card>
  
            <Card header={HeaderAssesment} style={styles.cardSmall} status='success'>
              {/* <Text> Check on your Assessment</Text> */}
              <Image source={assessImg} style={{width:200, height:100}}/>
            </Card>
  
            <Card header={HeaderClosestD} style={styles.cardSmall} status='info'>
              {/* <Text>Your closest dentist</Text> */}
              <Image source={closeImg} style={{width:200, height:100}}/>
            </Card>  
  
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 1,
        flex: 1,
        flexDirection: 'row'
      },
    
      cardSmall: {
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
      },
})