import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../firebase';

export default function InputScreen({ navigation }) {
  const [listFire, setListFire] = useState(null);


  useEffect(() => {
    try {
      firebase.bd.ref('/users').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            name: childItem.val().name,
            notelpon: childItem.val().notelpon,
            alamat: childItem.val().alamat,
            catatan: childItem.val().catatan
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.bd.ref('/users/' + key).remove()
  }

  function editFire(key, name, notelpon, alamat, catatan) {
    navigation.navigate("Update",{
      key: key,
      name: name,
      notelpon: notelpon,
      alamat: alamat,
      catatan: catatan
    });
  }


  return (
    <View style={styles.container}>

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.iconFlat}>
            <Text style={styles.text}>Nama: {item.name} </Text>
            <Text style={styles.text}>Telepon : {item.notelpon}</Text>
            <Text style={styles.text}> Alamat: {item.alamat}</Text>
            <Text style={styles.text}> Catatan: {item.catatan}</Text>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire(item.key, item.name, item.notelpon, item.alamat, item.catatan ) }}>
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { delFire(item.key) }}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>

        } />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  textInput: {
    width: 300,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5
  },
  btnEnviar: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '000',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFlat: {
    
    width: 350,
    height: 150,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  btnEnviar: {
    borderWidth: 1,
    borderColor: '#000',
    color: 'blue',
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 10
  },
  viewFlat: {
    maxHeight: 410,
  }
});