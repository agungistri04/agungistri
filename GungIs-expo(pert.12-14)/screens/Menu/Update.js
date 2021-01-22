import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from '../firebase';

export default function UpdateScreens
({ route, navigation }) {
  const [name, setName] = useState(route.params.name);
  const [notelpon, setNotelpon] = useState(route.params.notelpon);
  const [alamat, setAlamat] = useState(route.params.alamat);
  const [catatan, setCatatan] = useState(route.params.catatan);

  function upDateFire() {
    try {
      firebase.bd.ref('/users/' + route.params.key).update({
        name: name,
        notelpon: notelpon,
        alamat: alamat,
        catatan: catatan,
      })

    } catch (error) {
      alert(error);
    }
    finally {
      // setAge('');
      setName('');
      setNotelpon('');
      setAlamat('');
      setCatatan('');
      navigation.navigate("Input")
    }
  }

  return (
    <View style={styles.container}>

        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.textInput} onChangeText={name => setName(name)} value={name} />

        <Text style={styles.text}>NoTelepon</Text>
        <TextInput style={styles.textInput} onChangeText={notelpon => setNotelpon(notelpon)} value={notelpon} />

        <Text style={styles.text}>Alamat</Text>
        <TextInput style={styles.textInput} onChangeText={alamat => setAlamat(alamat)} value={alamat} />

        <Text style={styles.text}>Catatan</Text>
        <TextInput style={styles.textInput} onChangeText={catatan => setCatatan(catatan)} value={catatan} />

        <TouchableOpacity style={styles.btnEnviar} onPress={() => { upDateFire() }}>
          <Text style={styles.text}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEnviar} onPress={() => navigation.navigate("Input")}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  "lightskyblue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  btnEnviar: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});