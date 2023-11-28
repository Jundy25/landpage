import { View } from "react-native";
import React from "react";

export default function ForgotMonitors(props) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ForgotForms {...props} />
    </View>
  );
}
