import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDvxDSBQL3h6l3GBDUuADK10-VoErSdks8",
      authDomain: "one-time-password-6e411.firebaseapp.com",
      databaseURL: "https://one-time-password-6e411.firebaseio.com",
      projectId: "one-time-password-6e411",
      storageBucket: "one-time-password-6e411.appspot.com",
      messagingSenderId: "1013748243119"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
