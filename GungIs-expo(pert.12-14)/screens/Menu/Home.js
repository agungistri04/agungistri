import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightskyblue",
    alignItems: 'center',
    
  },

});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Image style={{height: 100, width: 100, marginTop: 60}} source={require('../../assets/Gambar/key.png')}/>
    
      <View style={{marginLeft: 10}}>
      
      <Text style={{ color: "black", marginLeft:30, marginRight:30, marginTop: 50, fontSize: 25, fontWeight:'bold', textAlign: "center"  }}>
      Layanan Jasa Tukang Kunci 
      </Text>
        <Text style={{ color: "black", textAlign: "center", marginLeft: 50, marginRight: 50}}>
        S'Key merupakan aplikasi yang dapat membantu anda dalam mencari tukang kunci yang berada di sekitar lokasi anda.
        </Text>
        
        <Text style={{ color: "black", textAlign: "center", marginLeft: 30, marginRight: 30, marginTop: 200 }}>
        Info lebih lanjut
        </Text>
 
        
        <Text onPress={() => navigation.navigate('Details')} style={{ color: "black", marginTop:1, marginBottom:10, fontSize: 15, 
        fontWeight: 'bold',textAlign: 'center', borderWidth:2, borderRadius: 10, borderColor:"white" ,padding:10, marginLeft:80, marginRight:80}}>
        Daftar Tukang Kunci
        </Text>

        <Text onPress={() => navigation.navigate('Input')} style={{ color: "black", marginTop:1, marginBottom:10, fontSize: 15, 
        fontWeight: 'bold',textAlign: 'center', borderWidth:2, borderRadius: 10, borderColor:"white" ,padding:10, marginLeft:80, marginRight:80}}>
        Daftar Pemesanan Kunci
        </Text>


      </View>

 
  </View>
);

export default HomeScreen;
