import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Layout, Text, Card, Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const DailyInfo = () => {
  const navigation = useNavigation();

  const Header = (props) => (
    <Layout {...props}>
      <Text category='h6'>Hygiene</Text>
      <Text category='s1'>Recommended Topic</Text>
      {/*<Image source={tooth} style={{ width: 50, height:50, position: 'right'  }} />*/}
    </Layout>
  );

  const Footer = (props) => (
    <Layout {...props} style={[props.style, styles.footerContainer]}>
      <Button
        style={styles.footerControl}
        size='small'
        status="info"
        onPress={() => navigation.navigate('QuizGame')}>
        LEARN MORE
      </Button>
    </Layout>
  );


  return (
    <Card style={styles.card} header={Header} footer={Footer} status='success'>
      <Text>
        It’s no secret that the general recommendation is to brush at least twice a day. Still, many of us continue to neglect brushing our teeth at night.
        But brushing before bed gets rid of the germs and plaque that accumulate throughout the day.
      </Text>
    </Card>

  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    elevation: 5,
    width: "95%"
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
})