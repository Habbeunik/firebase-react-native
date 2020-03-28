import React from "react";
import * as firebase from "firebase";
import "firebase/database";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator
} from "react-native";
import UserForm from './UserForm';
import UserList from "./UserList";

const firebaseConfig = {
  apiKey: "",
  authDomain: ",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

export default function App() {
  return (
    <View style={styles.container} >
      <UserForm />
      <UserList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
});
