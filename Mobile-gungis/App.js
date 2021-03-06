import * as React from 'react';
import { 
  View, 
  Text 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/homescreen';
import Login from './components/login';
import Signup from './components/signup';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" 
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}>
        <Stack.Screen name="Home" component={Home} options={
          { title: 'Home' },
          { headerLeft: null }
        }/>
        <Stack.Screen name="Login" component={Login} options={
          { title: 'Login' },
          { headerLeft: null }
        }/>
        <Stack.Screen name="Signup" component={Signup} options={
          { title: 'Signup' },
          { headerLeft: null }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;