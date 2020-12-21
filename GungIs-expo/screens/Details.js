import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightskyblue", 
    alignItems: "center" ,
  },
});

const DetailsScreen = ({ navigation }) => (
  <View style={styles.container}>
    
      <View>
        <View style={{ padding: 50 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 5, marginTop:10, textAlign: "center" }}>Daftar Tukang Kunci </Text>
        </View>
      <TouchableOpacity onPress={() => navigation.navigate('Form')}>
        <Text  style={{ color: "black", marginTop:10, marginBottom:10, fontSize: 20, fontWeight: 'bold'}}>
       ‍●Dita Kunci 
        </Text>
        <Text style={{ color: "black"}}>
        Jasa Pembuatan Kunci Duplikat
        </Text>
        <Text style={{ color: "black"}}>
        Jl. Raya, Sibang Kaja, Kec. Abiansemal, Kab. Badung, Bali
        </Text>
        <Text style={{ color: "black"}}>
        Buka Setiap Hari 
        </Text>
        <Text style={{ color: "black"}}>
        Pukul :08.00 Tutup Pukul 21:00
        </Text>
        <Text style={{ color: "black"}}>
        No tlp :0813-3593-3070
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Form')}>
        <Text style={{ color: "black", marginTop:30, marginBottom:10, fontSize: 20, fontWeight: 'bold'}}>
        ●Ahli Kunci 24 Jam
        </Text>
        <Text style={{ color: "black"}}>
        Jasa Pembuatan Kunci Duplikat
        </Text>
        <Text style={{ color: "black"}}>
        Jl.Raya Darmasaba, Kab. Badung Bali
        </Text>
        <Text style={{ color: "black"}}>
        Buka 24 Jam
        </Text>
        <Text style={{ color: "black"}}>
        No tlp :0813-3593-3070
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Form')}>
        <Text style={{ color: "black", marginTop:30, marginBottom:10, fontSize: 20, fontWeight: 'bold'}}>
        ●Aneka Kunci
        </Text>
        <Text style={{ color: "black"}}>
        Jasa Pembuatan Kunci Duplikat
        </Text>
        <Text style={{ color: "black"}}>
        Jl. Ahmad Yani Utara No.382, Peguyangan,
        </Text>
        <Text style={{ color: "black"}}>
         Kec. Denpasar Utara, Kota Denpasar
        </Text>
        <Text style={{ color: "black"}}>
        Buka Setiap Hari 
        </Text>
        <Text style={{ color: "black"}}>
        Pukul :10.00-21:00
        </Text>
        <Text style={{ color: "black"}}>
         No tlp :0813-3875-9054
        </Text>
        </TouchableOpacity>

      </View>
  </View>
);
export default DetailsScreen;
