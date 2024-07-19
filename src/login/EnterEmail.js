import { useState } from "react";
import { StyleSheet } from "react-native";

import { fonts } from "../styles/theme";
import ThemedInput from "../common/ThemedInput";
import ThemedButton from "../common/ThemedButton";

export default function EnterEmail(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFilled, setIsEmailFilled] = useState(false);

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
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    ...fonts.heading1,
  },
});
