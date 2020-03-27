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
  apiKey: "AIzaSyDWB65SPnAPyyZHuSGkjNUHeRsg-5I88kA",
  authDomain: "yourapp-84ed3.firebaseapp.com",
  databaseURL: "https://yourapp-84ed3.firebaseio.com",
  projectId: "yourapp-84ed3",
  storageBucket: "yourapp-84ed3.appspot.com",
  messagingSenderId: "1017023987397",
  appId: "1:1017023987397:web:a6aea57f53c0ed77ad3aac"
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
