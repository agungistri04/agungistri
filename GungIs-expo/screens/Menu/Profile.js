import React from 'react';
import {
  StyleSheet, View, Text, ScrollView, Image
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightskyblue",
    alignItems :"center",
  },

});

const ProfileScreen = () => (
  <View style={styles.container}>
     <Image style={{height: 100, width: 100, marginTop: 60}} source={require('../../assets/Gambar/user.png')}/>
    <ScrollView>
      <View style={{  marginTop:20}}>
        
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 40, textAlign: "center" }}>Profile</Text>
        <Text style={{ color: "blue", marginTop:10, marginBottom:10, fontSize: 15, textAlign:"center", borderRadius: 9, borderWidth :2, borderColor:'#FFFFFF', padding:10 }}>
        Anak Agung Istri Agung Dwi Arismayanti
        </Text>
        <Text style={{ color: "blue", marginTop:10, marginBottom:10, fontSize: 15, textAlign:"center", borderRadius: 9, borderWidth :2, borderColor:'#FFFFFF', padding:10, marginLeft:50, marginRight:50 }}>
        1801010037
        </Text>
        <Text style={{ color: "blue", marginTop:10, marginBottom:10, fontSize: 15, textAlign:"center", borderRadius: 9, borderWidth :2, borderColor:'#FFFFFF', padding:10, marginLeft:50, marginRight:50}}>
        Sistem Informasi 
        </Text>
      </View>
      

    </ScrollView>
  </View>
);

export default ProfileScreen;
