import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import { fonts } from "../styles/theme";
import ThemedInput from "../common/ThemedInput";
import ThemedButton from "../common/ThemedButton";
import withAuth from "../context/authContext";

function EnterEmail(props) {
  const { updateSigninViaEmail, authContext } = props;
  const { dispatch } = authContext;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFilled, setIsEmailFilled] = useState(false);

  const resetState = () => {
    setIsEmailFilled(false);
    updateSigninViaEmail(false);
  };

  const handleContinue = () => {
    if (!isEmailFilled) {
      setIsEmailFilled(true);
      updateSigninViaEmail(true);
      return;
    }
    const user = { email, password };
    dispatch.login(user);
  };

  return (
    <>
      {!isEmailFilled ? (
        <ThemedInput
          placeholder="Email Address"
          onChangeText={setEmail}
          autoCorrect={false}
          value={email}
        />
      ) : (
        <ThemedInput
          placeholder="Password"
          secureTextEntry={true}
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

export default withAuth(EnterEmail);
