import React from "react";
import { FlatList, Text, View } from "react-native";
import { db } from "./App";

const UserList = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    db.ref("developers").on("value", snapshot => {
      const value = snapshot.val();
      console.log('valur', value)
      const data = [];
      for (key in value) {
        data.push(value[key]);
      }
      setData(data);
    });
  },[]);

  return (
    <>
      <Text>User List</Text>
      <View>
        {data.map((item, index) => (
          <Text key={index} >{item.name}</Text>
        ))}
      </View>
    </>
  );
};

export default UserList;
