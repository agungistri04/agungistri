import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import firebase from '../firebase';

export default function InputanScreen({ navigation }) {
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [listFire, setListFire] = useState(null);


  useEffect(() => {
    try {
      firebase.bd.ref('/users').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            age: childItem.val().age,
            name: childItem.val().name,
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.database().ref('/users/' + key).remove()
  }

  function editFire(key, name, age) {
    navigation.navigate("Edit",{
      key: key,
      name: name,
      age: age
    });
  }


  function createFire() {
    try {
      firebase.bd.ref('/users').push({
        name: name,
        age: age
      })

    } catch (error) {
      alert(error);
    }
    finally {
      setAge('');
      setName('');
    }
  }

  return (
    <View style={styles.container}>

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.iconFlat}>
            <Text style={styles.text}>Nome: {item.name} </Text>
            <Text style={styles.text}> Idade: {item.age}</Text>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire(item.key, item.name, item.age) }}>
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnEnviar} onPress={() => { delFire(item.key) }}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>

        } />

      <TextInput style={styles.textInput}
        onChangeText={name => setName(name)} value={name}
        placeholder='Yours full name'
      />

      <TextInput style={styles.textInput}
        onChangeText={age => setAge(age)} value={age}
        placeholder='Yours age'
      />

      <TouchableOpacity style={styles.btnEnviar} onPress={createFire}>
        <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5
  },
  btnEnviar: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFlat: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  btnEnviar: {
    borderWidth: 1,
    borderColor: 'red',
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  viewFlat: {
    maxHeight: 410,
  }
});