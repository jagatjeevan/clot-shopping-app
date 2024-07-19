import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import { fonts } from "../styles/theme";
import ThemedInput from "../common/ThemedInput";
import ThemedButton from "../common/ThemedButton";

export default function EnterEmail(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFilled, setIsEmailFilled] = useState(false);

  const resetState = () => {
    setIsEmailFilled(false);
    props.updateSigninViaEmail(false);
  };

  const handleContinue = () => {
    if (!isEmailFilled) {
      setIsEmailFilled(true);
      props.updateSigninViaEmail(true);
    }
    console.log("i received the email and password", email, password);
  };

  return (
    <>
      {!isEmailFilled ? (
        <ThemedInput
          placeholder="Email Address"
          onChangeText={setEmail}
          value={email}
        />
      ) : (
        <ThemedInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
        />
      )}
      <ThemedButton
        onPressed={handleContinue}
        title="Continue"
        isPrimary={true}
      />
      {isEmailFilled && (
        <View style={styles.additionalLinks}>
          <Text>Forgot Password ?</Text>
          <Text style={styles.resetLink} onPress={resetState}>
            Reset
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    ...fonts.heading1,
  },
  additionalLinks: {
    flexDirection: "row",
    marginTop: 10,
  },
  resetLink: {
    marginLeft: 5,
    fontWeight: "bold",
  },
});
