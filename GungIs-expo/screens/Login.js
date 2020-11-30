import React from 'react';
import {
  StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
   
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 1,
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    padding: 15,
    marginRight: 40,
    marginLeft: 40,
  },
  loginbutton: {
    backgroundColor: "white",
    borderRadius: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
  },


});

const LoginScreen = ({ navigation }) => {
  View
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlerLogin = () => {
    navigation.navigate('Tab');
  };

  return (
    
    <ScrollView style={styles.container}>
      
      <View style={{ paddingTop: 100 }}>
        <Text style={{ color: "white",fontSize: 40, fontWeight: 'bold', marginBottom:1, textAlign: "center" }}>S'Key </Text>
        <Text style={{color: "white", textAlign: "center", marginBottom: 50}}>(Service Key) </Text>

      
      <Text style={{ color: "white",fontSize: 25, fontWeight: 'bold', marginBottom:20, textAlign: "center" }}>Login </Text>
        <View>
          <TextInput style={styles.inputView}
            value={email}
            onChangeText={setEmail}
            placeholder="Username"
          />
          <TextInput style={styles.inputView}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={handlerLogin}
          >
            <Text style={{
              color: "black",
            }}>Login</Text>
          </TouchableOpacity>

          <View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={{ color: "white", textAlign: "center" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default LoginScreen;
