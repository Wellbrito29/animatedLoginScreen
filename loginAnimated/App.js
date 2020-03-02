import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, TextInput, Button, Alert } from 'react-native';
import LottieView from "lottie-react-native";
import * as Animatable from 'react-native-animatable';



export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

      <Animatable.View animation='zoomIn' duration={4000} useNativeDriver={true}>
          <LottieView
            style={styles.firstLottie}
            source={require("./assets/loginLottie.json")}
            autoPlay
            loop
          />
</Animatable.View>

        <Animatable.View style={styles.inputContainer} animation='fadeInUp' duration={4000} useNativeDriver={true}   >

          <TextInput placeholder='EMAIL' />



        </Animatable.View>
        <Animatable.View animation='fadeInUp' duration={4000} useNativeDriver={true} style={styles.inputContainer2}>

          <TextInput placeholder='SENHA' />



        </Animatable.View>

        <Animatable.View style={styles.button} animation='fadeInUp' duration={4000} useNativeDriver={true}>

          <Button title="LOGIN" onPress={() => Alert.alert("Login efetudo")} color='white' />
        </Animatable.View>


      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%', height: '100%', backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstLottie: {
    height: 220,
    width: 200,
    marginTop: 30

  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginBottom: 100,
    borderRadius: 4,
    height: 20,
    marginTop: 150


  },
  inputContainer2: {
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginBottom: 100,
    borderRadius: 4,
    height: 20,
    marginTop: 10


  },
  button: {
    borderWidth: 1,
    width: '50%',
    borderRadius: 5,
    backgroundColor: 'black',
    marginBottom: 90


  }
});
