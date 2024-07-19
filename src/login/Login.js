import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { fonts } from "../styles/theme";

import EnterEmail from "./EnterEmail";
import LoginViaOther from "./LoginViaOther";

export default function Login() {
  const [signingViaEmail, setSigningViaEmail] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign In</Text>

      <EnterEmail updateSigninViaEmail={setSigningViaEmail} />

      {!signingViaEmail && <LoginViaOther />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    padding: 20,
  },
  heading: {
    ...fonts.heading1,
    marginBottom: 30,
  },
});
