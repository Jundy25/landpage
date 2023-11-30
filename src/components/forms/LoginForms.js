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
        error={false}
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

      <View
        style={{
          marginTop: 10,
          alignItems: 'row',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
      <Text>Forgot your <Text style={{color:"blue", textDecorationLine: "underline"}} onPress={() => navigation.navigate("ForgotForms")}>Password</Text></Text>
      </View>

      <Button 
      onPress={() => navigation.navigate("Main")}
      icon="login" mode="contained" style={{ marginTop: 10, borderRadius: 5, }}>
        Login
      </Button>

      <Text style={{marginTop: 10,}}> Don't have any account ?
      <Text style={{color:"blue", textDecorationLine: "underline",}} onPress={() => navigation.navigate("Register")}>
        Signup
      </Text>
      </Text>
    </View>
  );
}
