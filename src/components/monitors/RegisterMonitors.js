import { View } from "react-native";
import React from "react";
import SignupForm from "../forms/SignupForms";

export default function RegisterMonitors(props) {
  return (
    <View style={{ flex: 1, padding: 50,}}>
      <SignupForm {...props} />
    </View>
  );
}
