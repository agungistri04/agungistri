import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput
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
    marginRight: 100,
    marginLeft: 100,
  },
});

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  const app = () => {
      navigation.navigate('Tab');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{paddingTop: 100}} >

        <View >
          <Text style={{ color: "white",fontSize: 40, fontWeight: 'bold', marginBottom: 40, textAlign: "center" }}>Buat Akun Baru</Text>
          <Text style={{ color: "white",  marginTop: 5, marginBottom:5, fontSize: 15, textAlign: "center"  }}>
          Silahkan masukkan nama serta  
          </Text>
          <Text style={{ color: "white",  fontSize: 15, textAlign: "center", marginBottom:20  }}>
          kata sandi yang ingin Anda gunakan 
           </Text>
        </View>

        <View>
        <TextInput
            style={styles.inputView}
            value={email}
            onChangeText={setEmail}
            placeholder="Username"
           
          />
        <TextInput
            style={styles.inputView}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
        
          />
        <TextInput
            style={styles.inputView}
            value={confirmPass}
            onChangeText={setConfirmPass}
            placeholder="Password"
            secureTextEntry={true}
          
          />
        </View>

        <TouchableOpacity
            style={styles.loginbutton}
            onPress={app}
          >
            <Text style={{ 
              color:"#000000",
               }}>Sign up</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
