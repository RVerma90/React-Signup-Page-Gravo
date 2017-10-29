import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import LoginForm from './App/Components/LogInForm';

export default class App extends React.Component {
  render() {
    return (
      <Image source={require('./App/Images/space.jpg')} style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('./App/Images/logo_small.png')} style={styles.logo} />
          </View>

          <LoginForm />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'stretch',
      width: null,
      padding: 20,
    },
    logoContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 300,
      height: 80,
    }
});
