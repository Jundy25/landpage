import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function ForgotForms({ navigation }) {
    const [showPass, setShowPass] = React.useState(false);
    const [showRePass, setShowRePass] = React.useState(false);
  return (
    <View styles={{ flex: 1}}>
      <Text 
      style={{fontSize: 35, justifyContent: 'center'}}
      >Restore Password</Text>
      
      <TextInput
        mode="outlined"
        placeholder="Enter Old Password"
        label="Old Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
      />
      
      <TextInput
        mode="outlined"
        placeholder="Enter New Password"
        label="New Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowRePass(!showRePass)}
          />
        }
        style={{ marginTop: 10 }}
      />

      <Button mode='contained' style={{ marginTop: 10, borderRadius: 5,}}>
      Enter
      </Button>

      <Text>Back to Login <Button onPress={() => navigation.pop()}>Login</Button></Text>

    </View>
  );
}
