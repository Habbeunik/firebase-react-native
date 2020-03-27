import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ActivityIndicator
} from "react-native";
import { db } from './App'

const UserForm = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");

  function handleSubmit() {
    setIsSubmitting(true);
    db.ref("developers")
      .push({
        name,
        gender,
        address,
        phone
      })
      .then(docRef => {
        console.log("doc ref", docRef);
        setIsSubmitting(false);
        setName('')
        setGender('')
        setAddress('')
        setPhone('')
      })
      .catch(e => {
        console.log("error don dey", e);
        setIsSubmitting(false);
      });
  }

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      {isSubmitting ? (
        <ActivityIndicator />
      ) : (
        <Button title="Submit" onPress={handleSubmit} />
      )}
    </>
  )
}


const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10
  }
});


export default UserForm;
