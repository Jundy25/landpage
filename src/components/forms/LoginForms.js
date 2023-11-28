import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput, TouchableOpacity } from "react-native-paper";

export default function LoginForms({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <View styles={{ flex: 1}}>
      <Text 
      style={{fontSize: 35, justifyContent: 'center'}}
      >WELCOME BACK</Text>
      
      <TextInput
        mode="outlined"
        placeholder="Email"
        label="Email"
        style={{ marginTop: 10 }}
        error={true}
      />
      <TextInput
        mode="outlined"
        placeholder="Password"
        label="Password"
        secureTextEntry={showPass}
        right={
          <TextInput.Icon
            icon={!showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        style={{ marginTop: 10 }}
      />

      <Text>Forgot your <Button onPress={() => navigation.navigate("ForgotForms")}>Password</Button></Text>

      <Button icon="login" mode="contained" style={{ marginTop: 10, borderRadius: 5, }}>
        Login
      </Button>

      <Text> Don't have any account ?
      <Button onPress={() => navigation.navigate("Register")}>
        Signup
      </Button>
      </Text>
    </View>
  );
}
