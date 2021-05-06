import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../views/loginScreen/loginScreenView';
import RegisterScreen from '../views/registerScreen/registerScreenView';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
        <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ 
              animationEnabled:false,
              headerShown: false,
              headerStyle: { backgroundColor: "#333", elevation: 0 }, 
              headerTitleStyle: { color: "#fff" }, 
              // header: HeaderSide 
            }}
          />
           <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ 
              animationEnabled:false,
              headerShown: false,
              headerStyle: { backgroundColor: "#333", elevation: 0 }, 
              headerTitleStyle: { color: "#fff" }, 
              // header: HeaderSide 
            }}
          />
        </Stack.Navigator>
  );
};

export default AuthStack;