import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import { Button } from 'react-native-elements';
import {useNavigation} from '@react-navigation/core';
import {AuthContext} from '../../navigation/authProvider';

const RegisterScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {register} = useContext(AuthContext);
  const navigation = useNavigation();
  const [error, setError] = React.useState({
    status: false,
    errorMessage: '',
  });

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#04BF9D" />
      <View style={styles.container}>
        <ScrollView style={styles.loginScrollView}>
          <Image
            source={require('./../../assets/logo-trans.png')}
            style={styles.loginLogo}
          />
          <Text style={styles.demoText}></Text>
          {error.status && (
            <Text style={styles.errorText}>{error.errorMessage}</Text>
          )}
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            placeholder="username"
            placeholderTextColor="#FFFFFF"
            value={username}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={setPassword}
            placeholderTextColor="#FFFFFF"
            placeholder="password"
            value={password}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="SIGN UP"
                 buttonStyle={{backgroundColor:"#FFFFFF"}}
                 titleStyle={{color:"#04BF9D"}}
                onPress={() => register(username, password)}
              />
            </View>
          </View>
          <View style={styles.button2}>
            <Button type="clear" titleStyle={{color:"#FFFFFF"}} title ="Have an account? Sign In" onPress={() => navigation.navigate('Login')} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04BF9D',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginScrollView: {
    // backgroundColor: '#FFFFFF',
    width: 350,
    height: 600,
    position: 'absolute',
    flex: 1,
    top: 100,
    padding: 20,
  },
  demoText: {
    color: '#778691',
    textAlign: 'center',
    marginTop: 20,
  },
  errorText: {
    color: '#EF0D33',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: -5,
  },
  loginLogo: {
    width: 140,
    height: 150,
    alignSelf: 'center',
  },
  input: {
    height: 45,
    margin: 10,
    top: 20,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor:"#FFFFFF",
    borderRadius: 10,
    backgroundColor: '#02947A',
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    borderRadius: 40,
    width: 150,
    height: 40,
    marginTop: 40,
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
  },
  button2: {
    borderRadius: 40,
    width: 250,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    fontFamily: 'Montserrat',
  },
});


export default RegisterScreen;
