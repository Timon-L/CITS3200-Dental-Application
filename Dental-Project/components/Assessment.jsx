import React from 'react';
import { ScrollView, Text, StyleSheet, SafeAreaView, ImageBackground, View, Pressable, Image, TouchableOpacity, Button, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import {Icon } from '@ui-kitten/components';
import * as Font from 'expo-font';

let customFonts = {
  'futura-medium-bt': require('../assets/fonts/futura-medium-bt.ttf'),
  'Futura-Heavy-font': require('../assets/fonts/Futura-Heavy-font.ttf'),
  'Futura-Book-font' : require('../assets/fonts/Futura-Book-font.ttf')
}

class ToochPage extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  constructor(props) {
    super(props)
    this.style = StyleSheet.create({
      imageContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 60,
      },
      SCLView: {
        paddingTop: 150,
      },
      title: {
        fontSize: 42,
        fontFamily: "Futura-Heavy-font",
        paddingTop: Platform.OS === 'ios'? "7%":"4%",
        width: "100%",
        textAlign: "center",
        position: 'relative',
        bottom: "16%",
        color: "rgb(128, 57, 69)"
      },
      assessBtn: {
        borderRadius: 40,
        backgroundColor: "rgb(255, 253, 217)",
        marginBottom: 10,
        width: "60%",
        textAlign: 'center',
        borderColor: 'rgb(128, 57, 69)',
        borderWidth: 2,
        position: 'relative',
        bottom: "-22%"
      },
      btnText: {
        fontSize: 32,
        fontFamily: "futura-medium-bt",
        color: "rgb(128, 57, 69)",
        paddingVertical: 4,
        alignSelf: 'center',
      },
      instructions: {
        fontFamily: "Futura-Book-font",
        fontSize: 16,
        color: 'rgb(128, 57, 69)',
        borderWidth: 2,
        borderColor: 'rgb(128, 57, 69)',
        borderRadius: 10,
        padding: 10,
        position: 'relative',
        bottom: "-20%",
        paddingTop: "3%",
        width: "98%",
      },
      intructImage: {
          flex: 1,
          width: 14,
          height: 14,
          resizeMode: 'contain'
      }
    });
    this.state = { status: null, page: true }
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return this.state.page ? <ImageBackground style={this.style.imageContainer} source={require('../assets/DentalAssessMas.jpg')}>
      <SafeAreaView>
        <Text style={[this.style.title]}>Welcome to your{"\n"}Check Up</Text>
        <View style={this.style.SCLView}>
          <View style={{ alignItems: "center" }}>
            <Pressable style={[this.style.assessBtn]} onPress={() => this.props.navigation.navigate('Camera')}>
              <Text style={this.style.btnText}>Start Here</Text>
            </Pressable>
            <Text style={[this.style.instructions]}>
              <Image style={[this.style.intructImage]} source={require('../assets/TinyMas.png')}/> You will need take a photo of your mouth{"\n"}
              <Image style={[this.style.intructImage]} source={require('../assets/TinyMas.png')}/> Get help from parents, siblings or friends {"\n"}
              <Image style={[this.style.intructImage]} source={require('../assets/TinyMas.png')}/> Or you can take a photo with a mirror{"\n"}
              <Image style={[this.style.intructImage]} source={require('../assets/TinyMas.png')}/> Find a well-lit room{"\n"}
              <Image style={[this.style.intructImage]} source={require('../assets/TinyMas.png')}/> Start your check up with the button above{"\n"}
              <Image style={[this.style.intructImage]} source={require('../assets/TinyMas.png')}/> Have fun!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
      : <App parent={this}></App>;
  }

}

export default withNavigation(ToochPage);