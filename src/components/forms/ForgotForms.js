import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function ForgotForms({ navigation }) {
  return (
    <View styles={{ flex: 1}}>
      <Text 
      style={{fontSize: 25, justifyContent: 'center'}}
      >Forgot Password or Email</Text>
      
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}

      />
      
      

      <Button mode='contained' style={{ marginTop: 10, borderRadius: 5,}}>
      Enter
      </Button>

      <Text>Back to Login <Button onPress={() => navigation.pop()}>Login</Button></Text>

    </View>
  );
}
