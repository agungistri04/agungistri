import React, {useState} from 'react';
import {
    StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert
} from 'react-native';
import Constants from 'expo-constants';
import firebase from '../firebase'

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

const FormDetail = () => {

    const [state, setState] = useState({
        name: "",
        notelpon: "",
        alamat: "",
        catatan: ""
    })

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const savedata = async () => {
        if (state.name === '') {
            alert('Please provide a name')
        }
        else {
            await firebase.bd.ref('users').push({
                name: state.name,
                notelpon: state.notelpon,
                alamat: state.alamat,
                catatan: state.catatan
            })
            alert('Seved!')
        }
    }

    return (
        <ScrollView style={styles.container}>

            <View style={{ paddingTop: 100 }}>
                <Text style={{ color: "white", fontSize: 40, fontWeight: 'bold', marginBottom: 1, textAlign: "center" }}>Form pemanggilan jasa</Text>
                <Text style={{ color: "white", textAlign: "center", marginBottom: 50 }}>(Service Key)</Text>


                <Text style={{ color: "white", fontSize: 25, fontWeight: 'bold', marginBottom: 20, textAlign: "center" }}>Data diri </Text>
                <View>
                    <TextInput style={styles.inputView}
                        // value={email}
                        // onChangeText={setEmail}
                        placeholder="Nama"
                        onChangeText={(value) => handleChangeText("name", value)}
                    />
                    <TextInput style={styles.inputView}
                        // value={password}
                        // onChangeText={setPassword}
                        placeholder="NomorTelepon"
                        onChangeText={(value) => handleChangeText("notelpon", value)}
                    />
                    <TextInput style={styles.inputView}
                        // value={password}
                        // onChangeText={setPassword}
                        placeholder="Alamat"
                        onChangeText={(value) => handleChangeText("alamat", value)}
                    />
                    <TextInput style={styles.inputView}
                        // value={password}
                        // onChangeText={setPassword}
                        placeholder="Catatan"
                        onChangeText={(value) => handleChangeText("catatan", value)}
                    />

                    <TouchableOpacity
                        style={styles.loginbutton}
                        onPress={savedata}
                    >
                        <Text style={{
                            color: "#000000",
                        }}>Send</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </ScrollView>
    );
};
export default FormDetail;
